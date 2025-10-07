"use client";

import { useState, useEffect } from 'react';
import DotBackground from "@/components/ui/dot-background";
import Image from 'next/image';
import { imageDB, type StoredImage } from '@/lib/indexeddb';

interface GeneratedImageData {
  id: string;
  imageUrl: string;
  prompt: string;
  generationTime: number;
  timestamp: number;
}

const IMAGE_MODELS = [
  {
    id: 'gemini-2.5-flash-image-preview',
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    speed: 'Fast'
  },
  {
    id: 'gpt-image-1',
    name: 'GPT Image 1',
    provider: 'OpenAI',
    speed: 'Slow'
  },
];

export default function AetherScopeClient() {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('gemini-2.5-flash-image-preview');
  const [images, setImages] = useState<GeneratedImageData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generationTime, setGenerationTime] = useState(0);
  const [expandedImage, setExpandedImage] = useState<GeneratedImageData | null>(null);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      setGenerationTime(0);
      interval = setInterval(() => {
        setGenerationTime((prev) => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Load saved images from IndexedDB on mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        const savedImages = await imageDB.getAllImages();
        setImages(savedImages);
      } catch (err) {
        console.error('Failed to load saved images:', err);
      }
    };
    loadImages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await imageDB.deleteImage(id);
      setImages(prev => prev.filter(img => img.id !== id));
      if (expandedImage?.id === id) {
        setExpandedImage(null);
      }
    } catch (err) {
      console.error('Failed to delete image:', err);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGenerationTime(0);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model: selectedModel }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image');
      }

      const newImage: GeneratedImageData = {
        id: Date.now().toString(),
        imageUrl: data.imageUrl,
        prompt,
        generationTime: data.generationTime,
        timestamp: Date.now(),
      };

      // Save to IndexedDB
      await imageDB.addImage(newImage);
      
      setImages(prev => [newImage, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  const astronomicalPrompts = [
    "A magnetar with intense magnetic field lines distorting spacetime, glowing with X-rays",
    "A pulsar's lighthouse beam of radiation cutting through the cosmic void",
    "A quasar at the edge of the observable universe, jets of plasma shooting millions of light-years",
    "A black hole's event horizon with a glowing accretion disk spiraling inward",
    "A neutron star collision creating gravitational waves and heavy elements",
    "A gamma-ray burst tearing through interstellar space, the universe's most violent explosion",
  ];

  // Rotate placeholder text every 5 seconds
  useEffect(() => {
    if (!isRotating) return;

    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % astronomicalPrompts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isRotating]);

  const handlePromptChange = (value: string) => {
    setPrompt(value);
    if (value.trim()) {
      setIsRotating(false);
    } else {
      // If the value is empty, resume rotation
      setIsRotating(true);
    }
  };

  const handleTabKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab' && isRotating) {
      e.preventDefault();
      setPrompt(astronomicalPrompts[currentPlaceholder]);
      setIsRotating(false);
    }
  };

  return (
    <DotBackground>
      <div className="h-full w-full p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              AetherScope
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced visualizations of the cosmos powered by real time astronomical observations and cutting-edge AI image and video generation.
            </p>
          </div>

          {/* Image Generation Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Input Area */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="prompt" className="block text-sm font-semibold text-neutral-300">
                  Prompt
                </label>

                {/* Model Selector */}
                <select
                  id="model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={isGenerating}
                  className="px-3 py-1.5 bg-white/[0.05] border border-white/20 rounded-lg text-xs text-neutral-300 focus:outline-none focus:border-white/40 disabled:opacity-50 transition-colors"
                >
                  {IMAGE_MODELS.map((model) => (
                    <option key={model.id} value={model.id} className="bg-black">
                      {model.name} ({model.speed})
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                {!prompt && (
                  <div
                    key={currentPlaceholder}
                    className="absolute inset-0 px-4 py-3 pointer-events-none text-gray-500 text-sm animate-fade-in"
                  >
                    {astronomicalPrompts[currentPlaceholder]}
                  </div>
                )}
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => handlePromptChange(e.target.value)}
                  onKeyDown={(e) => {
                    handleTabKey(e);
                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                  className="w-full h-32 px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all relative"
                  disabled={isGenerating}
                />
              </div>

              {/* Quick Prompts */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Quick prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {astronomicalPrompts.map((quickPrompt, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(quickPrompt)}
                      disabled={isGenerating}
                      className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
                    >
                      <span className="hidden sm:inline">{quickPrompt.slice(0, 40)}...</span>
                      <span className="sm:hidden">{quickPrompt.slice(0, 25)}...</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Image
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
            </div>

            {/* Loading Card with Timer */}
            {isGenerating && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <svg className="animate-spin h-16 w-16 text-blue-500" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-white mb-2">Generating Image...</p>
                    <p className="text-3xl font-bold text-blue-400 tabular-nums">
                      {generationTime.toFixed(1)}s
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Generated Images Gallery */}
            {images.length > 0 && !isGenerating && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Generated Images</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all group relative"
                    >
                      <div 
                        onClick={() => setExpandedImage(img)}
                        className="relative w-full aspect-square bg-black/50 rounded-lg overflow-hidden mb-2 cursor-pointer"
                      >
                        <Image
                          src={img.imageUrl}
                          alt={img.prompt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">{img.prompt}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500">{img.generationTime.toFixed(1)}s</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(img.id);
                          }}
                          className="p-1 hover:bg-red-500/20 rounded text-red-400 hover:text-red-300 transition-colors"
                          title="Delete image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expanded Image Modal */}
            {expandedImage && (
              <div
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setExpandedImage(null)}
              >
                <div className="max-w-3xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white">Generated Image</h3>
                      <p className="text-xs text-gray-400">
                        Generated in {expandedImage.generationTime.toFixed(1)}s
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={expandedImage.imageUrl}
                        download="aetherscope-generated.png"
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs md:text-sm text-gray-300 transition-all flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                      <button
                        onClick={() => setExpandedImage(null)}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs md:text-sm text-gray-300 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full aspect-square bg-black/50 rounded-lg overflow-hidden max-h-[70vh]">
                    <Image
                      src={expandedImage.imageUrl}
                      alt={expandedImage.prompt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 italic text-center line-clamp-2">"{expandedImage.prompt}"</p>
                </div>
              </div>
            )}

            {/* Info Cards */}
            {images.length === 0 && !isGenerating && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">AI-Powered</h4>
                  <p className="text-xs text-gray-400">
                    State-of-the-art image generation models
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Astronomically Accurate</h4>
                  <p className="text-xs text-gray-400">
                    Trained on real space imagery
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Fast Generation</h4>
                  <p className="text-xs text-gray-400">
                    High-quality results in seconds
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DotBackground>
  );
}


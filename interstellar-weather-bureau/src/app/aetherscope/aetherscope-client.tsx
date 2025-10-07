"use client";

import { useState, useEffect } from 'react';
import DotBackground from "@/components/ui/dot-background";
import Image from 'next/image';

interface GeneratedImageData {
  imageUrl: string;
  prompt: string;
  generationTime: number;
  timestamp: number;
}

export default function AetherScopeClient() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<GeneratedImageData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generationTime, setGenerationTime] = useState(0);
  const [expandedImage, setExpandedImage] = useState<GeneratedImageData | null>(null);

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

  // Load saved images from localStorage on mount
  useEffect(() => {
    const savedImages = localStorage.getItem('aetherscope-images');
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (err) {
        console.error('Failed to load saved images:', err);
      }
    }
  }, []);

  // Save images to localStorage whenever they change
  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem('aetherscope-images', JSON.stringify(images));
    }
  }, [images]);

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
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image');
      }

      const newImage: GeneratedImageData = {
        imageUrl: data.imageUrl,
        prompt,
        generationTime: data.generationTime,
        timestamp: Date.now(),
      };

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
              <label htmlFor="prompt" className="block text-sm font-semibold text-gray-300 mb-3">
                Describe the astronomical scene you want to visualize
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A breathtaking view of the Crab Nebula with intricate filaments and a pulsar at its center..."
                className="w-full h-32 px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                disabled={isGenerating}
              />

              {/* Quick Prompts */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Quick prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {astronomicalPrompts.map((quickPrompt, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(quickPrompt)}
                      disabled={isGenerating}
                      className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {quickPrompt.slice(0, 40)}...
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
                      onClick={() => setExpandedImage(img)}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <div className="relative w-full aspect-square bg-black/50 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={img.imageUrl}
                          alt={img.prompt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">{img.prompt}</p>
                      <p className="text-xs text-gray-500 mt-1">{img.generationTime.toFixed(1)}s</p>
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
                <div className="max-w-5xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Generated Image</h3>
                      <p className="text-xs text-gray-400">
                        Generated in {expandedImage.generationTime.toFixed(1)}s
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={expandedImage.imageUrl}
                        download="aetherscope-generated.png"
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm text-gray-300 transition-all flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                      <button
                        onClick={() => setExpandedImage(null)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm text-gray-300 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full aspect-square bg-black/50 rounded-lg overflow-hidden">
                    <Image
                      src={expandedImage.imageUrl}
                      alt={expandedImage.prompt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-400 italic text-center">"{expandedImage.prompt}"</p>
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


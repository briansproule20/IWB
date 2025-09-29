'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface APOD {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
  copyright?: string;
}

export default function APODCard() {
  const [apod, setApod] = useState<APOD | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch('/api/nasa/apod');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setApod(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
    const interval = setInterval(fetchAPOD, 60 * 60 * 1000); // Refresh hourly
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-gray-500">Loading image...</div>
      </div>
    );
  }

  if (error || !apod) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-red-500">Failed to load</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-full flex-col space-y-3 overflow-hidden">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Astronomy Picture of the Day
          </h3>
          <p className="text-xs text-gray-500">{apod.date}</p>
        </div>

        {apod.media_type === 'image' && (
          <div
            className="relative flex-1 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsExpanded(true)}
          >
            <Image
              src={apod.url}
              alt={apod.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white">{apod.title}</h4>
          <p className="line-clamp-3 text-xs text-gray-600 dark:text-gray-400">
            {apod.explanation}
          </p>
          {apod.copyright && (
            <p className="text-xs text-gray-500">© {apod.copyright}</p>
          )}
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative">
            <Image
              src={apod.hdurl || apod.url}
              alt={apod.title}
              width={1920}
              height={1080}
              className="rounded-lg w-full h-auto max-h-[90vh] max-w-6xl object-contain"
              unoptimized
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              onClick={() => setIsExpanded(false)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
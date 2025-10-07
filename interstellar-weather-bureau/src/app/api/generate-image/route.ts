import { experimental_generateImage as generateImage } from 'ai';
import { openai } from '@/echo';
import { NextRequest } from 'next/server';

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== 'string') {
      return Response.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    const startTime = Date.now();
    
    const result = await generateImage({
      model: openai.image('gpt-image-1'),
      prompt,
    });

    const generationTime = (Date.now() - startTime) / 1000;
    const imageData = result.image;
    const imageUrl = `data:${imageData.mediaType};base64,${imageData.base64}`;

    return Response.json({
      imageUrl,
      generationTime,
    });
  } catch (error) {
    console.error('Image generation error:', error);
    return Response.json(
      { error: 'Failed to generate image', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}


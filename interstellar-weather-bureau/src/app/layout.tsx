import Header from '@/app/_components/header';
import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Interstellar Weather Bureau',
  description: 'AI-powered chat application with Echo billing integration',
  icons: {
    icon: '/IWB-favicon.png',
    apple: '/IWB-favicon.png',
  },
  openGraph: {
    images: ['/IWB-favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col antialiased bg-black`}
      >
        <Providers>
          <Header title="The Interstellar Weather Bureau" />
          <div className="min-h-0 flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

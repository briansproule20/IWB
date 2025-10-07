'use client';

import Header from '@/app/_components/header';
import { Providers } from '@/providers';
import { Geist, Geist_Mono } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showEchoAccount = pathname === '/chat' || pathname === '/aetherscope';

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col antialiased bg-black`}
      >
        <Providers>
          <Header title="The Interstellar Weather Bureau" showEchoAccount={showEchoAccount} />
          <div className="min-h-0 flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

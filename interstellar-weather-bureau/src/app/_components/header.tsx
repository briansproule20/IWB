import { EchoAccount } from '@/components/echo-account-next';
import { isSignedIn } from '@/echo';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { MobileNav } from './mobile-nav';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: FC<HeaderProps> = async ({
  title = 'My App',
  className = '',
}) => {
  const signedIn = await isSignedIn();

  return (
    <header
      className={`border-white/[0.2] border-b bg-black shadow-sm ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/IWB-favicon.png"
              alt="IWB Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <h1 className="font-semibold text-white text-xl">
              <span className="hidden md:inline">{title}</span>
              <span className="md:hidden">The IWB</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-neutral-300 hover:text-white font-medium transition-colors">
              Home
            </Link>
            <Link href="/reports" className="text-neutral-300 hover:text-white font-medium transition-colors">
              Reports
            </Link>
            <Link href="/vehicles" className="text-neutral-300 hover:text-white font-medium transition-colors">
              Vehicles
            </Link>
            <Link href="/aetherscope" className="text-neutral-300 hover:text-white font-medium transition-colors">
              AetherScope
            </Link>
            <Link href="/chat" className="text-neutral-300 hover:text-white font-medium transition-colors">
              Chat
            </Link>
            <Link href="/gallery" className="text-neutral-300 hover:text-white font-medium transition-colors">
              Gallery
            </Link>
            <EchoAccount />
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

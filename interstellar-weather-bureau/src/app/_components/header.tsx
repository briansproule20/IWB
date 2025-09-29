import { EchoAccount } from '@/components/echo-account-next';
import { isSignedIn } from '@/echo';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

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
      className={`border-gray-200 border-b bg-white shadow-sm ${className}`}
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
            <h1 className="font-semibold text-gray-900 text-xl">{title}</h1>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/chat" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Chat
            </Link>
            <EchoAccount />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

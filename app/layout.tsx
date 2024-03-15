import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { metadataInfo } from '@/lib/data';
import ActiveSectionContextProvider from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: metadataInfo.title,
  description: metadataInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <div className="bg-red-400 absolute top-0 right-[15%] h-[40rem] w-[32rem] rounded-full blur-[32rem] sm:w-[40rem] "></div>
        <div className="bg-blue-400 absolute top-0 right-[40%] h-[40rem] w-[32rem] rounded-full blur-[32rem] sm:w-[40rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

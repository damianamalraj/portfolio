import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel | Full-Stack Developer',
  description:
    'I am a full-stack developer with 2 years of experience. I specialize in React, Next.js, TypeScript, .NET, SQL and NoSQL databases. I am open to full-time opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className="bg-red-400 absolute top-0 left-[40%] h-[32rem] w-[32rem] rounded-full blur-[32rem] sm:w-[40rem]"></div>
        <div className="bg-blue-400 absolute top-0 right-[40%] h-[32rem] w-[32rem] rounded-full blur-[32rem] sm:w-[40rem]"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}

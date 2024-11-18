import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { metadataInfo } from '@/lib/data';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from '@/components/header';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import BookingCallBtn from '@/components/booking-call-btn';

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
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-red-400 absolute top-0 right-[15%] h-[40rem] w-[32rem] rounded-full blur-[32rem] sm:w-[40rem]"></div>
        <div className="bg-blue-400 absolute top-0 right-[40%] h-[40rem] w-[32rem] rounded-full blur-[32rem] sm:w-[40rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <ThemeSwitch />
            <BookingCallBtn />

            <Toaster position="top-right" toastOptions={{ duration: 10000 }} />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

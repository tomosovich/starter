import '~/styles/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { TRPCReactProvider } from '~/trpc/react';
import Header from '~/app/_components/header';
import { Providers } from '~/lib/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'The Hive Mind',
  description: 'Productivity Tools for Teams',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
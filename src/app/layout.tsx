import '~/styles/globals.css';
import React from 'react';
import { ThemeProvider } from '~/components/theme-provider';
import { Inter } from 'next/font/google';
import { TRPCReactProvider } from '~/trpc/react';
import Header from '~/app/_components/header';

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
    <html lang='en'>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
          <script src='node_modules/preline/dist/preline.js'></script>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
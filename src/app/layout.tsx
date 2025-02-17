"use client";

import '@/styles/globals.css';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import { useRouter } from "next/navigation";
import Header from '@/components/Header';
import localFont from 'next/font/local'

const myFont = localFont({
    src: '../../public/fonts/TTF/NanumSquareNeo-bRg.ttf',
    display: 'swap',
    variable: '--font-my-font'
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        }
    }
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        
        <html lang="kr" className={myFont.className}>
            <head>
                <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
            </head>
            <body>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
}

"use client";

import '@/styles/globals.css';
import { QueryClient, QueryClientProvider, useIsFetching, useIsMutating } from '@tanstack/react-query';
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import LoadingBar from '@/components/LoadingBar';
import Header from '@/components/Header';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {

    const router = useRouter();

    React.useEffect(() => {
        const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
            const error = event?.query.state.error as any;
            
            if (error?.response?.status === 403) {
                console.log("403 Forbidden: 로그인 페이지로 이동");
                router.push(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
            }
            else if (Number(error?.response?.status) >= 400) {
                console.log(`${error?.response?.status} : 서버 오류, 에러 페이지로 이동`);
                // router.push("/error");
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        
        <html lang="kr">
            <body>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
}

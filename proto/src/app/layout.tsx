"use client"; 

import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import LoadingBar from '@/components/LoadingBar';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter(); 
    const [isFetching, setIsFetching] = useState(false);
    
    useEffect(() => {
        const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
            if (event?.query.getObserversCount() > 0) {
                setIsFetching(queryClient.isFetching() > 0);

                const error = event?.query.state.error as any;

                if (error?.response?.status === 403) {
                    console.log("403 Forbidden: 로그인 페이지로 이동");
                    router.push(`/login?redirect=${encodeURIComponent(window.location.pathname)}`); // ✅ 403이면 로그인 페이지로 이동
                }
                else if (Number(error?.response?.status) >= 400) {
                    console.log(`${error?.response?.status} : 서버 오류, 에러 페이지로 이동`);
                    // router.push("/error");
                }
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    {isFetching && <LoadingBar />}
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
}

import React, { useRef, useEffect, JSX } from 'react';

interface InfiniteScrollListProps<T> {
    data: T[];
    renderItem: (item: T) => JSX.Element | null;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
}

const InfiniteScrollList = <T,>({
    data,
    renderItem,
    fetchNextPage,
    isFetchingNextPage,
}: InfiniteScrollListProps<T>) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!observerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [fetchNextPage]);

    return (
        <div>
            <ul>
                {data.map(renderItem)}
            </ul>
            <div ref={observerRef} />
            {isFetchingNextPage && <p>로딩 중...</p>}
        </div>
    );
};

export default InfiniteScrollList;

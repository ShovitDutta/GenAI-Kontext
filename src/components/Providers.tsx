"use client";
import { SessionProvider } from "next-auth/react";
import getQueryClient from "@/lib/get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient();
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </SessionProvider>
    );
}
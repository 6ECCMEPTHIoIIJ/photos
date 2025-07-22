'use client';

import {ThemeProvider} from "next-themes";
import {ReactNode} from "react";

export interface ProvidersProps {
    children: ReactNode;
}

export default function Providers(props: ProvidersProps) {
    const children = props.children;
    return <ThemeProvider>{children}</ThemeProvider>
}
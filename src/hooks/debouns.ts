import { useState, useEffect } from "react"

const DEFAULT_DELAY: number = 1000;

export function useDebouns(value: string, delay: number = DEFAULT_DELAY): string {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay]);

    return debounced;
}
import { useState, useEffect } from "react"

export function useDebouns(value: string, delay: number = 1000): string {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay]);

    return debounced;
}
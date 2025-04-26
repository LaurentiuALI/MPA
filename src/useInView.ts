// useInView.ts
import { useEffect, useRef, useState } from "react";

export function useInView() {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                } else {
                    setVisible(false);
                }
            },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    },);

    return [ref, isVisible] as const;
}

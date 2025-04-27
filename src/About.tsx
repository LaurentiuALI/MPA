import { Dot } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TopProduse() {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [selected, setSelected] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const totalScreens = 4;

    const scrollToScreen = (idx: number) => {
        if (!sectionRef.current) return;
        sectionRef.current.scrollTo({
            top: idx * window.innerHeight,
            behavior: "smooth",
        });
        setCurrentScreen(idx);
        setSelected(idx);
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!isVisible) return; // only scroll when visible
        e.preventDefault();
        const delta = e.deltaY;
        let next = currentScreen;

        if (delta > 0 && currentScreen < totalScreens - 1) {
            next = currentScreen + 1;
        } else if (delta < 0 && currentScreen > 0) {
            next = currentScreen - 1;
        }

        if (next !== currentScreen) {
            scrollToScreen(next);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 1 } // 50% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            onWheel={handleWheel}
            id="about"
            className="
              sticky top-0 left-0
              w-screen h-screen
              overflow-y-auto overflow-x-hidden
              snap-y snap-mandatory
              scroll-smooth
            "
        >
            <aside className={`${isVisible ? " fixed " : "absolute bg-orange-500"}transition-transform duration-[2000] right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20`}>
                {Array.from({ length: totalScreens }).map((_, i) => (
                    <Dot
                        key={i}
                        className={selected === i ? "text-black w-16 h-16" : "text-white w-16 h-16"}
                        onClick={() => scrollToScreen(i)}
                    />
                ))}
            </aside>

            <div className="snap-start w-full h-screen flex items-center justify-center bg-amber-500">
            </div>
            <div className="snap-start w-full h-screen flex items-center justify-center bg-red-500">
                Red
            </div>
            <div className="snap-start w-full h-screen flex items-center justify-center bg-green-500">
                Green
            </div>
            <div className="snap-start w-full h-screen flex items-center justify-center bg-yellow-500">
                Yellow
            </div>
        </section>
    );
}

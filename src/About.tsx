import { Dot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./components/ui/button";

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

            <div className="snap-start w-full h-screen flex items-center justify-around bg-amber-500 overflow-hidden">
                <div className="mt-48">
                    <img src="./screen-1.svg" alt="Screen 1" className="w-[25vw] h-[107vh]  object-cover" />
                </div>
                <div className="flex flex-col h-[60vh] justify-start w-[30vw] mr-80">
                    <p className="text-orange-900 font-semibold text-2xl">DESPRE APLICAȚIE</p>
                    <h1 className="font-bold text-white text-8xl">Descoperă cele mai noi cafenele</h1>
                    <p className="font-semibold text-white text-2xl mt-40">Aici găsești toate cafenele din orașul tău într-un singur lor. Intră acum în aplicație și descoperă ultimele noutăți în materie de cafea din apropierea ta.</p>
                    <span className="w-[100px] h-[100px]">
                        <img src="/arrow-white.png" className=" right-[850px] absolute h-[20vh] w-48 rotate-45 object-cover " />
                    </span>
                    <Button variant="ghost" className="border-1 border-white text-white font-semibold w-60 h-16 mt-20 text-xl">Intră în aplicație</Button>
                    <span>
                        <img src="./boabe.svg" className="w-64 h-64 absolute  right-60" />
                    </span>

                </div>
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

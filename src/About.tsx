import { Dot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./components/ui/button";
import HeroCarousel from "./ScreenCarousel";

export default function About() {
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
            { threshold: 0.6 } // 50% visible
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
            className="top-0 left-0 w-screen h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth"
        >
            <aside className={`${isVisible ? " fixed " : ""} transition-transform duration-[2000] right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20`}>
                {Array.from({ length: totalScreens }).map((_, i) => (
                    <Dot
                        key={i}
                        className={selected === i ? "text-black w-16 h-16" : "text-white w-16 h-16"}
                        onClick={() => scrollToScreen(i)}
                    />
                ))}
            </aside>

            <div className="snap-start w-full h-screen flex items-center justify-around bg-orange-400 overflow-hidden">
                <div className="mt-48">
                    <img src="./screen-1.svg" alt="Screen 1" className="w-[26vw] h-[101 vh]  object-cover" />
                </div>
                <div className="flex flex-col h-[60vh] justify-start w-[30vw] mr-80">
                    <p className="text-white font-semibold text-2xl">DESPRE APLICAȚIE</p>
                    <h1 className="font-bold text-white text-8xl">Descoperă cele mai noi cafenele</h1>
                    <p className="font-semibold text-white text-2xl mt-40">Aici găsești toate cafenele din orașul tău într-un singur lor. Intră acum în aplicație și descoperă ultimele noutăți în materie de cafea din apropierea ta.</p>
                    <span className="w-[100px] h-[100px]">
                        <img src="/arrow-white.png" className=" relative top-[50px] left-[250px] w-[400px] h-[200px] rotate-45 object-cover " />
                    </span>
                    <Button variant="ghost" className="border-1 border-white text-white font-semibold w-60 h-16 mt-20 text-xl">Intră în aplicație</Button>
                    <span>
                        <img src="./boabe.svg" className="w-64 h-64 relative left-[800px]" />
                    </span>

                </div>
            </div>
            <div className="snap-start w-full h-screen flex items-center justify-around bg-violet-800 overflow-hidden">
                <div className="mt-48">
                    <img src="./screen-2.svg" alt="Screen 1" className="w-[26vw] h-[101 vh]  object-cover" />
                </div>
                <div className="flex flex-col h-[60vh] justify-start w-[30vw] mr-80">
                    <p className="text-white font-semibold text-2xl">DESPRE APLICAȚIE</p>
                    <h1 className="font-bold text-white text-8xl">Descoperă cele mai noi cafenele</h1>
                    <p className="font-semibold text-white text-2xl mt-40">Aici găsești toate cafenele din orașul tău într-un singur lor. Intră acum în aplicație și descoperă ultimele noutăți în materie de cafea din apropierea ta.</p>
                    <span className="w-[100px] h-[100px]">
                        <img src="/arrow-white.png" className=" relative top-[50px] left-[250px] w-[400px] h-[200px] rotate-45 object-cover " />
                    </span>
                    <Button variant="ghost" className="border-1 border-white text-white font-semibold w-60 h-16 mt-20 text-xl">Intră în aplicație</Button>
                    <span>
                        <img src="./boabe.svg" className="w-64 h-64 relative left-[800px]" />
                    </span>

                </div>
            </div>
            <div className="snap-start w-full h-screen flex items-center justify-around bg-green-800 overflow-hidden">
                <div className="mt-48 overflow-hidden relative w-[26vw] h-[105vh]">
                    <img src="./screen-3-nopopup.svg" alt="Screen 1" className="relative top-42 w-[26vw] h-[101 vh]  object-cover" />
                    <img
                        src="./client-recompensa.svg"
                        alt="Screen 1"
                        className="absolute w-[24.5vw] h-[24.5vh] bottom-[133px] left-[20px] image1 object-cover"
                    />
                </div>

                <div className="flex flex-col h-[60vh] justify-start w-[30vw] mr-80">
                    <p className="text-white font-semibold text-2xl">DESPRE APLICAȚIE</p>
                    <h1 className="font-bold text-white text-8xl">Descoperă cele mai noi cafenele</h1>
                    <p className="font-semibold text-white text-2xl mt-40">Aici găsești toate cafenele din orașul tău într-un singur lor. Intră acum în aplicație și descoperă ultimele noutăți în materie de cafea din apropierea ta.</p>
                    <span className="w-[100px] h-[100px]">
                        <img src="/arrow-white.png" className="relative top-[50px] left-[300px] w-[400px] h-[200px] rotate-45 object-cover" />
                    </span>
                    <Button variant="ghost" className="border-1 border-white text-white font-semibold w-60 h-16 mt-20 text-xl">Intră în aplicație</Button>
                    <span>
                        <img src="./boabe.svg" className="w-64 h-64 relative left-[800px]" />
                    </span>

                </div>
            </div>
            <HeroCarousel />
        </section>
    );
}

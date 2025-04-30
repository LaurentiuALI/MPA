import { Button } from "./components/ui/button";

export default function HeroCarousel() {
    // your three svgs
    const screens = [
        './screen-4-1.svg',
        './screen-4-2.svg',
        './screen-4-3.svg',
        './screen-4-4.svg',
    ];

    // duplicate so the line is twice as long
    const looped = [...screens];

    return (
        <div className="snap-start w-full h-screen flex items-center justify-around bg-sky-900 overflow-hidden">
            <div
                className="relative flex h-[105vh] w-[26vw] mt-48 space-x-8 overflow-hidden"
            // style={{ minWidth: `${looped.length * 26}vw` }}
            // ensure container is wide enough
            >
                {looped.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        className="w-[26vw] h-[101vh] object-cover slider"
                        alt={`Screen ${i % screens.length + 1}`}
                    />
                ))}
            </div>

            {/* your copy/content */}
            <div className="flex flex-col h-[60vh] justify-start w-[30vw] mr-80">
                <p className="text-white font-semibold text-2xl">DESPRE APLICAȚIE</p>
                <h1 className="font-bold text-white text-8xl">
                    Descoperă cele mai noi cafenele
                </h1>
                <p className="font-semibold text-white text-2xl mt-40">
                    Aici găsești toate cafenele din orașul tău într-un singur loc. Intră acum în
                    aplicație și descoperă ultimele noutăți în materie de cafea din apropierea ta.
                </p>

                <span className="w-[100px] h-[100px]">
                    <img src="/arrow-white.png" className="relative top-[50px] left-[300px] w-[400px] h-[200px] rotate-45 object-cover" />
                </span>

                <Button
                    variant="ghost"
                    className="border border-white text-white font-semibold w-60 h-16 mt-20 text-xl"
                >
                    Intră în aplicație
                </Button>

                <span>
                    <img
                        src="./boabe.svg"
                        className="w-64 h-64 relative left-[800px]"
                        alt="boabe"
                    />
                </span>
            </div>
        </div>
    );
}

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star } from "lucide-react";
import MarqueeAnimation from "./components/marquee";
import { Button } from "./components/ui/button";

export default function Landing() {
    const coffees = ["Cappucino", "Latte", "Espresso", "Flat White", "Cortado", "Macchiato"]
    return (
        <section className='w-screen h-screen'>
            <nav className="w-screen h-[10vh] flex px-[150px] py-[50px]">
                <AspectRatio ratio={4 / 3}>
                    <img src="/logo.png" className="w-32 rounded-full" />
                </AspectRatio>
                <div className='flex flex-row px-[100px]'>
                    <Button variant="link" className='text-lg font-semibold'> Acasă </Button>
                    <Button variant="link" className='text-lg font-semibold'> <a href="#top-produse"> Top Produse </a></Button>
                    <Button variant="link" className='text-lg font-semibold'> <a href="#about">Despre aplicație</a> </Button>
                    <Button variant="link" className='text-lg font-semibold'> Contact </Button>
                    <Button variant="link" className='text-lg font-semibold'> Echipă </Button>
                </div>
            </nav >
            <main className='flex justify-center items-center flex-col w-[100vw] h-[90vh]'>
                <p className=' text-7xl text-amber-500 font-semibold w-[600px] h-[157px] line-clamp-2 -mb-[30px] font-[Lato]'>Explorează orașul prin gustul cafelei</p>
                <img src="/drink.png" className="w-[500px] bg-blend-multiply z-10" />
                <img src="/banner1.png" className="absolute left-[470px] top-[220px] w-[250px]" />
                <img src="/banner2.png" className="absolute right-[470px] top-[320px] w-[250px]" />

                <MarqueeAnimation baseVelocity={-3} classNameParent='relative bg-gray-500  z-20 -rotate-5 -top-[200px]'>
                    <span className='flex justify-center items-center gap-4'>
                        {coffees.map((coffee) => <span className='flex items-center gap-4 text-amber-500'><Star fill='white' stroke='white' />{coffee}</span>)}
                    </span>
                </MarqueeAnimation>
                <MarqueeAnimation baseVelocity={-3} classNameParent='relative bg-neutral-950 rotate-5 z-0 -top-[200px]'>
                    <span className='flex justify-center items-center gap-4'>
                        {coffees.map((coffee) => <span className='flex items-center gap-4  text-amber-500'><Star fill='white' stroke='white' />{coffee}</span>)}
                    </span>
                </MarqueeAnimation>
                <Button className='h-20 w-[20vw] rounded-full bg-neutral-800 text-2xl font-semibold'>Intră în aplicație</Button>
            </main>
        </section>
    )
}
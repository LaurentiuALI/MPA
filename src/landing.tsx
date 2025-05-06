import { ArrowBigDown, Star } from "lucide-react";
import MarqueeAnimation from "./components/marquee";
import { Button } from "./components/ui/button";

export default function Landing() {
    const coffees = ["Cappucino", "Latte", "Espresso", "Flat White", "Cortado", "Macchiato"]
    return (
        <section id="home" className='w-screen h-screen'>


            <nav className="w-full h-[12vh] flex items-center justify-between px-[200px] py-8 overflow-hidden">

                <img src="/logo.png" className="w-24 h-24 rounded-full" />
                <div className='flex flex-row px-[10px]'>
                    <Button variant="link" className='text-xl font-semibold'>  <a href="#home">Acasă</a> </Button>
                    <Button variant="link" className='text-xl font-semibold'> <a href="#top-produse"> Top Produse </a></Button>
                    <Button variant="link" className='text-xl font-semibold'> <a href="#about">Despre aplicație</a> </Button>
                    <Button variant="link" className='text-xl font-semibold'> <a href="#contact">Contact</a>  </Button>
                    <Button variant="link" className='text-xl font-semibold'><a href="#echipa">Echipa</a> </Button>
                </div>
            </nav >
            <main className='flex justify-center items-center flex-col w-[100vw] h-[90vh]'>
                <p className='xl:text-6xl text-amber-500 font-semibold w-[26vw] h-[16vh] line-clamp-2 -mb-[30px] font-[Lato]'>Explorează orașul prin gustul cafelei</p>
                <img src="/drink.png" className="w-[18vw] z-10" />
                <img src="/banner1.png" className="absolute left-[470px] top-[220px] w-[250px]" />
                <img src="/banner2.png" className="absolute right-[470px] top-[280px] w-[250px]" />
                <MarqueeAnimation baseVelocity={-2.5} classNameParent='relative bg-neutral-950 h-16 flex items-center z-0 -top-[200px]'>
                    <span className='flex justify-center items-center gap-4'>
                        {coffees.map((coffee) => <span className='flex items-center gap-4  text-amber-500'><Star fill='white' stroke='white' />{coffee}</span>)}
                    </span>
                </MarqueeAnimation>
                <div className="flex gap-4">
                    <Button className='h-20 w-[15vw] rounded-full bg-neutral-800 text-2xl font-semibold'>
                        <a target="_blank" href="https://docs.google.com/document/d/1A0ht5fQTRvEu2IIpNGBeNcQS2iIyCJ1rRBKrGxB8q4M/edit?tab=t.0">
                            Bussiness Foundation
                        </a>
                    </Button>
                    <Button className='h-20 w-[10vw] rounded-full bg-neutral-800 text-2xl font-semibold'>
                        <a target="_blank" href="https://www.figma.com/proto/fzmSvRCDQvPR9JAwivRb3V/Find-Cafe?node-id=54-4522&p=f&t=fYKsr4qTeA3Jsmzi-0&scaling=scale-down&content-scaling=fixed&page-id=34%3A166&starting-point-node-id=54%3A4522&show-proto-sidebar=1">
                            Mock-up
                        </a>
                    </Button>
                    <Button className='h-20 w-[10vw] rounded-full bg-neutral-800 text-2xl font-semibold'><a target="_blank" href="https://docs.google.com/presentation/d/1_1w8id5CStWFOYp4oy0tm_NUQESasFgPWh7stl5LKt0/view">
                        Pitch
                    </a></Button>
                    <Button className='h-20 w-[15vw] rounded-full bg-neutral-800 text-2xl font-semibold'>
                        <a href="#about">
                            Descopera Aplicația
                        </a>
                    </Button>
                </div>
            </main>
            <Button className="relative bottom-30 left-[195vh] rounded-full w-20 h-20">
                <a href="#top-produse" className="flex items-center justify-center w-full h-full">
                    <ArrowBigDown className="w-full h-full" />
                </a>
            </Button>
        </section>
    )
}
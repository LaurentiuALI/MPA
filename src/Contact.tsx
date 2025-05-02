import { Star } from "lucide-react";
import MarqueeAnimation from "./components/marquee";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";

export default function Contact() {

    const coffees = ["Cappucino", "Latte", "Espresso", "Flat White", "Cortado", "Macchiato"]

    return (
        <section id="contact" className="w-screen h-screen overflow-hidden">
            <div className="mt-16 w-screen h-1/4">
                <MarqueeAnimation baseVelocity={-3} classNameChild="" classNameParent='bg-gray-500 pr-[3000px] w-[3000px] z-20 -rotate-3'>
                    <span className='flex justify-center items-center gap-4'>
                        {coffees.map((coffee) => <span className='flex items-center gap-4 text-amber-500'><Star fill='white' stroke='white' />{coffee}</span>)}
                    </span>
                </MarqueeAnimation>
                <MarqueeAnimation baseVelocity={-3} classNameParent='bg-neutral-950 rotate-2 z-0'>
                    <span className='flex justify-center items-center gap-4'>
                        {coffees.map((coffee) => <span className='flex items-center gap-4  text-amber-500'><Star fill='white' stroke='white' />{coffee}</span>)}
                    </span>
                </MarqueeAnimation>
            </div>
            <div className="bg-black w-full h-3/4 flex justify-between">
                <img src="./coffe-contact.png" className="h-full"></img>
                <div className="w-1/2  mr-60 flex flex-col items-end p-10">
                    <div className="text-3xl font-semibold text-amber-500 mb-4">CONTACT</div>
                    <div className="w-[600px] text-right text-3xl font-semibold text-white">Dacă ai întrebări, scrie-ne un mesaj și vom reveni către tine în cel mai scurt timp.</div>\
                    <div className="grid grid-rows-5 grid-cols-2 gap-12">
                        <Input placeholder="Nume" className="placeholder:text-xl placeholder:text-white placeholder:font-semibold  h-12 w-[16.5rem] col-span-1" />
                        <Input placeholder="Prenume" className="placeholder:text-xl placeholder:text-white placeholder:font-semibold  h-12 w-[16.5rem] col-span-1" />
                        <Input placeholder="Telefon" className="placeholder:text-xl placeholder:text-white placeholder:font-semibold  h-12 w-[16.5rem] col-span-1" />
                        <Input placeholder="Email" className="placeholder:text-xl placeholder:text-white placeholder:font-semibold  h-12 w-[16.5rem] col-span-1" />
                        <Textarea placeholder="Scrie aici mesajul tau" className="placeholder:text-xl placeholder:text-white placeholder:font-semibold col-span-2 row-span-2 resize-none" />
                        <Button variant="ghost" className="text-xl font-semibold h-12 text-white border-1 border-white">Golește formularul</Button>
                        <Button className="h-12 text-xl font-semibold text-white bg-neutral-800">Trimite mesajul</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

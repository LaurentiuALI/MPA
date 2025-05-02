import { ArrowBigDown } from "lucide-react";
import { Button } from "./components/ui/button";
import { useInView } from "./useInView";

export default function TopProduse() {
    const coffeeAndImages = [
        { name: "Cappucino", image: "/coffees/card.svg" },
        { name: "Latte", image: "/coffees/card-1.svg" },
        { name: "Espresso", image: "/coffees/card-2.svg" },
        { name: "Flat White", image: "/coffees/card-3.svg" },
    ]

    return (
        <section id="top-produse" className='flex items-center flex-col w-screen h-screen '>
            <span className='text-2xl text-amber-600 font-semibold'>TOP PRODUSE</span>
            <span className='text-8xl text-black font-semibold mt-6'>Top cele mai căutate produse</span>
            <div className='relative flex justify-center z-10'>
                <div className='rounded-b-[50%] rounded-t-[2rem] w-[60vw] h-[40vh] bg-orange-400 mt-10 flex flex-wrap p-4 gap-4 gap-y-[14vh] justify-center'>
                    {
                        coffeeAndImages.map((coffee, _) => {
                            const [ref, isVisible] = useInView();
                            return (
                                <div ref={ref} key={coffee.name} className={`${isVisible ? "opacity-100 transition-all duration-1000" : "opacity-100 -translate-x-[500px] blur-3xl"} w-[25vw] h-[25vh] flex justify-center`}>
                                    <img src={coffee.image} className="h-[300px] w-[300px] z-10" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Button className="relative top-[27vh] left-[95vh] rounded-full w-20 h-20">
                <a href="#about" className="flex items-center justify-center w-full h-full">
                    <ArrowBigDown className="w-full h-full" />
                </a>
            </Button>

        </section>
    )
}
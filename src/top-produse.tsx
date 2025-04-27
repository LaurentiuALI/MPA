import { useInView } from "./useInView";

export default function TopProduse() {
    const coffeeAndImages = [
        { name: "Cappucino", image: "/coffees/cappuccino.png" },
        { name: "Latte", image: "/coffees/latte.png" },
        { name: "Espresso", image: "/coffees/espresso.png" },
        { name: "Flat White", image: "/coffees/flat_white.png" },
    ]

    return (
        <section id="top-produse" className='flex items-center flex-col w-screen h-screen'>
            <span className='text-2xl text-amber-600 font-semibold'>TOP PRODUSE</span>
            <span className='text-8xl text-black font-semibold mt-6'>Top cele mai căutate produse</span>
            <div className='relative flex justify-center z-10'>
                <div className='rounded-b-[50%] rounded-t-[2rem] w-[50vw] h-[40vh] bg-amber-500 mt-20'></div>
                <div className="absolute grid grid-cols-2 grid-rows-3 gap-30 top-12">
                    {coffeeAndImages.map((coffee, index) => {
                        const [ref, isVisible] = useInView();
                        return (
                            <div
                                key={coffee.name}
                                className={`${isVisible ? "opacity-100  transition-all duration-1000" : "opacity-0 translate-x-[-1000px] blur-3xl"} relative w-[400px] h-[400px] flex flex-col items-center top-6`}
                                ref={ref}
                            >
                                <div
                                    className="absolute inset-x-0 bottom-0 w-full h-[65%] bg-white opacity-40 rounded-xl z-10 drop-shadow-lg drop-shadow-gray-700"
                                />

                                {index < 2 && <div className="w-full z-10 mt-4 flex justify-start">
                                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                                        {index + 1}
                                    </div>
                                </div>}

                                <img
                                    src={coffee.image}
                                    alt={coffee.name}
                                    className="w-72 h-72 rounded-xl z-10 "
                                />
                                <span className="text-gray-800 text-2xl font-bold z-10 ">
                                    {coffee.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    )
}
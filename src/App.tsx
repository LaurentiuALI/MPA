import './App.css'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import MarqueeAnimation from './components/marquee'
import { Star } from 'lucide-react'
import { useInView } from './useInView'

function App() {
  const coffees = ["Cappucino", "Latte", "Espresso", "Flat White", "Cortado", "Macchiato"]
  const coffeeAndImages = [
    { name: "Cappucino", image: "/coffees/cappuccino.png" },
    { name: "Latte", image: "/coffees/latte.png" },
    { name: "Espresso", image: "/coffees/espresso.png" },
    { name: "Flat White", image: "/coffees/flat_white.png" },
    { name: "Cortado", image: "/coffees/cortado.png" },
    { name: "Macchiato", image: "/coffees/macchiato.png" },
  ]

  return (
    <div >
      <section className='w-screen h-screen'>
        <nav className="w-screen h-[10vh] flex px-[150px] py-[50px]">
          <AspectRatio ratio={4 / 3}>
            <img src="/logo.png" className="w-32 rounded-full" />
          </AspectRatio>
          <div className='flex flex-row px-[100px]'>
            <Button variant="link" className='text-lg font-semibold'> Acasă </Button>
            <Button variant="link" className='text-lg font-semibold'> <a href="#top-produse"> Top Produse </a></Button>
            <Button variant="link" className='text-lg font-semibold'> Despre aplicație </Button>
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

                  {/* 🔹 Name */}
                  <span className="text-gray-800 text-2xl font-bold z-10 ">
                    {coffee.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  )
}

export default App

import './App.css'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import MarqueeAnimation from './components/marquee'
import { Star } from 'lucide-react'

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
    <div className="">
      <div className='w-screen h-screen'>
        <nav className="w-screen h-[10vh] flex px-[150px] py-[50px]">
          <AspectRatio ratio={4 / 3}>
            <img src="/logo.png" className="w-32 rounded-full" />
          </AspectRatio>
          <div className='flex flex-row px-[100px]'>
            <Button variant="link" className='text-lg font-semibold'> Acasă </Button>
            <Button variant="link" className='text-lg font-semibold'> Top produse </Button>
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
      </div>

      <div className='flex items-center flex-col w-screen h-screen border-2'>

        <span className='text-2xl text-amber-600 font-semibold'>TOP PRODUSE</span>
        <span className='text-8xl text-black font-semibold mt-6'>Top cele mai căutate produse</span>
        <div className='relative flex justify-center z-10'>
          <img src="./background-orange.png" className='relative w-[50vw] h-[50vh] mt-20 top-0 z-0' />
          <div className="absolute grid grid-cols-2 grid-rows-3 gap-52 top-40">
            {coffeeAndImages.map((coffee, index) => (
              <div className='w-64 h-64'>
                <div className='bg-white rounded-full w-16 h-16 flex justify-center items-center text-4xl font-bold'>{index + 1}</div>
                <img src={coffee.image} className="relative z-40 w-64 h-64 rounded-xl" />
                <span className="relative z-10 text-4xl font-bold">{coffee.name}</span>
                <div className="relative bottom-56 z-[0] bg-white opacity-50 w-64 h-64 border-2 rounded-xl" />
              </div>
            ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

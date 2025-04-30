export default function Contact() {

    return (
        <section id="echipa" className="w-screen h-screen overflow-hidden">
            <div className="w-screen h-2/3 flex flex-col items-center gap-y-12 mt-12">
                <div className="flex justify-between gap-16 gap-y-8">
                    <div className="w-[400px] h-[400px] relative">
                        <img
                            src="./flavia.jpg"
                            alt="membru echipa"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="./linkedin.svg"
                            alt="LinkedIn"
                            className="absolute top-4 right-4 w-16 h-16 cursor-pointer"
                        />
                        <div className="bg-white opacity-80 absolute bottom-0 left-0 w-full h-20 flex flex-col items-center justify-around">
                            <span className="text-xl font-bold text-black">Duță Flavia</span>
                            <span className="font-semibold text-neutral-800 mb-2">Grupa 506</span>
                        </div>
                    </div>
                    <div className="w-[400px] h-[400px] relative">
                        <img
                            src="./claudiu.jpg"
                            alt="membru echipa"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="./linkedin.svg"
                            alt="LinkedIn"
                            className="absolute top-4 right-4 w-16 h-16 cursor-pointer"
                        />
                        <div className="bg-white opacity-80 absolute bottom-0 left-0 w-full h-20 flex flex-col items-center justify-around">
                            <span className="text-xl font-bold text-black">Claudiu Marinescu</span>
                            <span className="font-semibold text-neutral-800 mb-2">Grupa 506</span>
                        </div>
                    </div>
                    <div className="w-[400px] h-[400px] relative">
                        <img
                            src="./laur.jpeg"
                            alt="membru echipa"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="./linkedin.svg"
                            alt="LinkedIn"
                            className="absolute top-4 right-4 w-16 h-16 cursor-pointer"
                        />
                        <div className="bg-white opacity-80 absolute bottom-0 left-0 w-full h-20 flex flex-col items-center justify-around">
                            <span className="text-xl font-bold text-black">Andoni Iliuță-Laurențiu</span>
                            <span className="font-semibold text-neutral-800 mb-2">Grupa 506</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-16">
                    <div className="w-[400px] h-[400px] relative">
                        <img
                            src="./cipri.jpeg"
                            alt="membru echipa"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="./linkedin.svg"
                            alt="LinkedIn"
                            className="absolute top-4 right-4 w-16 h-16 cursor-pointer"
                        />
                        <div className="bg-white opacity-80 absolute bottom-0 left-0 w-full h-20 flex flex-col items-center justify-around">
                            <span className="text-xl font-bold text-black">Ciprian-Ștefan Barbu</span>
                            <span className="font-semibold text-neutral-800 mb-2">Grupa 506</span>
                        </div>
                    </div>
                    <div className="w-[400px] h-[400px] relative">
                        <img
                            src="./eduard.jpg"
                            alt="membru echipa"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="./linkedin.svg"
                            alt="LinkedIn"
                            className="absolute top-4 right-4  w-16 h-16 cursor-pointer"
                        />
                        <div className="bg-white opacity-80 absolute bottom-0 left-0 w-full h-20 flex flex-col items-center justify-around">
                            <span className="text-xl font-bold text-black">Eduard Coman</span>
                            <span className="font-semibold text-neutral-800 mb-2">Grupa 506</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black w-full h-1/3 flex flex-col items-center justify-center px-8 py-4 text-white">
                <div className="flex w-full justify-around gap-x-32">
                    <div className="flex flex-col gap-4 max-w-md">
                        <h2 className="text-4xl font-bold">Acest proiect este creat în scop educațional.</h2>
                        <p className="text-lg">Codul sursă este disponibil pe GitHub.</p>
                        <div className="flex gap-4 items-center mt-4">
                            <img src="./github.svg" alt="GitHub" className="w-12 h-12" />
                            <img src="./logo.svg" alt="Find logo" className="w-24 h-24" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <img src="./qr-code.svg" alt="QR Code" className="w-64 h-64" />
                    </div>
                </div>

                <div className="flex w-full justify-around items-center mt-8 border-t border-white pt-4">
                    <div className="flex gap-8 text-lg">
                        <a href="#home" className="hover:underline">Acasă</a>
                        <a href="#top-produse" className="hover:underline">Top produse</a>
                        <a href="#despre-aplicatie" className="hover:underline">Despre aplicație</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                        <a href="#echipa" className="hover:underline">Echipă</a>
                    </div>
                    <div>
                        <img src="./fmi.svg" alt="Facultatea de Matematică și Informatică" className="w-16 h-16 rounded-full" />
                    </div>
                </div>
            </div>

        </section>
    );
}

import hero from "../assets/hero.png"
import { logos } from "./Data"

const Home = () => {
    return (
        <div className="container mx-auto pb-24 px-6 min-h-screen" id="home">
            <div className="md:flex items-center justify-center">
                <div>
                    <div className="font-bold text-xs text-Teal mb-4">
                        {" "}
                        your e-learning partner
                    </div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
                        This is <br />the new way<br /> to learn online
                    </div>
                    <p className="text-sm leading-7 text-gray max-w-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam explicabo eveniet similique illo blanditiis eum.
                    </p>
                    <div className="mt-6">
                        <button className="btn px-6 py-3 font-bold mr-4 text-sm bg-Teal text-white">Get Started</button>
                        <button className="btn px-6 py-3 font bold text-sm">Discover</button>
                    </div>
                </div>
                <div className="">
                    <img src={hero} alt="hero" />
                </div>
            </div>
            <div>
                <p className="text-center text-xl">
                    We collaborate with {" "}
                    <span className="text-Teal">
                        +100 leading universities and companies
                    </span>
                </p>
                <div className="flex items-center justify-center flex-wrap gap-8 p-2">
                    {
                        logos.map((logo, index) => (
                            <div className="w-28" key={index}>
                                <img src={logo} alt="logo" />
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home
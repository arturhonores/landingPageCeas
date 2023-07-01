import hero from "../assets/hero.png"
import { logos } from "./Data"
import { motion } from "framer-motion"

const Home = () => {

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <div className="container pt-24 mx-auto pb-24 px-6 min-h-screen" id="home">
            <div className="md:flex items-center justify-center">
                <div>
                    <div className="font-bold text-xs text-Teal mb-4">
                        {/* {" "} */}
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
                <div className="md:w-[60%]">
                    <img src={hero} alt="hero" />
                </div>
            </div>
            <div>
                <p className="text-center text-xl">
                    {/* We collaborate with {" "} */}
                    We collaborate with
                    <span className="text-Teal">
                        +100 leading universities and companies
                    </span>
                </p>
                <motion.div variants={container} initial="hidden" whileInView="visible" className="flex items-center justify-center flex-wrap gap-8 p-2">
                    {
                        logos.map((logo, index) => (
                            <motion.div variants={item} className="w-28" key={index}>
                                <img src={logo} alt="logo" />
                            </motion.div>

                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}
export default Home
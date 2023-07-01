import { navLinks } from "../Data"
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLink from "./NavLink"
import LightDarkMode from "./LightDarkMode"
import { useEffect, useState } from "react"
import MobileNavLink from "./MobileNavLink"
import { motion } from "framer-motion"


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const updateScrollStatus = () => {
        const hasScrolledPast30px = window.scrollY > 30;
        setIsScrolled(hasScrolledPast30px)
    }


    useEffect(() => {
        window.addEventListener("scroll", updateScrollStatus)
        return () => {
            window.removeEventListener("scroll", updateScrollStatus)
        }
    }, [])

    return (
        <div className={`${isScrolled ? "shadow-lg bg-base-100" : ""} fixed w-full top-0 left-0 z-50`}>
            <div className={`${isScrolled ? "py-2 transition-all duration-300" : "py-4"} container mx-auto flex items-center justify-between px-2`} >
                <div className="flex items-center gap-4">
                    <HiMenuAlt1 onClick={() => setToggle(true)} className="text-3xl sm:hidden cursor-pointer" />
                    <div className="text-xl text-Teal uppercase tracking-wide font-bold">CEAS PERÚ</div>
                    {
                        toggle
                        &&
                        <motion.div
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal flex flex-col justify-center items-center shadow-lg gap-y-7">
                            {navLinks.map(navLink => (
                                <MobileNavLink key={navLink.id} {...navLink} setToggle={setToggle} />
                            ))
                            }
                            <LightDarkMode />
                            <HiX onClick={() => setToggle(prev => !prev)} className="absolute top-12 right-12 text-3xl cursor-pointer" />
                        </motion.div>
                    }
                </div>
                <div className="hidden sm:flex items-center">
                    {
                        navLinks.map(navLink => (
                            <NavLink key={navLink.id} {...navLink} />
                        ))
                    }
                </div>
                <LightDarkMode></LightDarkMode>
            </div>
        </div>
    )
}
export default Navbar
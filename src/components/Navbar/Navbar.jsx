import { navLinks } from "../Data"
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLink from "./NavLink"
import LightDarkMode from "./LightDarkMode"
import { useState } from "react"
import MobileNavLink from "./MobileNavLink"


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className="sticky w-full top-0 left-0 z-50 bg-base-100">
            <div>
                <div className="container py-4 mx-auto flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                        <HiMenuAlt1 onClick={() => setToggle(true)} className="text-3xl sm:hidden cursor-pointer" />
                        <div className="text-xl text-Teal uppercase tracking-wide font-bold">CEAS PERÚ</div>
                        {
                            toggle
                            &&
                            <div className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal flex flex-col justify-center items-center shadow-lg gap-y-7">
                                {navLinks.map(navLink => (
                                    <MobileNavLink key={navLink.id} {...navLink} setToggle={setToggle} />
                                ))
                                }
                                <LightDarkMode />
                                <HiX onClick={() => setToggle(prev => !prev)} className="absolute top-12 right-12 text-3xl cursor-pointer" />
                            </div>
                        }
                    </div>
                    <div className="hidden sm:flex items-center">
                        {
                            navLinks.map(navLink => (
                                <NavLink key={navLink.id} {...navLink} />
                            ))
                        }
                        <LightDarkMode></LightDarkMode>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
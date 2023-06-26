import { navLinks } from "../components/Data"
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLink from "./NavLink"
import LightDarkMode from "./LightDarkMode"

const Navbar = () => {
    return (
        <div className="sticky w-full top-0 left-0 z-50">
            <div>
                <div className="container py-4 mx-auto flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                        <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" />
                        <div className="text-xl text-Teal uppercase tracking-wide font-bold">CEAS PERÚ</div>
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
        </div>
    )
}
export default Navbar
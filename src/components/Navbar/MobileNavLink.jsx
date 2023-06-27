import { Link } from "react-scroll"

const MobileNavLink = ({ setToggle, link, href }) => {
    return (
        <li className="list-none cursor-pointer">
            <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setToggle(prev => !prev)}
                className="font-bold transition-all duration-300"
            >
                {link}
            </Link>
        </li>
    )
}
export default MobileNavLink
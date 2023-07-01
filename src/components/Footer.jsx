import {
    BsInstagram,
    BsTwitter,
    BsFacebook,
    BsPinterest,
} from "react-icons/bs";

import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            transition={{ duration: 1 }}
            className="bg-Teal p-10"
        >
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-start gap-8">
                <div>
                    <h5 className="font-bold mb-6">Get Started</h5>
                    <p className="text-sm leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                        optio libero modi, expedita veritatis quaerat nesciunt
                        perspiciatis aperiam! Modi, ducimus!
                    </p>
                </div>
                <div>
                    <h5 className="font-bold mb-6">Services</h5>
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Web Design
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Web Development
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Science
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Digital Marketing
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-6">Company</h5>
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Sitemap
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Careers
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline hover:underline-offset-2"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-6">Follow us</h5>
                    <p className="text-sm mb-4">ceas@gmail.com</p>
                    <p className="text-sm">+51 123456789</p>
                    <div className="flex gap-4 mt-4">
                        <motion.a
                            whileHover={{ translateY: -3 }}
                            whileTap={{ scale: 1.1 }}
                            href="#"
                            className="text-xl"
                        >
                            <BsFacebook />
                        </motion.a>
                        <motion.a
                            whileHover={{ translateY: -3 }}
                            whileTap={{ scale: 1.1 }}
                            href="#"
                            className="text-xl"
                        >
                            <BsInstagram />
                        </motion.a>
                        <motion.a
                            whileHover={{ translateY: -3 }}
                            whileTap={{ scale: 1.1 }}
                            href="#"
                            className="text-xl"
                        >
                            <BsTwitter />
                        </motion.a>
                        <motion.a
                            whileHover={{ translateY: -3 }}
                            whileTap={{ scale: 1.1 }}
                            href="#"
                            className="text-xl"
                        >
                            <BsPinterest />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default Footer;

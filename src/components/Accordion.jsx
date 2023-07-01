import { useState } from "react";
import { BsChevronDown } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (id) => {
        setActiveIndex(id === activeIndex ? null : id)
    }
    return (
        <div className="pb-8">
            <div className="flex items-center justify-between">
                <div className="sm:text-xl font-bold">{title}</div>
                <BsChevronDown className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`} onClick={() => handleClick(id)} />
            </div>
            <AnimatePresence>
                {id === activeIndex && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <p className="text-sm leading-7 text-gray pt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                            quaerat error incidunt tempora porro ducimus eaque
                            reprehenderit, velit quisquam voluptatibus voluptatum
                            accusantium. Suscipit, voluptatibus ex! Perferendis placeat sint
                            cumque
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
export default Accordion
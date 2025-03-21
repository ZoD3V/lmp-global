import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { router } from "@inertiajs/react";

const Button = ({
    buttonText,
    buttonLink,
    showArrow = false,
    outline = false,
}) => {
    const navigateDetailProduct = (item) => {
        if (item === "/app") {
            window.location.href = item;
        } else {
            router.visit(item);
        }
    };

    const buttonClass = outline
        ? "lg:w-fit w-full py-2 px-4 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
        : "lg:w-fit w-full py-2 px-4 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={buttonClass}
            onClick={() => navigateDetailProduct(buttonLink)}
        >
            <div className="px-1.5 text-base md:text-sm font-medium leading-6 flex items-center justify-center text-center w-full">
                {buttonText}
                {showArrow && (
                    <motion.div className="ml-2">
                        <IoIosArrowForward />
                    </motion.div>
                )}
            </div>
        </motion.button>
    );
};

export default Button;

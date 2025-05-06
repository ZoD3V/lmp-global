import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { router } from "@inertiajs/react";

const CardProduct = ({ item, index, fadeIn, textVariant, children }) => {
    // State untuk hover
    const [isHovered, setIsHovered] = useState(false);

    const navigateDetailProduct = (item) => {
        if (
            item.link !== null &&
            item.link !== undefined &&
            item.link?.length > 0
        ) {
            router.visit(`/${item.link}`);
        }
    };

    return (
        <motion.div
            key={index}
            variants={fadeIn("up", index * 0.1)}
            viewport={{ once: true }}
            className="relative flex flex-col gap-4"
        >
            {/* Tooltip */}
            <div
                className={`absolute top-[-50px] left-1/2 transform -translate-x-1/2 mt-4 p-2 bg-gray-700 text-white text-sm rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
                    isHovered ? "opacity-100" : "opacity-0"
                } z-10`}
            >
                Click: See detail product
                {/* Panah tooltip */}
                <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rotate-45"></div>
            </div>

            <div
                className="flex flex-col gap-4 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigateDetailProduct(item)}
            >
                {/* Judul produk */}
                <motion.h3
                    variants={textVariant(index * 0.1)}
                    viewport={{ once: true }}
                    className="font-medium text-xl leading-8 text-black"
                >
                    {item.name}
                </motion.h3>

                {/* Deskripsi produk */}
                <motion.p
                    variants={fadeIn("up", index * 0.1)}
                    viewport={{ once: true }}
                    className="font-normal text-sm leading-6 text-gray-500"
                >
                    {item.desc}
                </motion.p>
            </div>

            {/* Menu/children */}
            <Menu menuData={children} />
        </motion.div>
    );
};

export default CardProduct;

import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const Card = ({ item, index, fadeIn, textVariant, showButton }) => {
    return (
        <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
        >
            <motion.div
                variants={fadeIn("down", 0.5)}
                viewport={{ once: true }}
                className={`w-full md:w-full h-[300px] xl:h-[350px] mx-auto`}
            >
                <motion.img
                    variants={fadeIn("right", 0.3)}
                    viewport={{ once: true }}
                    className="card-img w-full h-full object-cover object-center"
                    src={item.img}
                    alt="Logo"
                />
            </motion.div>
            <motion.h3
                variants={textVariant(0.3)}
                viewport={{ once: true }}
                className="text-2xl font-manrope font-semibold text-gray-900 text-center"
            >
                {item.title}
            </motion.h3>
            <motion.p
                variants={fadeIn("up", 0.6 * (index + 1))}
                viewport={{ once: true }}
                className="text-gray-500 text-base font-normal leading-relaxed text-center"
            >
                {item.description}
            </motion.p>
            {showButton && (
                <motion.a
                    href={item.link}
                    variants={fadeIn("up", 0.6 * (index + 1))}
                    className="flex items-center gap-2"
                >
                    <motion.p className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                        See Details
                    </motion.p>
                    <HiArrowRight className="text-indigo-600 text-lg" />
                </motion.a>
            )}
        </motion.div>
    );
};

export default Card;

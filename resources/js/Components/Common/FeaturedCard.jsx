import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({
    item,
    index,
    fadeIn,
    textVariant,
    showButton,
    buttonLink,
}) => {
    return (
        <motion.div
            key={index}
            variants={fadeIn("up", 0.3)}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
            {/* Image */}
            <motion.div
                variants={fadeIn("down", 0.5)}
                viewport={{ once: true }}
                className={`w-full md:max-w-[400px] h-[350px] mx-auto lg:mx-0`}
            >
                <motion.img
                    variants={fadeIn("right", 0.3)}
                    viewport={{ once: true }}
                    className="card-img h-full w-full object-cover"
                    src={item.img}
                    alt="Logo"
                />
            </motion.div>

            {/* Title and Image Swap */}
            <motion.div
                variants={fadeIn("down", 0.5)}
                viewport={{ once: true }}
                className={`md:w-1/2 flex flex-col items-center md:items-end justify-center`}
            >
                <motion.h2
                    variants={textVariant(0.2)}
                    className="text-3xl lg:text-4xl font-bold mb-4 text-center md:text-end"
                >
                    {item.title}
                </motion.h2>
                <motion.p
                    variants={fadeIn("up", 0.5)}
                    className="text-slate-600 text-lg mb-4 text-center md:text-end"
                >
                    {item.description}
                </motion.p>

                {/* Conditional Rendering of Button */}
                {showButton && (
                    <motion.button
                        variants={fadeIn("left", 0.3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 text-blue-600 border-blue-600 hover:text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                    >
                        <a href={buttonLink}>Read More</a>
                    </motion.button>
                )}
            </motion.div>
        </motion.div>
    );
};

export default FeatureCard;

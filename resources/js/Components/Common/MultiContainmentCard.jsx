import React from "react";
import { motion } from "framer-motion";

const MultiContainmentCard = ({
    item,
    index,
    fadeIn,
    textVariant,
    showButton,
}) => {
    return (
        <motion.div
            key={index}
            variants={fadeIn("down", 0.3)}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
            className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
        >
            <motion.div
                variants={fadeIn("down", 0.5)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className={`w-full flex-col justify-start gap-10 inline-flex order-2 md:order-1`}
            >
                <div className="w-full flex-col gap-4 flex">
                    <motion.h2
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-normal text-center md:text-start`}
                    >
                        {item.title}
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`text-gray-500 text-base font-normal leading-relaxed text-center md:text-justify`}
                    >
                        {item.desc}
                    </motion.p>
                </div>

            </motion.div>

            <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`md:mx-0 mx-auto}`}
            >
                <motion.img
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="h-[400px] w-full object-contain order-1 md:order-2"
                    src={`/storage/${item.image}`}
                    alt="Featured Image"
                />
            </motion.div>
        </motion.div>
    );
};

export default MultiContainmentCard;

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const MultiFeatureCard = ({
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
                className={`w-full flex-col justify-start gap-10 inline-flex ${
                    index % 2 !== 0 ? "md:order-2" : ""
                }`}
            >
                <div className="w-full flex-col justify-start md:items-start items-center gap-4 flex">
                    <motion.h2
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-normal ${
                            index % 2 !== 0
                                ? "text-center md:text-end"
                                : "text-center md:text-start"
                        }`}
                    >
                        {item.title}
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`text-gray-500 text-base font-normal leading-relaxed ${
                            index % 2 !== 0
                                ? "text-center md:text-end"
                                : "text-center md:text-start"
                        }`}
                    >
                        {item.description}
                    </motion.p>
                </div>

                {showButton && (
                    <motion.div
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`sm:mx-auto md:mx-0 ${
                            index % 2 !== 0 ? "md:ml-auto" : "md:mr-auto"
                        }`}
                    >
                        <Button
                            buttonText="Read More"
                            buttonLink={buttonLink}
                            showArrow={true}
                            outline={false}
                        />
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`hidden md:block md:mx-0 mx-auto h-full md:h-[350px] lg:h-[400px] ${
                    index % 2 !== 0 ? "md:order-1" : ""
                }`}
            >
                <motion.img
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="card-img h-full w-full object-cover"
                    src={item.img}
                    alt="Featured Image"
                />
            </motion.div>
        </motion.div>
    );
};

export default MultiFeatureCard;

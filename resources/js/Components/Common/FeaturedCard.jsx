import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";

const FeatureCard = ({
    item,
    index,
    fadeIn,
    textVariant,
    showButton,
    buttonLink,
}) => {
    const handleClick = () => {
        router.visit(buttonLink)
    };

    return (
        <motion.div
            key={index}
            variants={fadeIn("down", 0.3)}
            viewport={{ once: true }}
            className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
        >
            <motion.div
                variants={fadeIn("down", 0.5)}
                viewport={{ once: true }}
                className="md:mx-0 mx-auto h-full md:h-[350px] lg:h-[400px]"
            >
                <motion.img
                    variants={fadeIn("right", 0.3)}
                    viewport={{ once: true }}
                    className="card-img w-full h-full object-cover"
                    src={item.img}
                    alt="Featured Image"
                />
            </motion.div>
            <div className="w-full flex-col justify-start md:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start md:items-start items-center gap-4 flex">
                    <motion.h2
                        variants={textVariant(0.2)}
                        viewport={{ once: true }}
                        className="text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-normal md:text-start text-center"
                    >
                        {item.title}
                    </motion.h2>
                    <motion.p
                        variants={textVariant(0.2)}
                        viewport={{ once: true }}
                        className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center"
                    >
                        {item.description}
                    </motion.p>
                </div>

                {showButton && (
                    <motion.div
                        variants={fadeIn("down", 0.5)}
                        viewport={{ once: true }}
                    >
                        <Button variant="theme" onClick={handleClick}>
                            Read More
                            <ArrowRight className="ml-2" />
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default FeatureCard;

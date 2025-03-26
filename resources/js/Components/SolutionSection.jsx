import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const SolutionSection = ({ banner, title, description }) => {
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-8 w-full justify-center my-12 items-center"
            style={{
                backgroundImage: `url('/storage/${banner[0].image}')`,
            }}
        >
            <motion.div
                variants={fadeIn("up", 0.3)}
                viewport={{ once: true }}
                className="px-4 sm:px-6 xl:px-0 justify-center items-center flex flex-col gap-8"
            >
                <motion.div
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="container max-w-[1200px] flex flex-col items-center text-white z-10 gap-8 text-center"
                >
                    <h1 className="text-5xl md:text-6xl leading-none font-bold tracking-wide">
                        {title}
                    </h1>
                    <p className="font-light text-gray-100/90 xl:text-xl">
                        {description}
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default SolutionSection;

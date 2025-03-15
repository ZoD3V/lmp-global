import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Heading = ({ title, description }) => {
    return (
        <motion.div
            className="w-full flex-col justify-start items-center gap-2.5 flex"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal"
                variants={textVariant(0.2)}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8"
                variants={fadeIn("down", 0.5)}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default Heading;

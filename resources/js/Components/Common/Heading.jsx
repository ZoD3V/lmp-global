import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Heading = ({ title, description, align = "center" }) => {
    const alignmentStyles = {
        left: {
            container: "items-start text-left",
            paragraph: "mr-auto",
        },
        center: {
            container: "items-center text-center",
            paragraph: "mx-auto",
        },
        right: {
            container: "items-end text-right",
            paragraph: "ml-auto",
        },
    };

    return (
        <motion.div
            className={`w-full flex-col justify-start gap-2.5 flex ${alignmentStyles[align].container}`}
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-gray-900 text-3xl md:text-4xl font-bold font-manrope leading-normal"
                variants={textVariant(0.2)}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>

            <motion.p
                className={`${alignmentStyles[align].paragraph} max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}
                variants={fadeIn("down", 0.5)}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default Heading;

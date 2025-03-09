import React from "react";
import { motion } from "framer-motion";

const Card = ({ item, index, fadeIn, textVariant }) => {
    return (
        <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4"
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
                className="text-2xl font-bold"
            >
                {item.title}
            </motion.h3>
            <motion.p
                variants={fadeIn("up", 0.6 * (index + 1))}
                viewport={{ once: true }}
                className="text-slate-600"
            >
                {item.description}
            </motion.p>
            <motion.a
                variants={fadeIn("up", 0.6 * (index + 1))}
                href={item.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
                Learn More
            </motion.a>
        </motion.div>
    );
};

export default Card;

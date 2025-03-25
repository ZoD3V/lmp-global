import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Feature = ({ features }) => {
    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
            <div className="mb-14 text-center">
                <motion.span
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center"
                >
                    Features
                </motion.span>
                <motion.h2
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-4xl text-center font-bold text-gray-900 py-5"
                >
                    Revolutionary Data Center Solutions
                </motion.h2>
                <motion.p
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto"
                >
                    Explore advanced features that enhance the management,
                    efficiency, and insight of your data center operations.
                </motion.p>
            </div>
            <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                {features.map((feature, index) => (
                    <motion.div
                        variants={fadeIn("up", 0.1 * (index + 1))}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={index}
                        className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
                    >
                        <div className="bg-slate-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-500">
                            <div className={feature.iconColor}>
                                {feature.icon}
                            </div>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                            {feature.title}
                        </h4>
                        <p className="text-sm font-normal text-gray-500">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Feature;

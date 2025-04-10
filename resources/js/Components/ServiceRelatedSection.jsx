import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Heading from "./Common/Heading";

const ServicesRelatedSection = ({ features, title, showButton = false }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto flex flex-col w-full justify-center pb-16"
        >
            <div className="px-4 md:px-6 xl:px-0 max-w-[1200px] container flex flex-col gap-12">
                <Heading title={title} />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((data, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-lg w-42 h-42"
                            variants={itemVariants}
                        >
                            <img
                                src={data.image}
                                alt="Design Engineering"
                                className="brightness-75 group-hover:brightness-90 transition-all duration-300 w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white text-2xl font-medium text-center">
                                    {data.name}
                                </h2>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesRelatedSection;

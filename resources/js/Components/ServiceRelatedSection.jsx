import React from "react";
import { motion } from "framer-motion";
import Card from "./common/Card";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesRelatedSection = ({ features, title, showButton = false }) => {
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto flex flex-col w-full justify-center pb-16 mb-12"
        >
            <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
                <h1 className="font-manrope font-medium text-3xl text-gray-900 mb-12 text-center">
                    {title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <Card
                            key={index}
                            item={item}
                            index={index}
                            fadeIn={fadeIn}
                            textVariant={textVariant}
                            showButton={showButton}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ServicesRelatedSection;

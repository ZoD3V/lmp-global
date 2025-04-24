import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../Common/FeaturedCard";
import { fadeIn, textVariant } from "@/utils/motion";

const ResearchDevelopmentSection = ({ data }) => {
    return (
        <section className="w-full py-16">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] mx-auto flex flex-col gap-12 px-4 sm:px-6 xl:px-0"
            >
                {data.map((item, index) => (
                    <FeatureCard
                        key={index}
                        item={item}
                        index={index}
                        fadeIn={fadeIn}
                        textVariant={textVariant}
                        showButton={true}
                        buttonLink={item.buttonLink}
                        objectImage="object-cover"
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default ResearchDevelopmentSection;

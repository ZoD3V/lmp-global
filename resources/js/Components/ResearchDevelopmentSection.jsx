import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import server from "../../../public/images/researchdevelopment.png";
import FeatureCard from "./common/FeaturedCard";

const ResearchDevelopmentSection = (props) => {
    const dataProfile = [
        {
            img: server,
            title: "Research & Development",
            description:
            "The multidisciplinary nature of our focused Philosophy Research Center has been the major strength of our research since we began our work in 2018.",
            buttonLink: "/research-development",
            showButton: true,
        },
    ];

    return (
        <section className="w-full py-16 my-12">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] mx-auto flex flex-col gap-8 px-4 sm:px-6 xl:px-0"
            >
                {dataProfile.map((item, index) => (
                    <FeatureCard
                        key={index}
                        item={item}
                        index={index}
                        fadeIn={fadeIn}
                        textVariant={textVariant}
                        showButton={true}
                        buttonLink={item.buttonLink}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default ResearchDevelopmentSection;

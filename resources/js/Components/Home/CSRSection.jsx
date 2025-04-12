import React from "react";
import { motion } from "framer-motion";
import csr from "../../../../public/images/csr/csr.png";
import FeatureCard from "../Common/FeaturedCard";
import { fadeIn, textVariant } from "@/utils/motion";

const CSRSection = () => {
    const dataCSR = [
        {
            img: csr,
            title: "Corporate Social Responsibility",
            description:
                "Implementing corporate social responsibility (CSR) has become an important part of business sustainability. In this case, the Company realizes that every success achieved cannot be separated from the support of many parties, including employees, the community and the surrounding environment.",
            buttonLink: "/csr",
            showButton: true,
        },
    ];

    return (
        <section className="w-full py-16">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] mx-auto flex flex-col gap-12 px-4 sm:px-6 xl:px-0"
            >
                {dataCSR.map((item, index) => (
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

export default CSRSection;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_lmp from "../../../public/images/containment_lmp.png";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.jpeg";
import product3 from "../../../public/images/product3.png";
import Card from "./common/Card";

const CsrSection = (props) => {
    const features = [
        {
            img: logo_lmp,
            title: "Main Tank & Storage Tank",
            description: "",
            link: "/",
        },
        {
            img: product1,
            title: "Installation of 3 inch PE pipe 550M long",
            description: "",
            link: "/",
        },
        {
            img: product2,
            title: "Installation of 1,100M long 2 inch PE pipe",
            description: "",
            link: "/",
        },
    ];

    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-8 w-full justify-center container"
        >
            <div class="relative">
                <div class="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
                    <h1 class="font-manrope font-medium text-3xl text-gray-900 mb-12 text-center">
                        Responsibility For Development Social And Community
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, index) => (
                            <Card
                                key={index}
                                item={item}
                                index={index}
                                fadeIn={fadeIn}
                                textVariant={textVariant}
                                showButton={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CsrSection;

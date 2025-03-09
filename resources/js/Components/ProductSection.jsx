import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_lmp from "../../../public/images/containment_lmp.png";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.jpeg";
import product3 from "../../../public/images/product3.png";
import Card from "./common/Card";

const ProductSection = () => {
    const features = [
        {
            img: logo_lmp,
            title: "LMP Networks",
            description:
                "Optimizing Network Performance for Comprehensive Analysis and Security Challenges in Modern Networks with Strategies and Solutions.",
            link: "/",
        },
        {
            img: product1,
            title: "LMP Renewable Energy",
            description:
                "Development of LMP technology for  environmentally friendly plastics and the latest innovations in the development of sustainable plastic polymers.",
            link: "/",
        },
        {
            img: product2,
            title: "LMP Service & Learning Center",
            description:
                "The LMP program inspires with deep service  and builds future leaders through experiential service and learning.",
            link: "/",
        },
        {
            img: product3,
            title: "LMP Nex-T Edge DC 360",
            description:
                "Neutral edge data center for colocation, leading challenges explore excellence with the LMP Nex-T Edge DC 360.",
            link: "/",
        },
        {
            img: logo_lmp,
            title: "LMP Volts",
            description:
                "Equipment that integrated electrical quality protection and treatment system that have functions as Protection system against extreme voltage/over voltage or surge voltage.  .",
            link: "/",
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] container mx-auto px-4 sm:px-6 xl:px-0"
            >
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <motion.h2
                        variants={textVariant(0.2)}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        className="text-slate-600"
                    >
                        ivamus a ligula ut velit placerat egestas at id leo.
                        Nulla ac volutpat nunc. Suspendisse ut magna porttitor,
                        sollicitudin ligula at, molestie dolor.{" "}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.5)}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((item, index) => (
                        <Card
                            key={index}
                            item={item}
                            index={index}
                            fadeIn={fadeIn}
                            textVariant={textVariant}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ProductSection;

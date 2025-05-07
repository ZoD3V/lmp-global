import React from "react";
import NetworkProductCard from "./Common/NetworkProductCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Heading from "./Common/Heading";

const PolymerSection = ({ polymerData }) => {
    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
            <Heading
                title={"Our Product LMP Polymer"}
                description={
                    "Renewable energy in data centers refers to the use of renewable energy sources such as solar, wind, hydro, or biomass to operate IT infrastructure in a more environmentally friendly manner."
                }
            />

            {polymerData.map((polymer, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mx-auto flex flex-col gap-12"
                >
                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {polymer.images.map((item, index) => (
                            <NetworkProductCard
                                key={index}
                                item={item}
                                index={index}
                                fadeIn={fadeIn}
                                textVariant={textVariant}
                            />
                        ))}
                    </motion.div>
                    <div className="flex flex-col gap-4">
                        <motion.p
                            variants={textVariant(0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className="font-normal text-lg leading-6 text-gray-900 text-center"
                        >
                            {polymer.desc}
                        </motion.p>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default PolymerSection;

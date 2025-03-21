import React from "react";
import Heading from "./Common/Heading";
import NetworkProductCard from "./Common/NetworkProductCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Button from "./Common/Button";

const NetworkProduct = ({ networkDataArray }) => {
    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
            {networkDataArray.map((networkData, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mx-auto flex flex-col gap-12"
                >
                    <Heading
                        title={networkData.title}
                        description={networkData.desc}
                    />
                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {networkData.products.map((item, index) => (
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
                        <motion.h3
                            variants={textVariant(0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className="text-center font-medium text-neutral-900 text-xl"
                        >
                            {networkData.module_info}
                        </motion.h3>
                        <motion.p
                            variants={textVariant(0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className="font-normal text-base leading-6 text-gray-900 text-center"
                        >
                            {networkData.patch_cord_info}
                        </motion.p>
                    </div>
                </motion.div>
            ))}
            {networkDataArray.length > 0 && (
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="md:ml-auto"
                >
                    <Button
                        buttonText="All Product"
                        buttonLink={"/product"}
                        showArrow={true}
                        outline={true}
                    />
                </motion.div>
            )}
        </section>
    );
};

export default NetworkProduct;

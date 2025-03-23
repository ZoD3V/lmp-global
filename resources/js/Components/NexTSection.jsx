import React from "react";
import Heading from "./Common/Heading";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Button from "./common/Button";

const NextTSection = ({ nexT }) => {
    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col my-12 gap-12">
            {nexT.map((itemNex, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mx-auto flex flex-col gap-12"
                >
                    <Heading
                        title={itemNex.title}
                        description={itemNex.sub_title}
                        align="left"
                    />
                    <div className="flex items-center justify-center">
                        <motion.img
                            variants={fadeIn("up", 0.4)}
                            viewport={{ once: true }}
                            className="md:max-w-[550px] h-full object-cover object-center"
                            src={`/storage/${itemNex.image}`}
                            alt="Logo"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div
                            style={{
                                display: "block",
                                listStyleType: "auto",
                            }}
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: itemNex.content,
                            }}
                        />
                    </div>
                </motion.div>
            ))}
            {nexT.length > 0 && (
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

export default NextTSection;

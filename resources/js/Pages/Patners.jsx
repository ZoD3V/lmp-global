import React from "react";
import { motion } from "framer-motion";
import logo_ashrae from "../../../public/images/logo/logo_ashrae.png";
import Hero from "@/Components/Common/Hero";
import { fadeIn, textVariant } from "@/utils/motion";
import Layout from "@/Layouts/Layouts";

const Patners = ({ banner, patners }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <motion.section
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-[1200px] mx-auto py-16 px-4 sm:px-6 xl:px-0"
                >
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center gap-12"
                    >
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center mb-4 lg:gap-8"
                        >
                            <motion.h2
                                variants={textVariant(0.2)}
                                viewport={{ once: true }}
                                className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal"
                            >
                                Member Of ASHRAE Since December 2023
                            </motion.h2>
                            <motion.div
                                variants={fadeIn("down", 0.5)}
                                viewport={{ once: true }}
                                className={`max-w-[100px] mx-auto xl:mx-0`}
                            >
                                <motion.img
                                    variants={fadeIn("right", 0.3)}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    src={logo_ashrae}
                                    alt="Logo ASHRAE"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-3 items-center gap-8 w-full justify-items-center"
                        >
                            {patners.map((partner) => (
                                <motion.div
                                    variants={fadeIn("up", 0.3)}
                                    viewport={{ once: true }}
                                    key={partner.id}
                                    className="w-[150px] h-[150px] mx-auto xl:mx-0"
                                >
                                    <motion.img
                                        variants={fadeIn("right", 0.3)}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-full h-full object-contain"
                                        src={`/storage/${partner.image}`}
                                        alt={partner.title}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </main>
    );
};

Patners.layout = (page) => <Layout children={page} />;
export default Patners;

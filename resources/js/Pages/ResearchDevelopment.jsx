import React from "react";
import { motion } from "framer-motion";
import researchDevelopment from "../../../public/images/research&development/research&development.webp";
import Hero from "@/Components/Common/Hero";
import { fadeIn, textVariant } from "@/utils/motion";
import Layout from "@/Layouts/Layouts";

const ResearchDevelopment = ({ banner }) => {
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
                        className="flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <motion.div
                            variants={fadeIn("down", 0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className={`md:w-1/2 flex flex-col items-center md:items-end justify-center order-2 md:order-1`}
                        >
                            <motion.p
                                variants={textVariant(0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="text-slate-600 text-lg mb-4 text-justify"
                            >
                                We thrive on change and have built a culture
                                that enables us to remain at the forefront of
                                the markets we serve, often working closely with
                                our customers
                            </motion.p>
                            <motion.p
                                variants={textVariant(0.3)}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="show"
                                className="text-slate-600 text-lg mb-4 text-justify"
                            >
                                Our R&D teams regularly share expertise across
                                both materials and businesses, enabling us to
                                dynamically allocate resources to the most
                                promising opportunities.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("down", 0.3)}
                            viewport={{ once: true }}
                            className={`w-full md:w-[500px] md:h-[350px] mx-auto xl:mx-0 order-1 md:order-2`}
                        >
                            <motion.img
                                variants={fadeIn("left", 0.3)}
                                viewport={{ once: true }}
                                className="card-img h-full w-full object-cover"
                                src={researchDevelopment}
                                alt="Logo"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </main>
    );
};

ResearchDevelopment.layout = (page) => <Layout children={page} />;
export default ResearchDevelopment;

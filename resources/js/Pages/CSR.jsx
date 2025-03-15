import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "../components/Common/Footer";
import CsrSection from "../Components/CsrSection";

const CSR = ({ banner, csr }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="Corporate Social Responsibility"
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                    description="Implementing corporate social responsibility (CSR) has become an important part of business sustainability. In this case, the Company realizes that every success achieved cannot be separated from the support of many parties, including employees, the community and the surrounding environment."
                />
                <motion.section
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-[1200px] mx-auto pt-16 px-4 sm:px-6 xl:px-0"
                >
                    <motion.h1
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-3xl text-center mb-12 max-w-5xl mx-auto italic"
                    >
                        "{csr[0].headline}"
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-col col-span-2 gap-4 max-w-2xl"
                        >
                            <motion.h2
                                variants={textVariant(0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="text-3xl font-bold"
                            >
                                {csr[0].title}
                            </motion.h2>

                            <div
                                style={{
                                    display: "block",
                                    listStyleType: "auto",
                                }}
                                className="text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: csr[0].content,
                                }}
                            />
                        </motion.div>

                        <motion.div className="flex flex-col gap-8">
                            <motion.div className="flex flex-col gap-4">
                                <motion.h2 className="text-xl font-medium">
                                    CSR VISION
                                </motion.h2>
                                <ul class="list-disc list-inside text-sm">
                                    <li>
                                        The realization of a harmonious
                                        relationship between companies and
                                        society
                                    </li>
                                    <li>
                                        Contribute to the social environment
                                        through social responsibility
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div className="flex flex-col gap-4">
                                <motion.h2 className="text-xl font-medium">
                                    CSR MISSION
                                </motion.h2>
                                <ul class="list-disc list-inside text-sm">
                                    <li>
                                        Maintaining environmental sustainability
                                    </li>
                                    <li>
                                        Always implement human rights people in
                                        employment practices
                                    </li>
                                    <li>
                                        Helps improve quality of life society,
                                        including education, skills, health and
                                        religion
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>

                    <CsrSection />
                </motion.section>
                <Footer />
            </div>
        </main>
    );
};

export default CSR;

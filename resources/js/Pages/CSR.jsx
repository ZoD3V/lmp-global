import React, { use, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "../components/Footer";
import CsrSection from "../Components/CsrSection";

const CSR = ({ banner, csr }) => {
    useEffect(() => {
        console.log(csr);
    }, []);

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
                    className="max-w-[1200px] mx-auto py-16 px-4 sm:px-6 xl:px-0"
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

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                    </div>

                    <CsrSection />
                </motion.section>
                <Footer />
            </div>
        </main>
    );
};

export default CSR;

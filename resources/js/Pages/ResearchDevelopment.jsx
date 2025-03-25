import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import server from "../../../public/images/researchdevelopment.png";
import Footer from "../components/Common/Footer";

const About = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="Research & Development"

                    description="At LMP, we create an environment in R&D that empowers the world's best scientific minds to drive innovations shaping our future.Our R&D teams regularly share expertise across materials and businesses, fostering collaboration.This approach allows us to dynamically allocate resources to the most promising opportunities.."
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
                                className="text-slate-600 text-lg mb-4 text-justify md:text-start"
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
                                className="text-slate-600 text-lg mb-4 text-justify md:text-start"
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
                                src={server}
                                alt="Logo"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
                <Footer />
            </div>
        </main>
    );
};

export default About;

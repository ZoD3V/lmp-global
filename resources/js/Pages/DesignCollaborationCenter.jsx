import React from "react";
import Hero from "../Components/Common/Hero";
import Navbar from "../Components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const DesignCollaborationCenter = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
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
                    className="max-w-[1200px] mx-auto py-16 px-4 sm:px-6 xl:px-0 my-12"
                >
                    <motion.p
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-justify text-lg text-slate-600 font-normal leading-relaxed"
                    >
                        Design collaboration is a process in which designers
                        work together with various parties, such as other team
                        members, stakeholders, and users, to create effective
                        and innovative design solutions. The main goal of design
                        collaboration is to combine various perspectives,
                        expertise and ideas to produce better design results
                        that suit user needs.
                    </motion.p>
                    <motion.p
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-justify text-lg mt-7 text-slate-600 font-normal leading-relaxed"
                    >
                        Design collaboration not only improves the quality of
                        design results, but also strengthens teams and builds a
                        collaborative and innovative work culture. By combining
                        diverse expertise and perspectives, teams can create
                        more effective, relevant and innovative design
                        solutions.
                    </motion.p>
                </motion.section>
                <Footer />
            </div>
        </main>
    );
};

export default DesignCollaborationCenter;

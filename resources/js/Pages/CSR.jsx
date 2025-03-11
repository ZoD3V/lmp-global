import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import server from "../../../public/images/researchdevelopment.png";
import Footer from "../components/Footer";
import FeatureCard from "../Components/common/FeaturedCard";

const CSR = ({ banner }) => {
    const dataCSR = [
        {
            img: server,
            title: "Kangen water machine donation",
            description:
                "Donation of Kangen Water machine for one of the Islamic boarding schools in Bogor, as a water filter for consumption of students and all residents of the Islamic boarding school. This donation aims to ensure the quality of water consumed by students is safer and healthier, so that it can support their health and well-being in carrying out daily activities.",
            buttonLink: "/research-development",
            showButton: false,
        },
    ];

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
                    {dataCSR.map((item, index) => (
                        <FeatureCard
                            key={index}
                            item={item}
                            index={index}
                            fadeIn={fadeIn}
                            textVariant={textVariant}
                            showButton={item.showButton}
                            buttonLink={item.buttonLink}
                        />
                    ))}
                </motion.section>
                <Footer />
            </div>
        </main>
    );
};

export default CSR;

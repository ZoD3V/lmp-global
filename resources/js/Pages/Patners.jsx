import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_ashrae from "../../../public/images/logo_ashrae.png";
import logo_akacp from "../../../public/images/logo_akacp.png";
import logo_carel from "../../../public/images/logo_carel.png";
import logo_corning from "../../../public/images/logo_corning.png";
import logo_ecfan from "../../../public/images/logo_ecfan.png";
import logo_mitsubishi from "../../../public/images/logo_mitsubishi.png";
import logo_panasonic from "../../../public/images/logo_panasonic.png";
import logo_redots from "../../../public/images/logo_redots.png";
import logo_sumitomo from "../../../public/images/logo_sumitomo.png";
import logo_viavi from "../../../public/images/logo_viavi.png";
import Footer from "../components/Footer";

const About = ({ banner }) => {
    const patners = [
        {
            id: 2,
            title: "AKACP",
            image: logo_akacp,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec ultricies.",
        },
        {
            id: 3,
            title: "CAREL",
            image: logo_carel,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 4,
            title: "CORNING",
            image: logo_corning,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 5,
            title: "ECFAN",
            image: logo_ecfan,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 6,
            title: "MISTSUBISHI",
            image: logo_mitsubishi,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 7,
            title: "PANASONIC",
            image: logo_panasonic,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 8,
            title: "RED DOT",
            image: logo_redots,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 9,
            title: "SUMITOMO",
            image: logo_sumitomo,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
        {
            id: 10,
            title: "VIAVI",
            image: logo_viavi,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP Partner"
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                    description="We believe that collaboration is the key to achieving sustainable success. In every step of our journey, we are committed to building mutually beneficial and highly competitive partnerships with various parties. Together with our Partners, we strive to deliver innovation, quality, and solutions that meet the needs of our customers."
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
                                className="text-3xl font-bold mb-4"
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
                                        src={partner.image}
                                        alt={partner.title}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>
                <Footer />
            </div>
        </main>
    );
};

export default About;

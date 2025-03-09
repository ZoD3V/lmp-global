import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import iso from "../../../public/images/icons/ic-iso.png";

const ServicesSection = () => {
    const services = [
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
    ];

    return (
        <section
            id="services"
            className="py-16 max-w-7xl mx-auto px-4 sm:px-6 xl:px-0"
        >
            <motion.div
                variants={fadeIn("up", 0.3)}
                className="flex flex-row items-center justify-center gap-12"
            >
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        variants={textVariant(0.2)}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Certified through greatness
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        className="text-gray-600"
                    >
                        When you resell besnik, you build trust and increase
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                variants={fadeIn("left", 0.4)}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 justify-items-center mt-12"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", 0.3 * (index + 1))}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center justify-center text-center gap-4"
                    >
                        <motion.img
                            variants={fadeIn("down", 0.4 * (index + 1))}
                            className="h-14 w-18"
                            src={service.icon}
                            alt={service}
                        ></motion.img>
                        <motion.h3
                            variants={textVariant(0.3)}
                            className="text-xl font-semibold"
                        >
                            {service.title}
                        </motion.h3>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection;

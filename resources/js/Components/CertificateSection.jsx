import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import cert_tia from "../../../public/images/cert-tia.png";
import cert_epi from "../../../public/images/cert-epi.png";

const CertificateSection = () => {
    const services = [
        {
            title: "Architecture",
            desc: "Rated-3",
        },
        {
            title: "Architecture",
            desc: "Rated-3",
        },
        {
            title: "Architecture",
            desc: "Rated-3",
        },
        {
            title: "Architecture",
            desc: "Rated-3",
        },
    ];

    return (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 my-12">
            <motion.div
                variants={fadeIn("up", 0.3)}
                className="flex flex-row items-center justify-center lg:justify-between gap-12"
            >
                <motion.div
                    variants={fadeIn("down", 0.5)}
                    viewport={{ once: true }}
                    className={`max-w-[130px] mx-auto xl:mx-0 hidden lg:flex`}
                >
                    <motion.img
                        variants={fadeIn("right", 0.3)}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        src={cert_epi}
                        alt="certificate epi"
                    />
                </motion.div>
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
                        Certified Prefabricated Modular Data Center
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        className="text-slate-600"
                    >
                        ANSI/TIA-942-B-2017{" "}
                        <span className="text-blue-600 font-bold">RATED-3</span>
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={fadeIn("down", 0.5)}
                    viewport={{ once: true }}
                    className={`max-w-[130px] mx-auto xl:mx-0 hidden lg:flex`}
                >
                    <motion.img
                        variants={fadeIn("right", 0.3)}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        src={cert_tia}
                        alt="certificate tia"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                variants={fadeIn("left", 0.4)}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mt-12"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", 0.3 * (index + 1))}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center justify-center text-center gap-4 p-4 bg-gray-50 rounded-lg w-full"
                    >
                        <motion.h3
                            variants={textVariant(0.3)}
                            className="text-xl font-semibold"
                        >
                            {service.title}
                        </motion.h3>
                        <motion.p
                            variants={textVariant(0.3)}
                            className="text-xl font-semibold text-blue-600"
                        >
                            {service.desc}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default CertificateSection;

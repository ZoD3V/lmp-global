import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_iso from "../../../public/images/logo/logo_iso.png";

const CertificateIsoSection = () => {
    const dataCertificate = [
        {
            logo: logo_iso,
            title: "ISO 9001:2015",
        },
    ];

    return (
        <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-2 justify-items-center">
            <motion.div
                variants={fadeIn("right", 0.3)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="flex flex-col lg:flex-row items-start lg:gap-24 justify-between col-span-2 mb-12"
            >
                <div className="flex flex-col">
                    <motion.h1
                        variants={fadeIn("down", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="text-3xl font-bold text-gray-900"
                    >
                        Certified through greatness,
                        <span className="text-blue-600 text-3xl font-bold">
                            We Maintain Customer Trust
                        </span>
                    </motion.h1>
                </div>
                <motion.p
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="show"
                    className="text-slate-600"
                >
                    We ensure that every installation we build has strict
                    quality checks. Sustainable solutions for an environmentally
                    friendly and renewable future.
                </motion.p>
            </motion.div>

            <motion.div
                variants={fadeIn("left", 0.4)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="col-span-2"
            >
                {dataCertificate.map((item, index) => (
                    <img
                        src={item.logo}
                        alt={item.title}
                        className="w-full h-16"
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default CertificateIsoSection;

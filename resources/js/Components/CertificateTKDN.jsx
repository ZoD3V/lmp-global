import React from "react";
import { motion } from "framer-motion";
import Heading from "./Common/Heading";
import { fadeIn } from "../utils/motion";

const CertificateTKDN = ({ certificates }) => {
    return (
        <section className="max-w-[1200px] px-4 sm:px-6 xl:px-0 py-16 w-full mx-auto">
            {/* Background Pattern */}

            <div className="max-w-7xl relative flex flex-col gap-12">
                <Heading
                    title={"Certificate TKDN"}
                    description={
                        "Official certification documents from the Ministry of Industry validating our compliance with industry standards for domestic component levels."
                    }
                />

                <div
                    className={`grid grid-cols-1 sm:grid-cols-${
                        certificates.length === 1 ? "1" : "2"
                    } gap-8 md:gap-10 items-center justify-items-center`}
                >
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{ once: true }}
                            variants={fadeIn("up", 0.2 * index)}
                            className={`${
                                certificates.length === 1
                                    ? "max-w-xl"
                                    : "w-full"
                            }`}
                        >
                            <div className="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                <div className="relative">
                                    <div className="relative aspect-[3/4]">
                                        <img
                                            src={
                                                certificate.src ||
                                                "/placeholder.svg"
                                            }
                                            alt={certificate.alt}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificateTKDN;

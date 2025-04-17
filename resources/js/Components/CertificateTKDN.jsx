import React from "react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Heading from "./Common/Heading";
import { fadeIn } from "../utils/motion";

const CertificateTKDN = ({ certificates }) => {
    const handleDownload = (certificate, index) => {
        const link = document.createElement("a");
        link.href = certificate.src;
        link.download = `TKDN-Certificate-${index + 1}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                            variants={fadeIn("up", 0.2 * index)}
                            viewport={{ once: true }}
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

                                    {/* Download button overlay */}
                                    <div className="absolute bottom-4 right-4">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="rounded-full shadow-lg flex items-center gap-1 bg-white hover:bg-gray-100"
                                            onClick={() =>
                                                handleDownload(
                                                    certificate,
                                                    index
                                                )
                                            }
                                        >
                                            <Download className="h-4 w-4" />
                                            <span>Download</span>
                                        </Button>
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

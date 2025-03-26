import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import {
    CheckCircle2,
    BadgeCheck,
  } from "lucide-react"

const CertificateIsoSection = () => {
    const isoCertifications = [
        {
            id: "iso9001",
            number: "9001",
            year: "2015",
            title: "Quality Management",
            description: "Ensures consistent quality in products and services",
        },
        {
            id: "iso14001",
            number: "14001",
            year: "2015",
            title: "Environmental Management",
            description:
                "Demonstrates commitment to environmental responsibility",
        },
        {
            id: "iso45001",
            number: "45001",
            year: "2018",
            title: "Occupational Health & Safety",
            description: "Prioritizes workplace safety and health standards",
        },
        {
            id: "iso27001",
            number: "27001",
            year: "2022",
            title: "Information Security",
            description: "Ensures robust information security management",
        },
        {
            id: "iso37001",
            number: "37001",
            year: "2022",
            title: "Anti-Bribery Management",
            description:
                "Demonstrates commitment to ethical business practices",
        },
    ];

    return (
        <section
            id="certifications"
            className="w-full py-24 md:py-32 bg-white overflow-hidden"
        >
            <div className="container px-4 md:px-6 relative ">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-30 -z-10"></div>

                <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center p-1 px-4 rounded-full bg-blue-100/80 backdrop-blur-sm mb-4 border border-blue-200/50"
                    >
                        <Badge
                            className="text-blue-700 bg-transparent font-medium"
                            variant="outline"
                        >
                            Industry Standards
                        </Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl !leading-[2] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 mb-1"
                    >
                        Certified Through Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        Our commitment to quality, security, and sustainability
                        is validated through rigorous international
                        certifications
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-16">
                    {isoCertifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="group relative overflow-hidden rounded-xl bg-white border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-300"></div>

                                <div className="p-6 flex flex-col h-full relative z-10">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-3 flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700">
                                                <BadgeCheck className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <span className="text-sm font-medium text-blue-600">
                                                    ISO
                                                </span>
                                                <div className="mx-2 h-px w-3 bg-blue-200"></div>
                                                <span className="font-bold text-xl">
                                                    {cert.number}
                                                </span>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {cert.year}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold mb-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {cert.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-blue-50">
                                        <div className="flex items-center text-sm text-blue-600">
                                            <CheckCircle2 className="h-4 w-4 mr-1" />
                                            <span>
                                                Internationally Recognized
                                            </span>
                                        </div>
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

export default CertificateIsoSection;

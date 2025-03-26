import React from "react";
import { motion } from "framer-motion";
import { Server, Cpu, Building2, Zap, ShieldCheck } from "lucide-react";
import cert_tia2 from "../../../../public/images/cert-tia2.png";
import cert_epi from "../../../../public/images/cert-epi.png";
import { Badge } from "../ui/badge";

const CertificateSection = () => {
    const ratingCategories = [
        {
            id: "architecture",
            title: "Architecture",
            icon: <Building2 className="h-6 w-6" />,
            description: "Structural integrity and design excellence",
        },
        {
            id: "telecom",
            title: "Telecom",
            icon: <Server className="h-6 w-6" />,
            description: "Advanced networking and communication systems",
        },
        {
            id: "electrical",
            title: "Electrical",
            icon: <Zap className="h-6 w-6" />,
            description: "Reliable power distribution and backup systems",
        },
        {
            id: "mechanical",
            title: "Mechanical",
            icon: <Cpu className="h-6 w-6" />,
            description: "Efficient cooling and environmental controls",
        },
    ];

    return (
        <section
            id="data-center-rating"
            className="relative w-full py-24 md:py-32 overflow-hidden"
        >
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 -z-10"></div>

            {/* Animated tech-inspired elements */}
            <div className="absolute inset-0 -z-5">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[10%] left-[5%] w-40 h-40 rounded-full bg-blue-400/10 blur-3xl"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-56 h-56 rounded-full bg-indigo-400/10 blur-3xl"></div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 0.2, 0.4] }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                        className="absolute top-1/3 right-1/4 w-96 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 rotate-45"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.1, 0.3] }}
                        transition={{
                            duration: 7,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: 1,
                        }}
                        className="absolute bottom-1/3 left-1/3 w-[500px] h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 -rotate-45"
                    ></motion.div>

                    {/* Digital circuit pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOHYxMmgxMlYxOEgzNnptMTIgMTJ2MTJoMTJWMzBoLTEyem0wLTI0djEyaDEyVjZoLTEyem0tMTIgMHYxMmgxMlY2SDM2eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                </div>
            </div>

            <div className="max-w-[1200px] container px-4 md:px-6 xl:px-0 relative">
                {/* Certification logos - moved to top */}
                <div className="flex justify-between items-center gap-6 mb-16 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="hidden md:flex md:w-40 md:h-40 relative items-center justify-center">
                            <img
                                src={cert_epi}
                                alt="EPI Certification"
                                width={112}
                                height={112}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center justify-center p-1 px-4 rounded-full bg-white/10 backdrop-blur-sm mb-4 border border-white/20"
                        >
                            <Badge
                                className="text-blue-100 bg-transparent font-medium border-white/20"
                                variant="outline"
                            >
                                Industry Recognition
                            </Badge>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
                        >
                            ANSI/TIA-942-B-2017 Certified
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center justify-center mb-6"
                        >
                            <div className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">
                                RATED-3
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl text-blue-100/80"
                        >
                            Our Prefabricated Modular Data Center meets the
                            highest industry standards for reliability and
                            performance
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="hidden md:flex md:w-40 md:h-40 relative items-center justify-center">
                            <img
                                src={cert_tia2}
                                alt="TIA-942 Certification"
                                width={112}
                                height={112}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {ratingCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="group h-full relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-300"></div>

                                <div className="p-6 flex flex-col h-full relative z-10">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-100">
                                            {category.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-blue-100/70 mb-4">
                                        {category.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-blue-100">
                                                Rating
                                            </span>
                                            <div className="flex items-center">
                                                <ShieldCheck className="h-4 w-4 mr-1 text-blue-300" />
                                                <span className="font-bold text-blue-100">
                                                    Rated-3
                                                </span>
                                            </div>
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

export default CertificateSection;

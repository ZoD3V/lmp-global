import React from "react";
import { motion } from "framer-motion";
import { Droplet, HardHat, Shield, Stethoscope, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";
import oil from "../../../../public/images/nex-t/oil.webp";
import health from "../../../../public/images/nex-t/health.webp";
import manufacturing from "../../../../public/images/nex-t/manufacturing.webp";
import military from "../../../../public/images/nex-t/military.webp";
import mining from "../../../../public/images/nex-t/mining.webp";
import telecommunication from "../../../../public/images/nex-t/telecommunication.webp";
import Heading from "../Common/Heading";

const NexTIndustries = () => {
    const industries = [
        {
            title: "Oil & Gas",
            description:
                "Improving Operational Efficiency at Exploration and Production Sites through Reliable Edge Computing",
            image: oil,
            icon: Droplet,
            iconColor: "text-amber-500",
            bgColor: "bg-amber-50",
        },
        {
            title: "Military",
            description:
                "Decentralized Computing Infrastructure for Strategic Missions and High-Level Security",
            image: military,
            icon: Shield,
            iconColor: "text-slate-600",
            bgColor: "bg-slate-50",
        },
        {
            title: "Manufacturing",
            description:
                "Driving Industry 4.0 Transformation with Edge Data Centers on the Production Line",
            image: manufacturing,
            icon: HardHat,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50",
        },
        {
            title: "Mining",
            description:
                "Real-Time Connectivity and Analytics in Remote Mine Sites with Robust Edge Solutions",
            image: mining,
            icon: HardHat,
            iconColor: "text-yellow-500",
            bgColor: "bg-yellow-50",
        },
        {
            title: "Health Care",
            description:
                "Delivering Speed and Security in Medical Data Processing at Critical Locations.",
            image: health,
            icon: Stethoscope,
            iconColor: "text-emerald-500",
            bgColor: "bg-emerald-50",
        },
        {
            title: "Telecommunication",
            description:
                "Supporting Low Latency Infrastructure and Services with Integrated Edge Colocation.",
            image: telecommunication,
            icon: Wifi,
            iconColor: "text-purple-500",
            bgColor: "bg-purple-50",
        },
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
                <Heading
                    title={"Industries"}
                    description={
                        "specializes in solving complex challenges for industries operating in remote locations. By integrating connectivity, advanced compute, and real-world AI, we deliver solutions that provide immediate value."
                    }
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 xl:grid-cols-2 gap-4"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-full"
                        >
                            <div
                                className={cn(
                                    "h-full rounded-lg overflow-hidden",
                                    "bg-white border border-gray-100",
                                    "transition-all duration-300 ease-out",
                                    "hover:border-gray-200",
                                    "group"
                                )}
                            >
                                <div className="flex flex-col sm:flex-row h-full">
                                    {/* Image Section */}
                                    <div className="sm:w-2/5 relative">
                                        <div className="h-full">
                                            <img
                                                src={industry.image}
                                                alt={`${industry.title} industry`}
                                                width={400}
                                                height={300}
                                                className="h-full w-full object-cover transition-transform duration-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex-1 flex flex-col justify-center">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className={cn(
                                                    "w-12 h-12 rounded-full flex items-center justify-center mr-3",
                                                    "transition-all duration-300",
                                                    "shadow-sm",
                                                    industry.bgColor
                                                )}
                                            >
                                                <industry.icon
                                                    className={cn(
                                                        "w-6 h-6",
                                                        industry.iconColor
                                                    )}
                                                />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {industry.title}
                                            </h3>
                                        </div>

                                        <div className="w-16 h-px bg-gray-200 mb-4"></div>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {industry.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default NexTIndustries;

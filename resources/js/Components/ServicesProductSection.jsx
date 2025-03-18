import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiServerStack } from "react-icons/hi2";
import { GoContainer } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";

const ServiceProductSection = ({ banner, title, description }) => {
    const dataServices = [
        {
            icon: <HiComputerDesktop className="w-8 h-8 text-indigo-600" />,
            title: "Rapid Design",
            description:
                "A simple, repeatable system that creates efficiency in construction, automatic design, and low-risk processes..",
        },
        {
            icon: <HiServerStack className="w-8 h-8 text-amber-400" />,
            title: "Tailored Integration",
            description:
                "ration of mechanical & electrical systems in a factory for optimal quality & production speed.",
        },
        {
            icon: <GoContainer className="w-8 h-8 text-red-400" />,
            title: "Simplistic Assembly",
            description:
                "Good documentation and a dedicated  engineering team make it easier for  the factory team to assemble  modules smoothly",
        },
        {
            icon: <GrUserWorker className="w-8 h-8 text-cyan-400" />,
            title: "Global Service",
            description:
                "Performing various types of maintenance and service performance enhancements  to improve efficiency and reduce  complexity at various locations.",
        },
    ];
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[1200px] container mx-auto px-4 sm:px-6 xl:px-0 flex flex-col items-center justify-center py-16"
        >
            <motion.div
                variants={fadeIn("up", 0.3)}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 justify-items-center"
            >
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-24 justify-between col-span-2 mb-12"
                >
                    <div className="flex flex-col">
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            viewport={{ once: true }}
                            className="text-sm text-purple-600 font-medium mb-2"
                        >
                            Our Services
                        </motion.div>
                        <motion.h1
                            variants={textVariant(0.3)}
                            className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900"
                        >
                            Efficient & Personalized Process
                        </motion.h1>
                    </div>
                    <motion.p
                        variants={fadeIn("down", 0.5)}
                        className="text-slate-600"
                    >
                        Design a financial operating system that works for your
                        business and streamlined cash flow management
                    </motion.p>
                </motion.div>

                <motion.div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {dataServices.map((service, index) => (
                        <motion.div
                            variants={fadeIn("up", 0.3 * (index + 1))}
                            viewport={{ once: true }}
                            key={index}
                            className="flex flex-col gap-2"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <motion.h2 className="font-bold text-xl">
                                {service.title}
                            </motion.h2>
                            <motion.p className="text-slate-600">
                                {service.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default ServiceProductSection;

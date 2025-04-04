import React from "react";
import digitalTwin from "../../../../public/images/5tier-digital-twin.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const DwinTechnologySection = () => {
    const features = [
        {
            title: "Autonomous",
            description: "From modeling to updating, each step is automated",
        },
        {
            title: "Prescriptive",
            description: "Combined with AI for control optimization",
        },
        {
            title: "Predictive",
            description: "What-if analysis for scenario planning",
        },
        {
            title: "Descriptive",
            description: "System state visualization and anomaly detection",
        },
        {
            title: "Geometric",
            description: "Spatial positioning and basic modeling",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <span className="text-red-600">5 Tier{" "}</span>
                        <span className="text-blue-600">
                            Digital Twin Technology
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        Enabling fully autonomous DCs for the future with LMP
                        Digital-Twin Based, Risk-Aware AI Solution
                    </motion.p>
                </div>

                <motion.div
                    className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="p-6 md:p-8">
                        <div>
                            <div className="mb-8 w-full">
                                <motion.img
                                    src={digitalTwin}
                                    alt="digital twin"
                                    className="object-contain object-center"
                                    variants={fadeIn("up", 0.4)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                />
                            </div>
                            <motion.p
                                className="text-gray-700 mb-6"
                                variants={fadeIn("up", 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                The Digital Twin Platform That
                                <span className="text-red-600 font-semibold">
                                    Manages
                                </span>
                                Infrastructure Risk,
                                <span className="text-blue-600 font-semibold">
                                    Optimizes
                                </span>
                                Energy Performance &
                                <span className="text-red-600 font-semibold">
                                    Accelerates
                                </span>
                                Your Sustainability Journey
                            </motion.p>

                            <ul className="space-y-3">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        variants={fadeIn("up", 0.2 * index)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                    >
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                {feature.title}:
                                            </span>
                                            {feature.description}
                                        </FeatureItem>
                                    </motion.div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

function FeatureItem({ children }) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 bg-blue-500 text-white rounded-full p-1 flex-shrink-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>{children}</div>
        </li>
    );
}

export default DwinTechnologySection;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
    const features = [
        {
            icon: "🔍",
            title: "Green Technology",
            description:
                "This technology enables a cleaner, greener world while allowing modern lifestyles without harming the Earth.",
        },
        {
            icon: "⚙️",
            title: "Renewable Energy",
            description:
                "Renewable energy sources are leading the way to a clean and sustainable future.",
        },
        {
            icon: "🚀",
            title: "Efficiency, Sustainability in Data Centers",
            description:
                "Energy cost savings, enhanced performance, sustainability, and regulatory compliance drive modern data center advancements.",
        },
    ];

    return (
        <section className="w-full my-12">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] mx-auto py-16"
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
                        How can we help your business?
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        className="text-slate-600"
                    >
                        When you resell besnik, you build trust and increase
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.5)}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3 * (index + 1))}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-6"
                        >
                            <motion.div
                                variants={fadeIn("down", 0.4 * (index + 1))}
                                viewport={{ once: true }}
                                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                                style={{
                                    backgroundColor:
                                        index === 0
                                            ? "#F1EFFD"
                                            : index === 1
                                            ? "#FFE7E7"
                                            : "#FFF3E4",
                                }}
                            >
                                <motion.div
                                    variants={fadeIn("up", 0.5 * (index + 1))}
                                    viewport={{ once: true }}
                                    className="text-3xl"
                                >
                                    {feature.icon}
                                </motion.div>
                            </motion.div>
                            <motion.h3
                                variants={textVariant(0.3)}
                                viewport={{ once: true }}
                                className="text-2xl font-medium mb-3 text-center"
                            >
                                {feature.title}
                            </motion.h3>
                            <motion.p
                                variants={fadeIn("up", 0.6 * (index + 1))}
                                viewport={{ once: true }}
                                className="text-slate-600 text-center"
                            >
                                {feature.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.7)}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        variants={fadeIn("up", 0.8)}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
                    >
                        Become a Partner
                        <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FeaturesSection;

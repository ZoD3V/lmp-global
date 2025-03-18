import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
    const features = [
        {
            icon: "🟣",
            title: "Built for impact",
            description:
                "We identify and nurture a truly diverse team of designers, developers and marketers",
        },
        {
            icon: "🔴",
            title: "In sync with you",
            description:
                "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
        },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 grid-cols-1 gap-12"
                >
                    <motion.div variants={fadeIn("right", 0.3)}>
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            viewport={{ once: true }}
                            className="text-sm text-purple-600 font-medium mb-2"
                        >
                            ACHIEVE MORE
                        </motion.div>
                        <motion.h1
                            variants={textVariant(0.5)}
                            className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
                        >
                            Purpose of a convoy is to keep your team
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        viewport={{ once: true }}
                        className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                viewport={{ once: true }}
                                variants={fadeIn("up", 0.3 * (index + 1))}
                                className="flex items-start space-x-4"
                            >
                                <motion.div
                                    variants={fadeIn(
                                        "right",
                                        0.4 * (index + 1)
                                    )}
                                    viewport={{ once: true }}
                                    className="w-12 h-12 flex items-center justify-center rounded-lg"
                                >
                                    {feature.icon}
                                </motion.div>
                                <motion.div
                                    variants={fadeIn("left", 0.4 * (index + 1))}
                                    viewport={{ once: true }}
                                >
                                    <motion.h2
                                        variants={textVariant(0.3)}
                                        viewport={{ once: true }}
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                    >
                                        {feature.title}
                                    </motion.h2>
                                    <motion.p
                                        variants={fadeIn("up", 0.4)}
                                        viewport={{ once: true }}
                                        className="text-slate-600"
                                    >
                                        {feature.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PurposeSection;

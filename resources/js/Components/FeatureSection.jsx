import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Badge } from "./ui/badge";
import { Leaf, Shield, Clock, Award } from "lucide-react";
import containment from "../../../public/images/containment_lmp.png";
import Heading from "./Common/Heading";

function FeatureItem({ icon, title, description }) {
    return (
        <div className="group rounded-xl border p-4 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/5">
            <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-500/10 p-2 transition-colors group-hover:bg-blue-500/20">
                    {icon}
                </div>
                <div className="space-y-1">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </div>
    );
}

const FeaturesSection = () => {
    return (
        <section id="features" className="w-full py-16 bg-white">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] flex flex-col gap-10">
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="show"
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="space-y-2"
                    >
                        <Badge
                            className="inline-flex bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
                            variant="secondary"
                        >
                            Why Choose Us
                        </Badge>
                        <Heading
                            title={
                                "Enterprise-Grade Solutions for Critical Infrastructure"
                            }
                            description={
                                "Our solutions are specifically designed to meet the demanding requirements of modern data centers, ensuring reliability, performance, and sustainability."
                            }
                        />
                    </motion.div>
                </motion.div>

                <div className="mx-auto grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="order-2 lg:order-1"
                    >
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className="flex flex-col justify-center space-y-6"
                        >
                            <FeatureItem
                                icon={
                                    <Shield className="h-6 w-6 text-blue-600" />
                                }
                                title="Reliability & Security"
                                description="All components undergo rigorous testing to ensure they meet or exceed industry specifications, providing the reliability critical for 24/7 operations."
                            />
                            <FeatureItem
                                icon={
                                    <Clock className="h-6 w-6 text-blue-600" />
                                }
                                title="Minimize Downtime"
                                description="Our solutions are designed to maximize uptime and ensure business continuity, even in the most demanding environments."
                            />
                            <FeatureItem
                                icon={
                                    <Leaf className="h-6 w-6 text-green-600" />
                                }
                                title="Eco-Friendly Solutions"
                                description="We're committed to developing sustainable technologies that reduce energy consumption and environmental impact without compromising performance."
                            />
                            <FeatureItem
                                icon={
                                    <Award className="h-6 w-6 text-blue-600" />
                                }
                                title="Expert Support"
                                description="Our team of specialists provides comprehensive support to ensure smooth implementation and ongoing operation of our solutions."
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="order-1 lg:order-2"
                    >
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className="relative overflow-hidden rounded-2xl shadow-2xl"
                        >
                            <img
                                src={containment}
                                alt="Data Center Features"
                                width={500}
                                height={400}
                                className="w-full object-cover transition-transform hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

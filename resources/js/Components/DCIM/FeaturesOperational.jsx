import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { BarChart3, GalleryThumbnailsIcon, Shield, Zap } from "lucide-react";

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const FeaturesOperational = () => {
    const featureCards = [
        {
            icon: Zap,
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
            title: "Operational Excellence",
            description:
                "Streamline operations with real-time monitoring, automated workflows, and predictive analytics that optimize resource allocation and reduce downtime.",
        },
        {
            icon: BarChart3,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            title: "Cost Optimization",
            description:
                "Reduce operational costs through improved capacity planning, energy efficiency monitoring, and automated provisioning that eliminates manual errors.",
        },
        {
            icon: Shield,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            title: "Compliance & Security",
            description:
                "Ensure regulatory compliance with built-in policy enforcement, comprehensive audit trails, and security monitoring across your entire infrastructure.",
        },
    ];

    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Badge
                            variant="outline"
                            className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-500"
                        >
                            <GalleryThumbnailsIcon className="w-4 h-4 mr-2" />
                            Integrated Solution
                        </Badge>
                    </motion.div>
                    <Heading
                        title={"Features"}
                        description={
                            "The Only System That Integrates Infrastructure With Networks In One Platform. With Full Visibility Our Software Can Support Your Whole Business In One Place."
                        }
                    />
                </div>

                <div className="grid gap-8 lg:grid-cols-2 items-center">
                    {/* Featured img Section */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-xl border bg-white shadow-lg"
                    >
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-27%20at%205.37.17%E2%80%AFPM-PZRaxZQDsnRv8SKIF6kR91gDESz5jr.png"
                            alt="Platform Features Diagram"
                            width={800}
                            height={600}
                            className="w-full object-cover"
                        />
                    </motion.div>

                    {/* Features Content */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">
                            COMMERCIAL AND OPERATIONAL BENEFITS
                        </h3>
                        <p className="text-gray-500">
                            Our software can help you improve your top line
                            through better delivery of SLAs and improve your
                            bottom line with proactive functionality. The Only
                            System That Integrates Infrastructure With Networks
                            In One Platform provides full visibility across your
                            entire business operations.
                        </p>
                        <p className="text-gray-500">
                            With comprehensive asset management, connectivity
                            monitoring, and real-time telemetry, our platform
                            delivers the insights you need to optimize
                            performance, reduce costs, and ensure compliance
                            across your infrastructure.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Feature Cards */}
                <div className="grid gap-6 md:grid-cols-3 mt-16">
                    {featureCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-2">
                                    <div
                                        className={`flex items-center justify-center w-12 h-12 rounded-full ${card.iconBg} mb-2`}
                                    >
                                        <card.icon
                                            className={`h-6 w-6 ${card.iconColor}`}
                                        />
                                    </div>
                                    <CardTitle>{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500">
                                        {card.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesOperational;

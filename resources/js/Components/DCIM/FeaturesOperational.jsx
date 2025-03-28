import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const FeaturesOperational = () => {
    const benefitCards = [
        {
            title: "Operational Excellence",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>`,
            description:
                "Streamline operations with real-time monitoring, automated workflows, and predictive analytics that optimize resource allocation and reduce downtime.",
        },
        {
            title: "Cost Optimization",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`,
            description:
                "Reduce operational costs through improved capacity planning, energy efficiency monitoring, and automated provisioning that eliminates manual errors.",
        },
        {
            title: "Compliance & Security",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>`,
            description:
                "Ensure regulatory compliance with built-in policy enforcement, comprehensive audit trails, and security monitoring across your entire infrastructure.",
        },
    ];

    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05)_0%,rgba(59,130,246,0)_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05)_0%,rgba(59,130,246,0)_50%)]"></div>
                <svg
                    className="absolute top-0 left-0 w-full h-full opacity-5"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <pattern
                            id="grid-pattern"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 10 0 L 0 0 0 10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid-pattern)" />
                </svg>
            </div>

            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge
                        variant="outline"
                        className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-500"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Integrated Solution
                    </Badge>
                    <Heading
                        title={"Features"}
                        description={
                            "The Only System That Integrates Infrastructure With Networks In One Platform. With Full Visibility Our Software Can Support Your Whole Business In One Place."
                        }
                    />
                </div>

                <motion.div
                    variants={fadeIn("up",0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-6xl"
                >
                    <Card className="border border-blue-200/50 shadow-md overflow-hidden bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex justify-center">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-27%20at%205.37.17%E2%80%AFPM-PZRaxZQDsnRv8SKIF6kR91gDESz5jr.png"
                                    alt="XPediTe Platform Features Diagram"
                                    width={1000}
                                    height={800}
                                    className="object-contain max-w-full"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefitCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            variants={fadeIn("up", index * 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/70 backdrop-blur-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                                            dangerouslySetInnerHTML={{
                                                __html: card.icon,
                                            }}
                                        />
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600">
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

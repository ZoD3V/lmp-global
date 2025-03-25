import React, { useState } from "react";
import containment1 from "../../../public/images/containment.png";
import containment2 from "../../../public/images/containment2.png";
import containment3 from "../../../public/images/containment3.png";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Zap,
    Thermometer,
    Recycle,
    Clock,
    DollarSign,
    Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        },
    },
};

const EdgeDcSection = () => {
    const [activeTab, setActiveTab] = useState("containment");

    const solutions = [
        {
            id: "containment",
            title: "Data Center Containment Solutions",
            description:
                "Advanced airflow management systems that optimize cooling efficiency and reduce operational costs.",
            image: containment1,
            benefits: [
                {
                    icon: <Thermometer className="h-5 w-5 text-red-500" />,
                    iconBg: "bg-red-100",
                    title: "Temperature Control",
                    description:
                        "Separates hot and cold air to prevent mixing, allowing cooling systems to operate at optimal efficiency and reducing energy consumption by up to 30%.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Energy Efficiency",
                    description:
                        "Reduces cooling power requirements by maintaining consistent airflow patterns, leading to significant reductions in electricity costs and carbon footprint.",
                },
                {
                    icon: <Clock className="h-5 w-5 text-blue-500" />,
                    iconBg: "bg-blue-100",
                    title: "Extended Equipment Lifespan",
                    description:
                        "Consistent cooling prevents thermal stress on servers and IT equipment, extending their operational life and reducing the frequency of replacement parts.",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
                    iconBg: "bg-emerald-100",
                    title: "Cost Reduction",
                    description:
                        "Lower cooling costs, reduced maintenance requirements, and fewer equipment failures translate to substantial operational savings.",
                },
            ],
        },
        {
            id: "micro",
            title: "Micro Data Center Solutions",
            description:
                "Compact, self-contained systems that integrate computing, storage, networking, and cooling in a single enclosure.",
            image: containment2,
            benefits: [
                {
                    icon: <Recycle className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Rapid Deployment",
                    description:
                        "Pre-engineered solutions that can be deployed in days rather than months, enabling quick response to changing business needs.",
                },
                {
                    icon: <Shield className="h-5 w-5 text-purple-500" />,
                    iconBg: "bg-purple-100",
                    title: "Enhanced Security",
                    description:
                        "Integrated physical security features protect critical IT assets in edge locations or branch offices where dedicated security staff may not be present.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Optimized Performance",
                    description:
                        "Purpose-built cooling and power systems designed specifically for the enclosed IT equipment ensure optimal performance.",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
                    iconBg: "bg-emerald-100",
                    title: "Reduced Footprint",
                    description:
                        "Compact design requires minimal floor space while delivering enterprise-grade computing capabilities.",
                },
            ],
        },
        {
            id: "modular",
            title: "Modular Data Center Solutions",
            description:
                "Scalable, containerized data centers that can be rapidly deployed and easily expanded as needs grow.",
            image: containment3,
            benefits: [
                {
                    icon: <Clock className="h-5 w-5 text-blue-500" />,
                    iconBg: "bg-blue-100",
                    title: "Rapid Scalability",
                    description:
                        "Additional capacity can be added in modular increments without disrupting existing operations, enabling just-in-time capacity expansion.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Predictable Performance",
                    description:
                        "Factory-tested systems deliver consistent, predictable performance regardless of deployment location.",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
                    iconBg: "bg-emerald-100",
                    title: "Capital Efficiency",
                    description:
                        "Pay-as-you-grow approach aligns capital expenditure with actual capacity needs rather than projected future requirements.",
                },
                {
                    icon: <Recycle className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Deployment Flexibility",
                    description:
                        "Can be deployed in non-traditional locations including outdoors, in warehouses, or in repurposed buildings.",
                },
            ],
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="container max-w-[1200px] px-4 md:px-6 xl:px-0">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Data Center Infrastructure Solutions
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl">
                        Optimize your data center operations with our
                        comprehensive range of infrastructure solutions designed
                        to enhance efficiency, reduce costs, and ensure
                        reliability.
                    </p>
                </motion.div>

                <Tabs
                    defaultValue="containment"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                            <TabsTrigger value="containment">
                                Containment Solutions
                            </TabsTrigger>
                            <TabsTrigger value="micro">
                                Micro Data Centers
                            </TabsTrigger>
                            <TabsTrigger value="modular">
                                Modular Data Centers
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {solutions.map((solution) => (
                        <TabsContent
                            key={solution.id}
                            value={solution.id}
                            className="focus:outline-none"
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="order-2 md:order-1"
                                >
                                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
                                        {solution.title}
                                    </h3>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <div className="grid gap-8 mb-10">
                                        {solution.benefits.map(
                                            (benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    variants={itemVariants}
                                                    className="flex items-start gap-4"
                                                >
                                                    <div
                                                        className={`mt-1 ${benefit.iconBg} p-3 rounded-full`}
                                                    >
                                                        {benefit.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-900 text-lg mb-1">
                                                            {benefit.title}
                                                        </h4>
                                                        <p className="text-slate-600">
                                                            {
                                                                benefit.description
                                                            }
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )
                                        )}
                                    </div>

                                    <Button
                                        size="lg"
                                        variant="theme"
                                        className="group text-base"
                                    >
                                        Request Consultation
                                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="order-1 md:order-2 flex justify-center"
                                >
                                    <motion.div
                                        className="relative w-full max-w-md"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            delay: 0.2,
                                        }}
                                    >
                                        <div className="aspect-square relative flex items-center justify-center">
                                            <img
                                                src={
                                                    solution.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={solution.title}
                                                fill="true"
                                                className="object-contain"
                                                style={{
                                                    filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.15))",
                                                }}
                                            />
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute -z-10 w-full h-full top-0 left-0">
                                            <div className="absolute top-1/4 -left-10 w-20 h-20 bg-blue-100/70 rounded-full blur-xl"></div>
                                            <div className="absolute bottom-1/4 -right-10 w-32 h-32 bg-amber-100/70 rounded-full blur-xl"></div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default EdgeDcSection;

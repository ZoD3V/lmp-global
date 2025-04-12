import React from "react";
import {
    Clock,
    Database,
    Shield,
    Workflow,
    BarChart3,
    Zap,
    LineChart,
    Layers,
    LayoutGrid,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

const SpeedDeployment = () => {
    const features = [
        {
            icon: <Shield className="h-10 w-10 text-emerald-500" />,
            title: "Regulatory Compliance",
            description:
                "Ensures compliance with company regulations on all policies, installs, moves, adds and changes of equipment and infrastructure.",
            bgColor: "bg-emerald-50",
        },
        {
            icon: <Workflow className="h-10 w-10 text-purple-500" />,
            title: "End-to-End Planning",
            description:
                "Automatic planning for installs, moves, adds and changes using company rules, algorithms, work orders, and change control support.",
            bgColor: "bg-purple-50",
        },
        {
            icon: <BarChart3 className="h-10 w-10 text-rose-500" />,
            title: "Real-time Monitoring",
            description:
                "Monitors and alerts on all installed equipment and connectivity across the entire inventory with bespoke customer dashboards.",
            bgColor: "bg-rose-50",
        },
        {
            icon: <Layers className="h-10 w-10 text-violet-500" />,
            title: "Rapid Implementation",
            description:
                "All planning and design as well as implementation is done using XpedITe, allowing for accurate and rapid new installations and fast migration.",
            bgColor: "bg-violet-50",
        },
        {
            icon: <LayoutGrid className="h-10 w-10 text-teal-500" />,
            title: "Intelligent Visualization",
            description:
                "Rapid import of floor layouts and configurable, intelligent layers provide consistent accurate visibility across your entire infrastructure.",
            bgColor: "bg-teal-50",
        },
        {
            icon: <Clock className="h-10 w-10 text-amber-500" />,
            title: "Intelligent Commissioning",
            description:
                "Saves up to 95% of resource time per IMAC ticket. Cuts deployment time from several weeks to just hours or minutes. Streamlines the process reducing delays.",
            bgColor: "bg-amber-50",
        },
        {
            icon: <Database className="h-10 w-10 text-blue-500" />,
            title: "Comprehensive Asset Management",
            description:
                "Provides a complete view of all assets (IT and Facility) within all data centre sites, both local and remote.",
            bgColor: "bg-blue-50",
        },
        {
            icon: <LineChart className="h-10 w-10 text-cyan-500" />,
            title: "Capacity Planning",
            description:
                "Provides accurate information for both capacity planning and for future deployment and relocation projects.",
            bgColor: "bg-cyan-50",
        },
        {
            icon: <Zap className="h-10 w-10 text-orange-500" />,
            title: "Environmental Monitoring",
            description:
                "Real-time monitoring and alerting for power and environmental conditions through the Power & Thermal Telemetries module.",
            bgColor: "bg-orange-50",
        },
    ];

    return (
        <section className="py-16">
            <div className="container xl:px-0 max-w-[1200px] px-4 md:px-6">
                <Heading
                    title={"Speed of Deployment"}
                    description={" Making Work Orders And Resourcing Effective"}
                />
                <div className="mb-12">
                    <motion.h3
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-2xl font-semibold my-8 text-center"
                    >
                        XpedITe Provides:
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", index * 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <Card
                                    key={index}
                                    className="transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] border-gray-100"
                                >
                                    <CardHeader className="pb-2">
                                        <div
                                            className={`p-3 ${feature.bgColor} rounded-lg w-fit`}
                                        >
                                            {feature.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <h4 className="text-lg font-semibold mb-2 line-clamp-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600 line-clamp-4">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeedDeployment;

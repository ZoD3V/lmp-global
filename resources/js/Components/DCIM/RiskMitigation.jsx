import {
    Clock,
    Workflow,
    BrainCircuit,
    PiggyBank,
    Battery,
    Eye,
    Lightbulb,
    Users,
    MonitorCheck,
    Calculator,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

export default function RiskMitigation() {
    const features = [
        {
            icon: <Clock className="h-10 w-10 text-amber-500" />,
            title: "Intelligent Commissioning",
            description:
                "Saves around 95% of resource time per MAC ticket, bringing deployment time down from days and weeks to hours and minutes.",
            bgColor: "bg-amber-50",
        },
        {
            icon: <Workflow className="h-10 w-10 text-blue-500" />,
            title: "Unlimited Integration",
            description:
                "Enables the full-stack functionality, real-time management and true integrated workflow.",
            bgColor: "bg-blue-50",
        },
        {
            icon: <BrainCircuit className="h-10 w-10 text-emerald-500" />,
            title: "Real-time Management",
            description:
                "Allows up-to-date information and enables better decision-making.",
            bgColor: "bg-emerald-50",
        },
        {
            icon: <PiggyBank className="h-10 w-10 text-purple-500" />,
            title: "Reduced Operating Cost",
            description: "From energy usage effectiveness and efficiency.",
            bgColor: "bg-purple-50",
        },
        {
            icon: <Battery className="h-10 w-10 text-rose-500" />,
            title: "Power Monitoring",
            description:
                "A view of the power draw and energy consumption of the IT and data centre assets.",
            bgColor: "bg-rose-50",
        },
        {
            icon: <Eye className="h-10 w-10 text-orange-500" />,
            title: "Enterprise Visibility",
            description:
                "Consistency and visibility across the enterprise and all of its data centres.",
            bgColor: "bg-orange-50",
        },
        {
            icon: <Lightbulb className="h-10 w-10 text-cyan-500" />,
            title: "Energy Efficiency",
            description:
                "A real-time view of energy consumption and energy efficiency of the data centre.",
            bgColor: "bg-cyan-50",
        },
        {
            icon: <Users className="h-10 w-10 text-violet-500" />,
            title: "Cross-functional Support",
            description:
                "Supports both IT and facilities managers in making informed decisions on energy usage, capacity management, and operational optimization.",
            bgColor: "bg-violet-50",
        },
        {
            icon: <MonitorCheck className="h-10 w-10 text-teal-500" />,
            title: "Complete Visibility",
            description:
                "Full visibility in terms of monitor, manage and control IT and electro-mechanical devices for better utilisation of capacity.",
            bgColor: "bg-teal-50",
        },
        {
            icon: <Calculator className="h-10 w-10 text-pink-500" />,
            title: "Cost Calculation",
            description:
                "The ability to calculate the cost of delivering individual services from the data centre.",
            bgColor: "bg-pink-50",
        },
    ];

    return (
        <section className="py-16">
            <div className="container xl:px-0 max-w-[1200px] px-4 md:px-6">
                <Heading
                    title={"Risk Mitigation"}
                    description={
                        "From Capacity To Optimum Uptime And Service Continuity"
                    }
                />
                <div className="mb-12">
                    <motion.h3
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-2xl font-semibold mb-8 text-center"
                    >
                        Xpedite offers:
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
                                <Card className="transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] border-gray-100 min-h-[250px]">
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
                                        <p className="text-gray-600">
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
}

import { Eye, Gauge, AlertTriangle } from "lucide-react";
import expeditePlatform from "../../../../public/images/xpedite-platform.png";
import Heading from "../Common/Heading";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

export default function XPediTePlatform() {
    return (
        <section className="w-full bg-white py-16 overflow-hidden">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] mx-auto relative">
                {/* Background elements */}
                <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-purple-50 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-orange-50 rounded-full opacity-30 blur-3xl"></div>

                {/* Header */}
                <div className="relative mb-20 max-w-3xl mx-auto text-center">
                    <motion.span
                        initial="hidden"
                        whileInView="show"
                        variants={textVariant(0.2)}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-medium text-purple-600 tracking-wider uppercase mb-3"
                    >
                        Intelligent Infrastructure Management
                    </motion.span>
                    <Heading
                        title={"XPediTe Platform"}
                        description={
                            "The only unified solution that connects infrastructure and network in one platform with real-time automation."
                        }
                    />
                </div>

                {/* Main content */}
                <div className="grid gap-6 xl:grid-cols-2 lg:gap-12 pb-16 items-center">
                    <div className="flex flex-col justify-center space-y-4 order-2 xl:order-1">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                Beyond DCIM — From Passive to Proactive
                            </h2>
                            <p className="text-slate-500 md:text-lg">
                                XPediTe is the only system in the market which
                                gives our clients a solution that connects
                                infrastructure and network in one platform,
                                while fully automating and optimising its daily
                                operation.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-500 md:text-lg">
                                In fact, no other provider can fully integrate
                                your physical facilities with your IT
                                infrastructure. XPediTe provides 100% real time,
                                accurate data to empower your whole team to
                                collaborate and achieve your commercial goals.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-500 md:text-lg">
                                Deployed in several verticals throughout the
                                world, XPediTe helps our clients to seamlessly
                                unite their infrastructure, network, assets and
                                resources under a single easy-to-monitor and
                                easy-to-control management system.
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl order-1 xl:order-2">
                        <img
                            src={expeditePlatform}
                            alt="XPediTe Platform Architecture"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {featureCards.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", index * 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative border border-gray-100 bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)]"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <div
                                    className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6`}
                                >
                                    <feature.icon
                                        className={`h-7 w-7 ${feature.iconColor}`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const featureCards = [
    {
        title: "VISIBILITY",
        description:
            "Giving you accurate information so you can manage your estate & resource remotely with complete confidence and clarity.",
        icon: Eye,
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "Speed of Deployment",
        description:
            "Making work orders and resourcing effective with streamlined processes and automated workflows.",
        icon: Gauge,
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        title: "Risk Mitigation",
        description:
            "From capacity to optimum uptime and service continuity, ensuring your operations remain resilient and reliable.",
        icon: AlertTriangle,
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
    },
];

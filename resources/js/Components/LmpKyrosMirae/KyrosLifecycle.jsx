import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Zap, Activity, Shield } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KyrosLifecycle = () => {
    const [activeTab, setActiveTab] = useState("design");

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="w-full bg-white text-gray-900 py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Data Center Lifecycle Management
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive approach to optimizing data centers
                        throughout their entire lifecycle
                    </p>
                </motion.div>

                <Tabs
                    defaultValue="design"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-100 rounded-lg p-1 mb-8">
                        <TabsTrigger
                            value="design"
                            className={cn(
                                "data-[state=active]:bg-blue-500 data-[state=active]:text-white",
                                "text-blue-600 hover:text-blue-800 transition-all"
                            )}
                        >
                            <Server className="w-5 h-5 mr-2" />
                            <span>Design</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="validation"
                            className={cn(
                                "data-[state=active]:bg-blue-500 data-[state=active]:text-white",
                                "text-blue-600 hover:text-blue-800 transition-all"
                            )}
                        >
                            <Shield className="w-5 h-5 mr-2" />
                            <span>Validation</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="operation"
                            className={cn(
                                "data-[state=active]:bg-blue-500 data-[state=active]:text-white",
                                "text-blue-600 hover:text-blue-800 transition-all"
                            )}
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            <span>Operation</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="maintenance"
                            className={cn(
                                "data-[state=active]:bg-blue-500 data-[state=active]:text-white",
                                "text-blue-600 hover:text-blue-800 transition-all"
                            )}
                        >
                            <Activity className="w-5 h-5 mr-2" />
                            <span>Maintenance</span>
                        </TabsTrigger>
                    </TabsList>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TabsContent value="design" className="mt-0">
                            <Card className="bg-white border-gray-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl md:text-3xl text-gray-900">
                                        Design
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Creating efficient digital models before
                                        physical implementation
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Construct digital native models
                                            </span>{" "}
                                            from the initial design phase
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Fluid dynamics and
                                                thermodynamics analysis
                                            </span>{" "}
                                            for energy consumption optimization
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Energy consumption analysis
                                            </span>{" "}
                                            to identify potential inefficiencies
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Automated generation of digital
                                                native models
                                            </span>{" "}
                                            using generative AI
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Predictive modeling
                                            </span>{" "}
                                            for capacity planning and future
                                            scaling
                                        </FeatureItem>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="validation" className="mt-0">
                            <Card className="bg-white border-gray-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl md:text-3xl text-gray-900">
                                        Validation
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Ensuring efficiency metrics meet
                                        industry standards
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Power Usage Effectiveness (PUE)
                                            </span>{" "}
                                            validation
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Water Usage Effectiveness (WUE)
                                            </span>{" "}
                                            validation
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Carbon Usage Effectiveness (CUE)
                                            </span>{" "}
                                            validation
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Data Center Infrastructure
                                                Efficiency (DCIE)
                                            </span>{" "}
                                            validation
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Data Center Power Density (DCPD)
                                            </span>{" "}
                                            validation
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Space Utilization Rate (SUR)
                                            </span>{" "}
                                            validation
                                        </FeatureItem>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="operation" className="mt-0">
                            <Card className="bg-white border-gray-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl md:text-3xl text-gray-900">
                                        Operation
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Real-time monitoring and optimization
                                        during active use
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Availability testing and
                                                assessment
                                            </span>{" "}
                                            for continuous uptime
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                What-if simulation
                                            </span>{" "}
                                            for scenario planning and risk
                                            mitigation
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Real-time energy efficiency
                                            </span>{" "}
                                            evaluation and optimization
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Real-time thermal safety
                                            </span>{" "}
                                            management and prevention
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Real-time energy-saving
                                            </span>{" "}
                                            and consumption reduction
                                            optimization
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Load balancing
                                            </span>{" "}
                                            for optimal resource utilization
                                        </FeatureItem>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="maintenance" className="mt-0">
                            <Card className="bg-white border-gray-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl md:text-3xl text-gray-900">
                                        Maintenance
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Proactive management to prevent issues
                                        before they occur
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Asset management
                                            </span>{" "}
                                            with predictive maintenance
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Risk control
                                            </span>{" "}
                                            through continuous monitoring
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Early threat detection
                                            </span>{" "}
                                            using AI-powered analytics
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Automated maintenance scheduling
                                            </span>{" "}
                                            based on usage patterns
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Component lifecycle tracking
                                            </span>{" "}
                                            for timely replacements
                                        </FeatureItem>
                                        <FeatureItem>
                                            <span className="font-semibold">
                                                Sustainability reporting
                                            </span>{" "}
                                            and environmental impact assessment
                                        </FeatureItem>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </motion.div>
                </Tabs>
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

export default KyrosLifecycle;

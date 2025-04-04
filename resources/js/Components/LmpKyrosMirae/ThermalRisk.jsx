import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Zap, LineChart, Settings, Database, Leaf } from "lucide-react";
import thermalRisk1 from "../../../../public/images/thermal-risk-1.png";
import thermalRisk2 from "../../../../public/images/thermal-risk-2.png";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const ThermalRisk = () => {
    return (
        <section className="py-16 px-4 md:px-6 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>Heat Map Visualization</CardTitle>
                            <CardDescription>
                                Real-time thermal monitoring and analysis
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <img
                                    src={thermalRisk1}
                                    alt="Data Center Heat Map"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Heat Map Visualization
                                    </h3>
                                    <p className="text-gray-600">
                                        Comprehensive heat maps provide visual
                                        temperature distribution insights,
                                        allowing an intuitive understanding of
                                        thermal patterns and potential risk
                                        areas.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Scenario Planning
                                    </h3>
                                    <p className="text-gray-600">
                                        Evaluate heat maps and thermal data
                                        before implementation on-site, making
                                        informed decisions during server rack
                                        additions or decommissioning and
                                        adjusting cooling control policies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Detailed Assessment
                                    </h3>
                                    <p className="text-gray-600">
                                        View various level heights of thermal
                                        information for a detailed assessment.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Card className="bg-black text-gray-300">
                        <CardHeader>
                            <CardTitle className="text-white">
                                Energy Management Dashboard
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Comprehensive energy monitoring and optimization
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <img
                                    src={thermalRisk2}
                                    alt="Data Center Heat Map"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-500 bg-opacity-20 rounded-xl">
                                        <Zap className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-white">
                                            Comprehensive Energy Metrics
                                        </h3>
                                        <p className="text-gray-400">
                                            Display essential metrics like PUE,
                                            CUE, cooling load, IT load,
                                            individual.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-green-500 bg-opacity-20 rounded-xl">
                                        <LineChart className="h-6 w-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-white">
                                            Holistic Operational Overview
                                        </h3>
                                        <p className="text-gray-400">
                                            Provides a holistic view of
                                            energy-related operations, aiding in
                                            day-to-day decision-making for
                                            optimal energy management.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-purple-500 bg-opacity-20 rounded-xl">
                                        <Settings className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-white">
                                            Customizable Metrics Selection
                                        </h3>
                                        <p className="text-gray-400">
                                            View various level heights of
                                            thermal information for a detailed
                                            assessment.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-orange-500 bg-opacity-20 rounded-xl">
                                        <Database className="h-6 w-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-white">
                                            Integration With DCIM
                                        </h3>
                                        <p className="text-gray-400">
                                            Seamlessly integrates with Data
                                            Center Infrastructure Management
                                            (DCIM) for live data retrieval and
                                            accurate real-time insights.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-emerald-500 bg-opacity-20 rounded-xl">
                                        <Leaf className="h-6 w-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 text-white">
                                            Green Mark / Leed Certification
                                        </h3>
                                        <p className="text-gray-400">
                                            Tracks key metrics for ensuring
                                            compliance with sustainability
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ThermalRisk;

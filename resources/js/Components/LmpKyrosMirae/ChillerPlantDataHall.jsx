import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Thermometer, Droplet, Wind, Gauge } from "lucide-react";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import chillerPlant from "../../../../public/images/chiller-plant.png";
import dataHall from "../../../../public/images/data-hall.png";

const ChillerPlantDataHall = () => {
    const [activeOptimization, setActiveOptimization] = useState("chiller");

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="py-16 px-4 md:px-6 xl:px-0">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Chiller Plant & Data Hall Optimisations
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Advanced cooling energy optimization solutions for
                        maximum efficiency and sustainability
                    </p>
                </div>

                <Tabs
                    defaultValue="chiller"
                    value={activeOptimization}
                    onValueChange={setActiveOptimization}
                    className="w-full"
                >
                    <TabsList className="grid grid-cols-2 bg-white rounded-lg p-1 mb-8 max-w-md mx-auto">
                        <TabsTrigger
                            value="chiller"
                            className={cn(
                                "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                                "hover:text-blue-600 transition-all bg-blue-50 text-blue-500"
                            )}
                        >
                            <Thermometer className="w-5 h-5 mr-2" />
                            <span>Chiller Plant</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="datahall"
                            className={cn(
                                "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                                "hover:text-blue-600 transition-all bg-blue-50 text-blue-500"
                            )}
                        >
                            <Server className="w-5 h-5 mr-2" />
                            <span>Data Hall</span>
                        </TabsTrigger>
                    </TabsList>

                    <motion.div
                    key={activeOptimization}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                        <TabsContent value="chiller" className="mt-0">
                            <div className="p-0">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Chiller Plant
                                            </h3>
                                            <h4 className="text-xl text-blue-600 font-semibold mb-6">
                                                Cooling Energy Optimization
                                            </h4>

                                            <div className="space-y-6">
                                                <div>
                                                    <h5 className="font-semibold text-lg mb-3">
                                                        Chiller Plant Side
                                                    </h5>
                                                    <ul className="space-y-3">
                                                        <ParameterItem
                                                            icon={
                                                                <Thermometer className="w-4 h-4" />
                                                            }
                                                        >
                                                            CW leaving
                                                            temperature (°C)
                                                        </ParameterItem>
                                                        <ParameterItem
                                                            icon={
                                                                <Thermometer className="w-4 h-4" />
                                                            }
                                                        >
                                                            CHW Supply
                                                            temperature (°C)
                                                        </ParameterItem>
                                                        <ParameterItem
                                                            icon={
                                                                <Droplet className="w-4 h-4" />
                                                            }
                                                        >
                                                            CHW/CW flowrate
                                                            (CMH)
                                                        </ParameterItem>
                                                        <ParameterItem
                                                            icon={
                                                                <Wind className="w-4 h-4" />
                                                            }
                                                        >
                                                            Frequency of fan
                                                            (HZ)
                                                        </ParameterItem>
                                                        <ParameterItem
                                                            icon={
                                                                <Gauge className="w-4 h-4" />
                                                            }
                                                        >
                                                            Frequency of pump
                                                            (HZ)
                                                        </ParameterItem>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h5 className="font-semibold text-lg mb-3">
                                                        Data Hall Side
                                                    </h5>
                                                    <ul className="space-y-3">
                                                        <ParameterItem
                                                            icon={
                                                                <Thermometer className="w-4 h-4" />
                                                            }
                                                        >
                                                            CRAC/CRAH air supply
                                                            temperature (°C)
                                                        </ParameterItem>
                                                        <ParameterItem
                                                            icon={
                                                                <Wind className="w-4 h-4" />
                                                            }
                                                        >
                                                            Frequency of fan
                                                        </ParameterItem>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 flex items-center justify-center">
                                        <div className="relative">
                                            <img
                                                src={chillerPlant}
                                                alt="Chiller Plant Cooling Energy Optimization"
                                                className="w-full h-full rounded-b-md md:rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="datahall" className="mt-0">
                            <div className="p-0">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Data Hall
                                            </h3>

                                            <div className="space-y-6">
                                                <div>
                                                    <h5 className="font-semibold text-lg mb-3">
                                                        Key Benefits
                                                    </h5>
                                                    <ul className="space-y-4">
                                                        <FeatureItem>
                                                            <span className="font-semibold">
                                                                Optimize
                                                            </span>{" "}
                                                            CRAC supply air temp
                                                            and fan speed to
                                                            ensure efficient
                                                            cooling and
                                                            minimizing energy
                                                            consumption
                                                        </FeatureItem>
                                                        <FeatureItem>
                                                            <span className="font-semibold">
                                                                Continuously
                                                                improvement
                                                            </span>{" "}
                                                            of the algorithms,
                                                            enhancing the
                                                            system's efficiency
                                                            and accuracy over
                                                            time based on
                                                            real-time
                                                            operational
                                                            conditions
                                                        </FeatureItem>
                                                        <FeatureItem>
                                                            <span className="font-semibold">
                                                                Tailors cooling
                                                                recommendations
                                                            </span>{" "}
                                                            comply to Service
                                                            Level Agreements
                                                            (SLAs) while
                                                            prioritizing energy
                                                            performance
                                                        </FeatureItem>
                                                        <FeatureItem>
                                                            <span className="font-semibold">
                                                                Allows
                                                                customization
                                                            </span>{" "}
                                                            of recommendations
                                                            based on operational
                                                            needs, offering
                                                            scheduling
                                                            preferences such as
                                                            daily, weekly, or
                                                            hourly adjustments
                                                        </FeatureItem>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 flex items-center justify-center">
                                        <div className="relative">
                                            <img
                                                src={dataHall}
                                                alt="Data Hall Cooling Energy Optimization"
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </motion.div>
                </Tabs>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Our cooling optimization solutions can reduce energy
                        consumption by up to 30% while maintaining optimal
                        operating conditions.
                    </p>
                </div>
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

function ParameterItem({ children, icon }) {
    return (
        <li className="flex items-center gap-3 text-gray-700">
            <div className="text-blue-600 flex-shrink-0">{icon}</div>
            <div>{children}</div>
        </li>
    );
}

export default ChillerPlantDataHall;

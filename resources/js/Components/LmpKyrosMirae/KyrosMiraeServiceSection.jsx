import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Brain,
    FlaskConical,
    Gauge,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const KyrosMiraeServiceSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-0">
                <div className="text-center mb-16">
                    <Badge className="mb-4 px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                        Comprehensive Support
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        The LMP Kyros Mirae comes with a suite of advanced
                        services designed to maximize performance and
                        reliability in your data center environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {/* Service 1 */}
                    <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:border-purple-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-purple-100"></div>

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-600 text-white shadow">
                                        <FlaskConical className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        1. Design Validation Service
                                    </h3>
                                </div>

                                <p className="text-purple-600 font-medium mb-3">
                                    CFD Empowered Validation
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    The LMP Kyros Mirae undergoes rigorous
                                    thermal validation through our proprietary
                                    Computational Fluid Dynamics (CFD) Engine
                                    analysis. This ensures optimal performance
                                    in your specific data center environment by
                                    simulating airflow, heat dissipation, and
                                    thermal behavior under various workloads.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-blue-100"></div>

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-600 text-white shadow">
                                        <BarChart3 className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        2. Monitoring Dashboard
                                    </h3>
                                </div>

                                <p className="text-blue-600 font-medium mb-3">
                                    Measure by Data, Manage to Meta
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    Each LMP Kyros Mirae module integrates with
                                    our digital-twin embedded monitoring system,
                                    providing real-time performance metrics
                                    through an intuitive dashboard. Track memory
                                    utilization, temperature, error rates, and
                                    power consumption with 3D visualization
                                    capabilities.
                                </p>

                            </div>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:border-amber-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-amber-100"></div>

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow">
                                        <Brain className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        3. AI Optimization
                                    </h3>
                                </div>

                                <p className="text-amber-600 font-medium mb-3">
                                    Harness the Power of Your Data
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    Our AI optimization module works with the
                                    Kyros Mirae to intelligently adjust memory
                                    timing parameters and power states based on
                                    workload patterns. This digital-twin secured
                                    technology identifies the most efficient
                                    operational profiles, dynamically
                                    fine-tuning performance.
                                </p>

                            </div>
                        </div>
                    </motion.div>

                    {/* Service 4 */}
                    <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:border-emerald-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-emerald-100"></div>

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow">
                                        <Gauge className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        4. What-if Simulation
                                    </h3>
                                </div>

                                <p className="text-emerald-600 font-medium mb-3">
                                    Get Data-Driven Insights
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    Before implementing the LMP Kyros Mirae in
                                    your production environment, our What-if
                                    Simulation engine helps you conduct
                                    comprehensive analysis and validation. Model
                                    different server configurations, workload
                                    scenarios, and scaling projections to
                                    understand performance impacts.
                                </p>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default KyrosMiraeServiceSection;

import React from "react";
import { fadeIn } from "../../utils/motion";
import Heading from "../Common/Heading";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Shield, Clock, Cpu, BarChart, Globe } from "lucide-react";
import researchImage from "../../../../public/images/researchdevelopment.png";

const ProfileSection = ({ lmp_profile }) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
    const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto py-16 flex flex-col gap-12 px-4 sm:px-6 xl:px-0"
        >
            <Heading
                title={"LMP Profile"}
                description={
                    "ivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.."
                }
            />
            <div
                ref={ref1}
                className="grid md:grid-cols-2 gap-8 items-center mb-24"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView1 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                        <Server className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700 font-medium">
                            Infrastructure Excellence
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {lmp_profile[0].title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        {lmp_profile[0].description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <Shield className="h-8 w-8 text-blue-600 mb-2" />
                            <h3 className="font-semibold text-slate-900">
                                Certified Quality
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">
                                All parts undergo rigorous testing and
                                certification
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <Clock className="h-8 w-8 text-orange-500 mb-2" />
                            <h3 className="font-semibold text-slate-900">
                                Rapid Delivery
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">
                                24-hour emergency shipping to minimize downtime
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView1 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-slate-200 rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src={researchImage}
                            alt="Data Center Infrastructure"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Section 2: Comprehensive Solutions */}
            <div
                ref={ref2}
                className="grid md:grid-cols-2 gap-8 items-center mb-24"
            >
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="relative order-2 md:order-1"
                >
                    <div className="absolute inset-0 bg-slate-200 rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src={researchImage}
                            alt="Comprehensive Data Center Solutions"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="space-y-6 order-1 md:order-2"
                >
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                        <Cpu className="h-5 w-5 text-purple-600" />
                        <span className="text-slate-700 font-medium">
                            Comprehensive Solutions
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {lmp_profile[1].title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        {lmp_profile[1].description}
                    </p>

                    <div className="space-y-4 pt-2">
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                <span className="h-6 w-6 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full text-sm">
                                    1
                                </span>
                                Obsolescence Management
                            </h3>
                            <p className="text-slate-600 mt-1 pl-8">
                                Access to hard-to-find and end-of-life
                                components, extending the lifespan of your
                                existing infrastructure
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                <span className="h-6 w-6 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full text-sm">
                                    2
                                </span>
                                Custom Inventory Programs
                            </h3>
                            <p className="text-slate-600 mt-1 pl-8">
                                Dedicated stock reserves tailored to your
                                specific equipment, ensuring immediate
                                availability when needed
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                <span className="h-6 w-6 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full text-sm">
                                    3
                                </span>
                                Technical Expertise
                            </h3>
                            <p className="text-slate-600 mt-1 pl-8">
                                Expert guidance on compatibility, installation,
                                and configuration from certified technicians
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 3: Global Reach & Sustainability */}
            <div ref={ref3} className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                        <Globe className="h-5 w-5 text-green-600" />
                        <span className="text-slate-700 font-medium">
                            Global Impact
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {lmp_profile[2].title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        {lmp_profile[2].description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <BarChart className="h-8 w-8 text-green-600 mb-2" />
                            <h3 className="font-semibold text-slate-900">
                                Cost Optimization
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">
                                Save 30-70% on maintenance costs while extending
                                equipment lifespan
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                            <Shield className="h-8 w-8 text-teal-600 mb-2" />
                            <h3 className="font-semibold text-slate-900">
                                Warranty Protection
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">
                                Comprehensive coverage with extended warranty
                                options on all parts
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-slate-200 rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src={researchImage}
                            alt="Sustainable Data Center Solutions"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 text-center"
            >
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                        50K+
                    </div>
                    <p className="text-slate-700">Parts in Inventory</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                        99.8%
                    </div>
                    <p className="text-slate-700">Fulfillment Rate</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                        24h
                    </div>
                    <p className="text-slate-700">Emergency Delivery</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                        100+
                    </div>
                    <p className="text-slate-700">Countries Served</p>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default ProfileSection;

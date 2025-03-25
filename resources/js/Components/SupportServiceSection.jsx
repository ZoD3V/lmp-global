import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Server, Users, Lightbulb } from "lucide-react";

const SupportServiceSection = () => {
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
                damping: 15,
            },
        },
    };

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto flex flex-col w-full justify-center max-w-6xl"
        >
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                                <span>Core Services</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Comprehensive Data Center{" "}
                                <span className="text-blue-600">Solutions</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our specialized services ensure your data center
                                operates at peak efficiency with minimal
                                downtime.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Service Card 1 */}
                            <motion.div
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-blue-100"></div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md transform transition-transform group-hover:rotate-3 group-hover:scale-110">
                                        <Server className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                        Technical Support
                                    </h3>
                                </div>
                            </motion.div>

                            {/* Service Card 2 */}
                            <motion.div
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-rose-100"></div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md transform transition-transform group-hover:rotate-3 group-hover:scale-110">
                                        <Users className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                        Consultant products
                                    </h3>
                                </div>
                            </motion.div>

                            {/* Service Card 3 */}
                            <motion.div
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-teal-100"></div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md transform transition-transform group-hover:rotate-3 group-hover:scale-110">
                                        <Lightbulb className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                        Consultant Data Center
                                    </h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default SupportServiceSection;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { RiShieldFlashFill } from "react-icons/ri";
import { LuSquareActivity } from "react-icons/lu";
import { BiSolidZap } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";

const VoltsSection = ({ voltsData }) => {
    const features = [
        {
            title: "Extreme Voltage & Surge Protection",
            description:
                "Protects your device from voltage that exceeds the device's capability limit (>250 Volts) and provides dampening when a shock voltage (Surge) occurs.",
            icon: RiShieldFlashFill,
            iconColor: "text-emerald-500",
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-200",
        },
        {
            title: "Voltage Stabilizer",
            description:
                "Corrects the voltage of the electric current entering the device so that it remains normal according to the standard (220 V).",
            icon: LuSquareActivity,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            title: "Grounding Improvement",
            description:
                "Corrects the electronic grounding value according to standard (< 1 Volt).",
            icon: BiSolidZap,
            iconColor: "text-amber-500",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
        },
        {
            title: "Noise Filtration",
            description:
                "Filters electrical quality disturbances in the form of NOISE or voltage disturbances caused by electromagnetic fields.",
            icon: IoWifi,
            iconColor: "text-purple-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
        },
    ];

    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col col-span-2 gap-4 custom-rich-editor"
            >
                <div
                    style={{
                        display: "block",
                        listStyleType: "auto",
                    }}
                    className="text-justify"
                    dangerouslySetInnerHTML={{
                        __html: voltsData[0].desc,
                    }}
                />
            </motion.div>

            <div className="">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Advanced Protection Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl p-6 transition-all duration-300 border ${feature.borderColor} ${feature.bgColor}`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`p-3 rounded-lg ${feature.bgColor} border ${feature.borderColor}`}
                                >
                                    <feature.icon
                                        className={`w-8 h-8 ${feature.iconColor}`}
                                    />
                                </div>

                                <div className="flex flex-col items-start justify-start gap-2">
                                    <motion.h3
                                        variants={textVariant(0.3)}
                                        viewport={{ once: true }}
                                        className="text-xl font-manrope font-semibold text-gray-900"
                                    >
                                        {" "}
                                        {feature.title}
                                    </motion.h3>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoltsSection;

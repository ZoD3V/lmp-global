import React from "react";
import { Badge } from "../ui/badge";
import digitalImage from "../../../../public/images/digital-twin.png";
import Heading from "../Common/Heading";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const CoreTechnology = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto max-w-[1200px] px-4 md:px-6 xl:px-0">
                <div className="text-center mb-12">
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 px-3 py-1 bg-red-900 text-red-100 hover:bg-red-800 transition-colors">
                            Innovation
                        </Badge>
                    </motion.div>
                    <Heading
                        title={"Core Technology"}
                        description={
                            "Digital Twins Based, AI Driven, Award Winning, Industry Validated"
                        }
                        customClass="text-white"
                    />
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-2xl blur-md opacity-30"></div>
                    <div className="relative bg-slate-800 md:p-4 rounded-xl shadow-2xl border border-slate-700">
                        {/* 16:9 aspect ratio image */}
                        <motion.div
                            variants={fadeIn("down", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-lg"
                        >
                            <img
                                src={digitalImage}
                                alt="LMP Kyros Mirae Technology Framework"
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreTechnology;

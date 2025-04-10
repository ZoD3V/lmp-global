import React from "react";
import { fadeIn } from "@/utils/motion";
import Heading from "../Common/Heading";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import researchImage from "../../../../public/images/researchdevelopment.png";

const ProfileSection = ({ lmp_profile }) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
    const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

    return (
        <section className="">
            <motion.div
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            {lmp_profile[0].title}
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            {lmp_profile[0].description}
                        </p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            {lmp_profile[1].title}
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            {lmp_profile[1].description}
                        </p>
                    </motion.div>
                </div>

                {/* Section 3: Global Reach & Sustainability */}
                <div
                    ref={ref3}
                    className="grid md:grid-cols-2 gap-8 items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            {lmp_profile[2].title}
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            {lmp_profile[2].description}
                        </p>
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
            </motion.div>
        </section>
    );
};

export default ProfileSection;

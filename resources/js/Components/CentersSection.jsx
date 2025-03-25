import React from "react";
import Heading from "./Common/Heading";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, ArrowRight, Globe } from "lucide-react";
import researchImage from "../../../public/images/researchdevelopment.png";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";

const CentersSection = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
    const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-white max-w-[1200px] flex flex-col gap-12 container mx-auto px-4 sm:px-6 xl:px-0">
            <Heading
                title={"Our Centers"}
                description={
                    " As a Web Development Services, We are Committed to Building Custom Web Solutions that Drive Business Success."
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
                        Training & Learning Center
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Our training and development courses can advance skills
                        and technical knowledge in both industry best practices
                        and LMP products, to help realize the full potential of
                        your IT infrastructure or facilities. Standard or
                        specialized trainings can take place at LMP Learning or
                        at your location upon request.
                    </p>
                    <motion.div>
                        <Button variant="theme" size="lg">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
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

            {/* Section 3: Global Reach & Sustainability */}
            <div ref={ref3} className="grid md:grid-cols-2 gap-8 items-center">
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
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                        <Globe className="h-5 w-5 text-green-600" />
                        <span className="text-slate-700 font-medium">
                            Design & Collaboration
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Design & Collaboration Center
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Our team can collaborate with your team to create
                        effective and innovative design solutions that structure
                        and optimize the design process for better results.
                    </p>
                    <motion.div>
                        <Button variant="theme" size="lg" asChild>
                            <Link href="/login">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CentersSection;

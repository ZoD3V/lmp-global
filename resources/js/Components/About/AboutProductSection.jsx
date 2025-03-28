import React from "react";
import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Heading from "../Common/Heading";

const AboutProductSection = ({ dataProduct }) => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="w-full py-16 overflow-hidden">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <Heading
                        title={"Data Center Solutions"}
                        description={
                            "Premium components and spare parts engineered for maximum performance, reliability, and efficiency in modern data center environments."
                        }
                    />
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {dataProduct.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 50 }
                            }
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                                delay: index * 0.1,
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group"
                        >
                            <div className="h-full bg-white dark:bg-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={`/storage/${category.image}`}
                                        alt={category.name}
                                        fill="none"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />


                                    <div className="absolute bottom-0 left-0 p-5 w-full">
                                        <h3 className="text-white font-bold text-2xl mb-2">
                                            {category.name}
                                        </h3>
                                        <div className="w-12 h-1 bg-white rounded-full opacity-80" />
                                    </div>
                                </div>

                                <div className="p-5">
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 font-light line-clamp-3">
                                        {category.desc}
                                    </p>

                                    <Link
                                        href={category.link || "/product"}
                                        className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300"
                                    >
                                        <span>Explore Products</span>
                                        <motion.div
                                            animate={{
                                                x:
                                                    hoveredCard === index
                                                        ? 5
                                                        : 0,
                                                opacity:
                                                    hoveredCard === index
                                                        ? 1
                                                        : 0.7,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProductSection;

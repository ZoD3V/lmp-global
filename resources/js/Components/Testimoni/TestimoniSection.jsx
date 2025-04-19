import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "../Common/Heading";

const TestimoniSection = ({ useCases }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    return (
        <section ref={containerRef} className="py-16 px-4 md:px-6 xl:px-0">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25px 25px, black 2%, transparent 0%)",
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Animated Gradient Blobs */}
                <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl animate-blob" />
                <div className="absolute top-3/4 -right-64 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-200/20 blur-3xl animate-blob animation-delay-4000" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="max-w-[1200px] mx-auto relative z-10"
            >
                {/* Section Intro */}

                <div className="mb-12 text-center">
                    <Heading
                        title={useCases.title}
                        description={useCases.description}
                    />
                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {useCases.useCases.map((useCase, index) => (
                        <motion.div
                            key={`${useCase.name}-logo`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="relative"
                        >
                            <div
                                className={`w-32 h-32 relative flex items-center justify-center p-5 rounded-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-blue-200 hover:border-2`}
                            >
                                <img
                                    src={useCase.logo || "/placeholder.svg"}
                                    alt={`${useCase.name} logo`}
                                    width={110}
                                    height={110}
                                    className="object-contain transition-all duration-500"
                                    style={{
                                        filter: "saturate(0.9) brightness(1.05)",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {useCases.useCases.flatMap((useCase, useCaseIndex) =>
                        useCase.testimoni.map((testimoni, testimoniIndex) => (
                            <motion.div
                                key={`${useCase.name}-${testimoniIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay:
                                        0.15 * (useCaseIndex + testimoniIndex),
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden transition-all duration-500 aspect-[3/4] rounded-xl border border-slate-100 hover:border-blue-200 hover:border-2"
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={testimoni.img}
                                        alt={`${testimoni.name} testimonial ${
                                            testimoniIndex + 1
                                        }`}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                    <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {testimoni.name}
                                        </h3>
                                        <div className="w-12 h-1 bg-blue-400 mt-4 rounded-full opacity-70 transition-all duration-300 group-hover:w-24" />
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default TestimoniSection;

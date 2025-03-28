import React from "react";
import { fadeIn } from "../../utils/motion";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutGreeting = () => {
    const refHero = useRef(null);
    const isInViewHero = useInView(refHero, { once: true });

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-12 w-full justify-center"
        >
            <div
                ref={refHero}
                className="flex flex-col items-center justify-center text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative w-64 h-64"
                >
                    {/* Inti Atom di Tengah */}
                    <motion.div
                        className="absolute inset-0 m-auto w-12 h-12 bg-black rounded-full shadow-xl shadow-blue-500/30 z-10"
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Orbit 1 - Horizontal */}
                    <motion.div
                        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-slate-200/20 rounded-full"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full shadow-md shadow-blue-500/30"
                            animate={{
                                rotate: -360, // Counter-rotation
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.div>
                    {/* Orbit 1 - Horizontal */}

                    <motion.div
                        className="absolute left-[12%] top-[12%] translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-slate-200/20 rounded-full"
                        animate={{
                            rotate: -360, // Rotasi berlawanan arah jarum jam
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full shadow-md shadow-blue-500/30"
                            animate={{
                                rotate: 360, // Counter-rotation untuk menjaga orientasi elektron
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.div>

                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-medium text-slate-800 max-w-3xl leading-relaxed"
                >
                    At LMP we design and manufacture all the solutions by
                    considering and putting forward
                    <span className="text-green-600 font-semibold">
                        {" "}
                        environmental sustainability
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInViewHero ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-px w-24 bg-slate-300 mt-12"
                />
            </div>
        </motion.section>
    );
};

export default AboutGreeting;

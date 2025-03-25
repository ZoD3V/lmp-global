import React from "react";
import { Cpu, Gauge, Thermometer } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const iconAnimation = {
    hidden: { scale: 0, rotate: -10 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
        },
    },
};

function AirConditioning() {
    return (
        <section className="w-full py-12 md:py-24 bg-background">
            <div className="max-w-[1200px] container px-4 md:px-6 xl:px-0">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <div className="space-y-2">
                        <motion.h2
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Why Precision Air Conditioning Matters
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Unlike conventional systems, PACs provide exact
                            temperature and humidity control within extremely
                            narrow ranges, ensuring optimal performance of
                            sensitive equipment.
                        </motion.p>
                    </div>
                </motion.div>
                <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <ul className="grid gap-6">
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600"
                                    variants={iconAnimation}
                                >
                                    <Thermometer className="h-5 w-5" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Precise Temperature Control
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Maintains temperature within ±0.5°C,
                                        preventing hotspots and equipment
                                        failures that can lead to costly
                                        downtime.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600"
                                    variants={iconAnimation}
                                >
                                    <Gauge className="h-5 w-5" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Humidity Regulation
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Controls humidity levels between 40-60%,
                                        eliminating static electricity risks and
                                        preventing moisture-related damage to
                                        sensitive components.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600"
                                    variants={iconAnimation}
                                >
                                    <Cpu className="h-5 w-5" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Equipment Longevity
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Extends the lifespan of servers and
                                        network equipment by up to 40% through
                                        consistent environmental conditions,
                                        reducing capital expenditure.
                                    </p>
                                </div>
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/placeholder.svg?height=400&width=600"
                            width={600}
                            height={400}
                            alt="Data center server room with cooling equipment"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AirConditioning;

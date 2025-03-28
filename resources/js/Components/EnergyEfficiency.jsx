import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Leaf, Server, BarChart2 } from "lucide-react";
import  Lmp_Pad  from "../../../public/images/lmp_pac2.png";

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

function EnergyEfficiency() {
    return (
        <section className="w-full py-16">
            <div className="max-w-[1200px] container px-4 md:px-6 xl:px-0">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Energy Efficiency Solutions
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our systems are designed to maximize cooling
                            performance while minimizing energy consumption.
                        </p>
                    </div>
                </motion.div>
                <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600"
                                    variants={iconAnimation}
                                >
                                    <Leaf className="h-5 w-5" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        R410A Green Refrigerant
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Environmentally friendly refrigerant
                                        with zero ozone depletion potential,
                                        helping data centers meet sustainability
                                        goals while reducing regulatory risks.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600"
                                    variants={iconAnimation}
                                >
                                    <Server className="h-5 w-5" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Standard Rack Compatibility
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Seamlessly integrates with standard rack
                                        sizes to form efficient hot/cold aisle
                                        containment, reducing cooling costs by
                                        up to 30% through optimized airflow
                                        management.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600"
                                    variants={iconAnimation}
                                >
                                    <BarChart2 className="h-5 w-5" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Inverter Compressor Technology
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Industry-leading inverter compressors
                                        maintain precise temperatures while
                                        consuming up to 40% less energy during
                                        low-load periods, dramatically reducing
                                        operational expenses.
                                    </p>
                                </div>
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={Lmp_Pad}
                            width={500}
                            height={400}
                            alt="Energy efficiency graph showing temperature control"
                            className="rounded-lg object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default EnergyEfficiency;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Lmp_Pad from "../../../public/images/lmp_pac2.png";
import Button from "./Common/Button";

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

function IntelligentControlSystems() {
    return (
        <section className="w-full py-16 bg-background">
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
                            Intelligent Control Systems
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Advanced monitoring and control capabilities that
                            ensure optimal performance and rapid response to
                            changing conditions.
                        </p>
                    </div>
                </motion.div>
                <div className="grid gap-6 pt-12 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={Lmp_Pad}
                            width={600}
                            height={400}
                            alt="Intelligent control system interface"
                            className="rounded-lg object-cover"
                        />
                    </motion.div>
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
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600"
                                    variants={iconAnimation}
                                >
                                    <div className="font-bold">1</div>
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Smart Sensor Network
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Industry-leading sensor arrays provide
                                        real-time environmental data, enabling
                                        proactive adjustments that prevent
                                        equipment stress before problems occur.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600"
                                    variants={iconAnimation}
                                >
                                    <div className="font-bold">2</div>
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Digital Component Control
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Precision digital control of all major
                                        components allows for flexible
                                        adjustments based on workload patterns,
                                        reducing wear and extending equipment
                                        life.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
                                    variants={iconAnimation}
                                >
                                    <div className="font-bold">3</div>
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Comprehensive Monitoring
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Stores 1000+ alarm records and 7-day
                                        history of pressure and temperature
                                        curves, enabling trend analysis that
                                        helps prevent future failures and
                                        optimize maintenance schedules.
                                    </p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start gap-4"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-600"
                                    variants={iconAnimation}
                                >
                                    <div className="font-bold">4</div>
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="font-bold">
                                        Remote Management
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Built-in web server with support for
                                        multiple protocols
                                        (Web/SNMP/Modbus/BACnet) allows for
                                        seamless integration with existing
                                        building management systems and remote
                                        monitoring.
                                    </p>
                                </div>
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:ml-auto col-span-2"
                    >
                        <Button
                            buttonText="All Product"
                            buttonLink={"/product"}
                            showArrow={true}
                            outline={true}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default IntelligentControlSystems;

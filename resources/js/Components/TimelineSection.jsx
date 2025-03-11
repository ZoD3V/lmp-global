import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const TimelineSection = () => {
    const data = [
        {
            title: "Event Title",
            date: "2018 October",
            description: "MTE Established in Bekasi, West Java Indonesia.",
        },
        {
            title: "Event Title",
            date: "2019 October",
            description:
                "Established Fiber Optic Assembling Plant & Launch LMP Networks Fiber Optic Patchcord MPO Manageable. The 1st Manageable MPO that produce in Indonesia. Support By Global Manufactures.",
        },
        {
            title: "Event Title",
            date: "2021 October",
            description:
                "Launch LMP Ultra High Density Enclosure Solution for Hyperscale Data Center. Pointed Two Authorized Distributor.",
        },
        {
            title: "Event Title",
            date: "2022 October",
            description:
                "Launch LMP Network Cooper cable, Smart Patch Panel (Fiber & Cooper) & DCIM, AIO Container DC. Pointed Five Authorized Distributor.",
        },
        {
            title: "Event Title",
            date: "2023 October",
            description:
                "Launch LMP Cooling System, Ups, Cold Aisle Containment & Hot Aisle Containment.",
        },
    ];

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto py-16 my-12"
        >
            <motion.div
                variants={fadeIn("up", 0.3)}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <motion.h2
                    variants={textVariant(0.2)}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4"
                >
                    LMP History
                </motion.h2>
                <motion.p
                    variants={fadeIn("up", 0.4)}
                    viewport={{ once: true }}
                    className="text-gray-600"
                >
                    When you resell besnik, you build trust and increase
                </motion.p>
            </motion.div>
            <div className="row example-centered">
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul className="timeline timeline-centered">
                        {data.map((item, index) => (
                            <motion.li
                                key={index}
                                className="timeline-item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <div className="timeline-info">
                                    <span>{item.date}</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <motion.div
                                    className="timeline-content text-slate-600"
                                    variants={textVariant}
                                >
                                    <p>{item.description}</p>
                                </motion.div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default TimelineSection;

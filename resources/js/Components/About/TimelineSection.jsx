import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Heading from "../Common/Heading";

const TimelineSection = ({ timeline }) => {
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto py-16 flex flex-col gap-10"
        >
            <Heading title={"LMP History"} />
            <div className="row example-centered">
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul className="timeline timeline-centered">
                        {timeline.map((item, index) => (
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

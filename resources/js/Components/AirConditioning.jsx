import React from "react";
import { Cpu, Gauge, Thermometer } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Heading from "./Common/Heading";
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
        <section className="w-full py-16 bg-background">
            <div className="max-w-[1200px] container px-4 md:px-6 xl:px-0">
                <div className="mx-auto grid items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-4 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <p className="text-lg/relaxed text-justify">
                            Precision Air Conditioning (PAC) is an air cooling
                            system designed to provide very precise temperature
                            control in a room. These systems are typically used
                            in environments where temperature and humidity must
                            be strictly maintained, such as data centers,
                            laboratories, server rooms, or other areas that
                            require stable environmental conditions.
                        </p>
                        <p className="text-lg/relaxed text-justify">
                            Unlike conventional air conditioning systems that
                            may only focus on maintaining the general
                            temperature in a room, PACs are designed to provide
                            very precise temperature regulation. This can
                            include the ability to control temperature within a
                            very small range, often within degrees Celsius.
                            Apart from that, PACs can also be equipped with
                            features to maintain humidity and clean the air.
                        </p>
                        <p className="text-lg/relaxed text-justify">
                            By providing very precise control over indoor
                            environmental conditions, Precision Air Conditioning
                            helps maintain the performance and reliability of
                            electronic equipment and systems that are very
                            sensitive to changes in temperature and humidity.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AirConditioning;

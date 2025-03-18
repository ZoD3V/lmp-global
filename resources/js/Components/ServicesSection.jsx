import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Feature from "./Common/Feature";

const ServicesSection = (props) => {
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto flex flex-col w-full justify-center py-16"
        >
            <Feature features={props.features} />
        </motion.section>
    );
};

export default ServicesSection;

import React from "react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const LogoBrandSection = ({ logo, customClass = "" }) => {
    return (
        <section
            className={`container px-4 md:px-6 xl:px-0 max-w-[1200px] pt-16 mx-auto ${customClass}`}
        >
            <div className={`w-full h-full flex items-center justify-center`}>
                <motion.img
                    variants={fadeIn("up", 0.3)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: true }}
                    src={logo}
                    alt="Logo brand"
                    className={`w-52 h-fit object-contain object-center`}
                />
            </div>
        </section>
    );
};

export default LogoBrandSection;

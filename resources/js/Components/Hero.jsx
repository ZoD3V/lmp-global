import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = ({
    title,
    description,
    banner,
    showButton,
    buttonText,
    buttonLink,
}) => {
    return (
        <section
            id="home"
            className="h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed relative z-20"
            style={{
                backgroundImage: `url('/storage/${banner[0].image}')`,
            }}
        >
            <div className="max-w-[1200px] mx-auto h-full flex items-center justify-center xl:justify-start px-4 sm:px-6 xl:px-0">
                <motion.div
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-[567px] flex flex-col items-center text-center xl:text-left xl:items-start text-white z-10 gap-8"
                >
                    <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none font-bold tracking-wide">
                        {title}
                    </h1>
                    <p className="font-light text-gray-100/90 xl:text-xl">
                        {description}
                    </p>

                    {showButton && (
                        <motion.button
                            variants={fadeIn("left", 0.3)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            className="px-6 duration-300 text-white bg-blue-600 py-3 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all mx-auto xl:mx-0 flex items-center gap-2"
                        >
                            <a href={buttonLink}>{buttonText}</a>
                        </motion.button>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

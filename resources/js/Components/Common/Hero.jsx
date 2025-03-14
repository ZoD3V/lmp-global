import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { HiArrowRight } from "react-icons/hi2";

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
            className="h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed relative xl:rounded-bl-[290px] z-20"
            style={{
                backgroundImage: `url('/storage/${banner[0].image}')`,
            }}
        >
            <div className="max-w-[1200px] mx-auto h-full flex items-center justify-center xl:justify-start px-4 sm:px-6 xl:px-0">
                <div className="w-[567px] flex flex-col items-center text-center xl:text-left xl:items-start text-white z-10 gap-8">
                    <motion.h1
                        variants={textVariant(0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl xl:text-7xl leading-none font-bold tracking-wide"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        variants={textVariant(0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="font-light text-gray-100/90 xl:text-xl"
                    >
                        {description}
                    </motion.p>

                    {showButton && (
                        <motion.button
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 duration-300 text-white bg-blue-600 py-3 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all mx-auto xl:mx-0 flex items-center gap-2"
                        >
                            <a href={buttonLink}>{buttonText}</a>
                            <HiArrowRight />
                        </motion.button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

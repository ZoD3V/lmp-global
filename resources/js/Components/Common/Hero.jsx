import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Button } from "../ui/button";
import { IoIosArrowForward } from "react-icons/io";

const Hero = ({ title, description, banner, showButton }) => {
    return (
        <section
            id="home"
            className="h-[640px] xl:h-[740px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed relative xl:rounded-bl-[290px] z-20"
            style={{
                backgroundImage: `url('/storage/${banner[0].image}')`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-20 xl:rounded-bl-[290px]"></div>
            <div className="max-w-[1200px] container px-4 md:px-6 xl:px-0 h-full flex items-center justify-center xl:justify-start">
                <div className="w-[567px] flex flex-col items-center text-center xl:text-left xl:items-start z-10 gap-8">
                    <motion.h1
                        variants={textVariant(0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl leading-none font-bold tracking-wide text-white"
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
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Button variant="theme">
                                See All Product
                                <IoIosArrowForward />
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

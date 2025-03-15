import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const cuztomize = [
    {
        id: 1,
        title: "Edge Data Center",
        sub_title: "Customize your edge computing with LMP global solutions",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
        id: 2,
        title: "Edge Data Center",
        sub_title: "Customize your edge computing with LMP global solutions",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
        id: 3,
        title: "Micro Data Center",
        sub_title: "LMP micro data centers tailored for your needs",
        text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
        id: 4,
        title: "Edge Data Center",
        sub_title:
            "Leverage LMP global solutions for customized cable landing stations",
        text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
        id: 5,
        title: "Edge Data Center",
        sub_title: "Edge Data Center",
        text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
        id: 6,
        title: "Edge Data Center",
        sub_title: "Edge Data Center",
        text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
];

const CustomizeSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 xl:px-0 max-w-[1200px] mx-auto container my-12">
            <motion.div
                variants={fadeIn("up", 0.3)}
                className="text-center mb-12"
            >
                <motion.h2
                    variants={textVariant(0.2)}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Customized for your needs
                </motion.h2>
                <motion.p
                    variants={fadeIn("up", 0.4)}
                    className="text-slate-600"
                >
                    Things that make it the best place to start trading
                </motion.p>
            </motion.div>

            <motion.div variants={fadeIn("up", 0.5)} className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="testimonials-swiper md:mb-12"
                >
                    {cuztomize.map((testimonial, index) => (
                        <SwiperSlide
                            key={testimonial.id}
                            className="swiper-wrapper"
                        >
                            <motion.div
                                variants={fadeIn("up", 0.3 * (index + 1))}
                                className="text-start swiper-slide flex flex-col group bg-white border border-solid h-auto border-gray-300 rounded-lg p-5 xl:p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600"
                            >
                                <div className="flex flex-col gap-1 h-24">
                                    <motion.h2
                                        variants={textVariant(0.3)}
                                        className="font-semibold"
                                    >
                                        {testimonial.title}
                                    </motion.h2>
                                    <motion.h3
                                        variants={textVariant(0.3)}
                                        className="font-medium text-sm xl:text-base"
                                    >
                                        {testimonial.sub_title}
                                    </motion.h3>
                                </div>
                                <motion.p
                                    variants={fadeIn("up", 0.6 * (index + 1))}
                                    className="text-slate-600 h-24 text-sm xl:text-base"
                                >
                                    {testimonial.text}
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    variants={fadeIn("up", 0.7)}
                    className="flex justify-center gap-4 mt-8"
                >
                    <motion.button
                        variants={fadeIn("right", 0.8)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                    >
                        <BsChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        variants={fadeIn("left", 0.8)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                    >
                        <BsChevronRight className="w-6 h-6" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CustomizeSection;

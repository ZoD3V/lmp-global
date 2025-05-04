import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const EventSection = ({ Event }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
                <Heading
                    title={"Events Indonesia Technology & Innovation at Jiexpo"}
                />

                <div className="space-y-12">
                    {Event?.length > 0 ? (
                        Event.map((video) => (
                            <div key={video.id} className="space-y-6">
                                {/* Section Video YouTube */}
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtube_code}?rel=0`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    width="100%"
                                    height="500"
                                ></iframe>

                                {/* Section Carousel Images */}
                                <section>
                                    <h3 className="text-3xl font-semibold mb-4 pt-16">
                                        Gallery
                                    </h3>
                                    {video.images.length > 0 ? (
                                        <>
                                            <Swiper
                                                spaceBetween={30}
                                                modules={[
                                                    Navigation,
                                                ]}
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
                                                }}
                                                slidesPerView={1}
                                            >
                                                {video.images.map(
                                                    (image, index) => (
                                                        <SwiperSlide
                                                            key={index}
                                                        >
                                                            <div className="flex justify-center items-center h-80 bg-gray-100 rounded-lg overflow-hidden">
                                                                <img
                                                                    src={`/storage/${image.image_path}`}
                                                                    alt={`Gallery ${
                                                                        video.title
                                                                    } - ${
                                                                        index +
                                                                        1
                                                                    }`}
                                                                    className="object-cover object-center w-full h-full"
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                )}
                                            </Swiper>

                                            <motion.div
                                                variants={fadeIn("up", 0.7)}
                                                viewport={{ once: true }}
                                                className="flex justify-center gap-4 mt-8"
                                            >
                                                <motion.button
                                                    variants={fadeIn(
                                                        "right",
                                                        0.8
                                                    )}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                                                >
                                                    <BsChevronLeft className="w-6 h-6" />
                                                </motion.button>
                                                <motion.button
                                                    variants={fadeIn(
                                                        "left",
                                                        0.8
                                                    )}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                                                >
                                                    <BsChevronRight className="w-6 h-6" />
                                                </motion.button>
                                            </motion.div>
                                        </>
                                    ) : (
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 text-center">
                                            <p className="text-gray-500 py-8">
                                                No images available for this
                                                video
                                            </p>
                                        </div>
                                    )}
                                </section>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 text-center">
                            <p className="text-gray-500 text-lg">
                                No Event available yet
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EventSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Autoplay,
    EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ImageSlider = ({ images }) => {
    const activeImages = images?.filter((image) => image.is_active);

    return (
        <div className="relative w-full container px-4 md:px-6 py-16">
            <Swiper
                centeredSlides={true}
                effect={"coverflow"}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                className="image-slider w-full h-[200px] md:h-[300px] lg:h-[400px]"
            >
                {activeImages?.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                            <img
                                src={`/storage/${image.image}`}
                                alt={`slide ${image.id}`}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className="custom-pagination absolute bottom-[-25px] w-full text-center p-4 mr-2"
                style={{
                    "--swiper-pagination-bullet-width": "10px",
                    "--swiper-pagination-bullet-height": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "4px",
                }}
            ></div>{" "}
        </div>
    );
};

export default ImageSlider;

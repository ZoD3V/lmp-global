import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const ImageSlider = ({ images }) => {
    const activeImages = images?.filter((image) => image.is_active);

    return (
        <div className="relative w-full container px-4 md:px-6 py-16">
            <Swiper
                centeredSlides={true}
                effect={"creative"}
                grabCursor={true}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                    },
                }}
                modules={[Pagination, Autoplay, EffectCreative]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1.2}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                className="image-slider h-auto md:h-[350px] lg:h-[550px]"
            >
                {activeImages?.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={`/storage/${image.image}`}
                            alt={`slide ${image.id}`}
                            className="w-full object-cover h-full rounded-xl shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-pagination absolute bottom-[-25px] w-full text-center p-4 mr-3"></div>
        </div>
    );
};

export default ImageSlider;

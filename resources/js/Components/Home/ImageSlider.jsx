import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageSlider = ({ images }) => {
    const activeImages = images?.filter((image) => image.is_active);
    console.log(activeImages);

    return (
        <div className="relative w-full container px-4 md:px-6 py-16">
            <Swiper
                spaceBetween={15}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1.2}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                className="image-slider"
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

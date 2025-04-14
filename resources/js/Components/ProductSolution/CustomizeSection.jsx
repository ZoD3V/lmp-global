import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Heading from "../Common/Heading";

const cuztomize = [
    {
        id: 1,
        title: "Edge Data Center",
        sub_title: "Customize your edge computing with LMP global solutions",
        text: "LMP Global Solutions revolutionizes the edge with cutting-edge, tailored data centers that supercharge deployment, reduce risks, and optimize expenses. Deploy an array of custom modular edge data centers, ranging from dozens to hundreds, to amplify flexibility, enhance scalability, and elevate efficiency.",
    },
    {
        id: 2,
        title: "Core Data Center",
        sub_title:
            "Build flexible, scalable and efficient core data centers with LMP",
        text: "LMP Global Solutions streamlines core data center expansion effortlessly. Our innovative modular approach empowers clients, contractors, and consulting allies to seamlessly plan and construct data centers worldwide. We provide adaptable, scalable, and eco-efficient solutions that are pre-engineered, prefabricated, and rigorously pre-tested, ensuring swift on-site deployment and assembly. Our dedicated solutions team collaborates with IT, facilities, network, and security stakeholders, guiding you from inception to project completion.",
    },
    {
        id: 3,
        title: "Micro Data Center",
        sub_title: "LMP micro data centers tailored for your needs",
        text: "LMP Global Solutions revolutionizes data centers, harmonizing power, cooling, monitoring, and racks to match your unique business demands. Our expert team partners with you, guiding from inception to implementation, freeing you to prioritize your core mission. Our micro data centers offer an innovative approach to flexibly deploy capacity anywhere.",
    },
    {
        id: 4,
        title: "Cable Landing Station",
        sub_title:
            "Leverage LMP global solutions for customized cable landing stations",
        text: "LMP Global Solutions boasts an unparalleled global presence in crafting modular  data centers, spanning the globe with successful cable landing station setups on six continents. We specialize in providing tailor-made, pre-validated, and factory-integrated cable landing station solutions that seamlessly blend value and rapid delivery. Our swift data center component deployments enable streamlined on-site assembly, requiring fewer personnel, no matter where you are in the world.",
    },
];

const CustomizeSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 xl:px-0 max-w-[1200px] mx-auto container flex flex-col gap-12">
            <Heading
                title={"Customized for your needs"}
                description={
                    "Things that make it the best place to start trading"
                }
            />

            <motion.div
                variants={fadeIn("up", 0.5)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="relative"
            >
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
                            slidesPerView: 2,
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
                                viewport={{ once: true }}
                                className="text-start swiper-slide flex flex-col group bg-white border border-solid border-gray-300 rounded-lg p-4 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600"
                            >
                                <div className="flex flex-col gap-1 mb-4">
                                    <motion.h2
                                        variants={textVariant(0.3)}
                                        viewport={{ once: true }}
                                        className="font-bold"
                                    >
                                        {testimonial.title}
                                    </motion.h2>
                                    <motion.h3
                                        variants={textVariant(0.3)}
                                        className="font-semibold text-sm"
                                    >
                                        {testimonial.sub_title}
                                    </motion.h3>
                                </div>
                                <motion.p
                                    variants={fadeIn("up", 0.3 * (index + 1))}
                                    viewport={{ once: true }}
                                    className="text-slate-900 text-xs text-justify font-medium"
                                >
                                    {testimonial.text}
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    variants={fadeIn("up", 0.7)}
                    viewport={{ once: true }}
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

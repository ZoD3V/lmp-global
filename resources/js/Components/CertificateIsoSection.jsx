import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import iso from "../../../public/images/icons/ic-iso.png";

const CertificateIsoSection = () => {
    const services = [
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
        {
            icon: iso,
            title: "9001 : 2015",
        },
    ];

    return (
        <section className="w-full my-12">
            <div
                id="services"
                className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-2 justify-items-center my-12"
            >
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="show"
                    className="flex flex-col lg:flex-row items-start lg:gap-24 justify-between col-span-2 mb-12"
                >
                    <div className="flex flex-col">
                        <motion.h1
                            variants={fadeIn("down", 0.3)}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            className="text-3xl font-bold text-gray-900"
                        >
                            Efficient & Personalized Process,
                            <span className="text-blue-600 text-3xl font-bold">
                                We Maintain Customer Trust
                            </span>
                        </motion.h1>
                    </div>
                    <motion.p
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="text-slate-600"
                    >
                        We ensure that every installation we build has strict
                        quality checks. Sustainable solutions for an
                        environmentally friendly and renewable future.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.4)}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center col-span-2"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3 * (index + 1))}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center hover:bg-white hover:border-[1px] hover:border-slate-200 hover:shadow-sm transition-all duration-200 justify-center text-center gap-2 lg:gap-4 w-[135px] lg:w-[200px] h-[135px] lg:h-[200px] bg-slate-50 rounded-full"
                        >
                            <svg
                                id="fi_4667049"
                                enableBackground="new 0 0 512 512"
                                height="50"
                                viewBox="0 0 512 512"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path d="m256 0c-140.959 0-256 115.049-256 256 0 140.958 115.049 256 256 256 140.958 0 256-115.049 256-256 0-140.959-115.049-256-256-256zm181.141 121h-91.266c-6.886-28.023-17.751-59.882-33.875-83.974 50.738 12.983 94.658 43.178 125.141 83.974zm-181.141-91c10.463 0 22.161 9.441 32.938 26.583 10.16 16.161 19.028 38.199 25.987 64.417h-117.85c6.96-26.219 15.827-48.256 25.988-64.417 10.777-17.142 22.474-26.583 32.937-26.583zm-56 7.026c-16.123 24.09-26.99 55.955-33.875 83.974h-91.266c30.483-40.796 74.403-70.991 125.141-83.974zm-144.076 113.974h400.151c16.542 31.393 25.925 67.118 25.925 105s-9.383 73.607-25.924 105c-30.475 0-380.35 0-400.151 0-16.542-31.393-25.925-67.118-25.925-105s9.383-73.607 25.924-105zm200.076 331c-10.463 0-22.16-9.44-32.938-26.583-10.161-16.161-19.028-38.199-25.988-64.417h117.851c-6.96 26.219-15.827 48.256-25.987 64.417-10.777 17.143-22.475 26.583-32.938 26.583zm-181.141-91h91.266c6.891 28.046 17.753 59.881 33.875 83.974-50.738-12.983-94.658-43.178-125.141-83.974zm237.141 83.974c16.119-24.086 26.986-55.938 33.875-83.974h91.266c-30.483 40.796-74.403 70.991-125.141 83.974z"></path>
                                    <path d="m136 331c8.284 0 15-6.716 15-15v-120c0-8.284-6.716-15-15-15s-15 6.716-15 15v120c0 8.284 6.716 15 15 15z"></path>
                                    <path d="m226.529 271c8.271 0 15 6.729 15 15s-6.729 15-15 15c-4.006 0-7.773-1.56-10.606-4.393-5.858-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c8.5 8.5 19.8 13.18 31.82 13.18 24.813 0 45-20.187 45-45s-20.187-45-45-45c-8.271 0-15-6.729-15-15s6.729-15 15-15c4.007 0 7.773 1.56 10.606 4.393 5.858 5.858 15.355 5.858 21.213 0s5.858-15.355 0-21.213c-8.5-8.5-19.8-13.18-31.82-13.18-24.813 0-45 20.187-45 45s20.187 45 45 45z"></path>
                                    <path d="m346.529 331c24.813 0 45-20.187 45-45v-60c0-24.813-20.187-45-45-45s-45 20.187-45 45v60c0 24.813 20.187 45 45 45zm-15-105c0-8.271 6.729-15 15-15s15 6.729 15 15v60c0 8.271-6.729 15-15 15s-15-6.729-15-15z"></path>
                                </g>
                            </svg>
                            <motion.h3
                                variants={textVariant(0.3)}
                                viewport={{ once: true }}
                                initial="hidden"
                                whileInView="show"
                                className="text-sm lg:text-base font-bold"
                            >
                                {service.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CertificateIsoSection;

import React from "react";
import { motion } from "framer-motion";
import { HiMiniPhone } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { fadeIn, textVariant } from "../utils/motion";

const ContactSection = () => {
    return (
        <motion.section
            className="max-w-[1200px] container mx-auto grid grid-cols-1 xl:grid-cols-2 py-16 px-4 sm:px-6 xl:px-0 gap-8"
            variants={textVariant(0.3)}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
        >
            <motion.div
                variants={textVariant(0.3)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="col-span-1 flex-col gap-4"
            >
                <div className="flex flex-col gap-1">
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="text-slate-600"
                    >
                        Contact Us
                    </motion.p>
                    <motion.h2
                        variants={textVariant(0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Get in touch
                    </motion.h2>
                </div>
                <motion.p
                    className="my-4 text-slate-600"
                    variants={fadeIn("up", 0.4)}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="show"
                >
                    Please write your questions in the form, we will be happy to
                    reply to your message.
                </motion.p>

                <div className="flex flex-col gap-1 mb-4">
                    <motion.h2
                        variants={textVariant(0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="text-lg font-bold"
                    >
                        LMP Global
                    </motion.h2>
                    <motion.p
                        className="text-slate-600"
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                    >
                        Harapan Indah Boulevard Jl. Sentra Niaga No.7 Bekasi -
                        Jawa Barat
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4">
                    <motion.div className="flex flex-row items-center gap-2">
                        <HiMiniPhone className="text-lg" />
                        <motion.p className="text-md text-slate-600">
                            08111956622
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row items-center gap-2">
                        <MdOutlineMailOutline className="text-lg" />
                        <motion.p className="text-md text-slate-600">
                            info@lmp-networks.com
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row items-center gap-2">
                        <FaWhatsapp className="text-lg" />
                        <motion.p className="text-md text-slate-600">
                            0823 2021 8200
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            <form
                action=""
                class="h-fit bg-white border border-slate-200 rounded-lg p-6 md:p-8 w-full mx-auto"
            >
                <div class="relative mb-8">
                    <label class="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                        Name{" "}
                    </label>
                    <div class="relative text-gray-500 focus-within:text-gray-900">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 21C20 18.1716 20 16.7574 19.1213 15.8787C18.2426 15 16.8284 15 14 15H10C7.17157 15 5.75736 15 4.87868 15.8787C4 16.7574 4 18.1716 4 21M12.1441 11C12.0541 10.991 11.9459 10.991 11.8468 11C9.7027 10.9278 8 9.16911 8 7.00451C8 4.79481 9.78378 3 12 3C14.2072 3 16 4.79481 16 7.00451C15.991 9.16911 14.2883 10.9278 12.1441 11Z"
                                    stroke="#111827"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            class="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
                            placeholder="name"
                        />
                    </div>
                </div>
                <div class="relative mb-8">
                    <label class="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                        Email{" "}
                    </label>
                    <div class="relative text-gray-500 focus-within:text-gray-900">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z"
                                    stroke="#6B7280"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            class="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
                            placeholder="Enter Your Email"
                        />
                    </div>
                </div>
                <div class="relative mb-8">
                    <label class="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                        Message{" "}
                    </label>
                    <div class="relative ">
                        <textarea
                            class="block w-full h-40 px-4 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                            placeholder="Write your message"
                        ></textarea>
                    </div>
                </div>
                <button class="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-900 transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center">
                    Send message{" "}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                            stroke="white"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </form>
        </motion.section>
    );
};

export default ContactSection;

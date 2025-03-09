import React from "react";
import Footer from "../components/Footer";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import { HiMiniPhone } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = (banner) => {
    return (
        <section
            id="home"
            className="h-[350px] md:h-[400px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed relative z-20"
            style={{
                backgroundImage: `url('/storage/${banner.banner[0].image}')`,
            }}
        >
            <div className="max-w-[1200px] mx-auto h-full flex items-center justify-center xl:justify-start">
                <motion.div
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full flex flex-row items-center justify-center md:justify-start text-center text-white z-10 gap-8"
                >
                    <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none font-bold tracking-wide mt-12">
                        Contact Us
                    </h1>
                </motion.div>
            </div>

            <Navbar />

            <motion.div
                className="max-w-[1200px] container mx-auto grid grid-cols-1 lg:grid-cols-2 py-16 px-4 sm:px-6 xl:px-0 gap-8"
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
                        Please write your questions in the form, we will be
                        happy to reply to your message.
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
                            Harapan Indah Boulevard Jl. Sentra Niaga No.7 Bekasi
                            - Jawa Barat
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

                <div className="bg-white relative rounded-lg p-6 lg:p-8 shadow-md">
                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="number"
                                placeholder="Phone"
                                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                rows="6"
                                placeholder="Message"
                                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                            ></textarea>
                        </div>
                        <div>
                            <motion.button
                                variants={fadeIn("left", 0.3)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full md:w-fit bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                    <div>
                        <span className="absolute -top-10 -right-9 z-[-1]">
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                    fill="#3056D3"
                                />
                            </svg>
                        </span>
                        <span className="absolute -right-10 top-[90px] z-[-1]">
                            <svg
                                width="34"
                                height="134"
                                viewBox="0 0 34 134"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="31.9993"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 1.66665)"
                                    fill="#13C296"
                                />
                            </svg>
                        </span>
                        <span className="absolute -left-7 -bottom-7 z-[-1]">
                            <svg
                                width="107"
                                height="134"
                                viewBox="0 0 107 134"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="104.999"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 104.999 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 104.999 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 104.999 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 104.999 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 104.999 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 104.999 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 104.999 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 104.999 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 104.999 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="104.999"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 104.999 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="90.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="75.6654"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="31.9993"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="60.9993"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="17.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 132)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 117.333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 102.667)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 88)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 73.3333)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 45)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 16)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 59)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 30.6666)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="46.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 1.66665)"
                                    fill="#13C296"
                                />
                                <circle
                                    cx="2.66536"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 1.66665)"
                                    fill="#13C296"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </motion.div>
            <iframe
                className="w-full col-span-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126912.93829569164!2d106.97410210163002!3d-6.259867982243107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bfc218780ad%3A0x1b77c8726545aab5!2sLMP%20NETWORKS%20-%20HARAPAN%20INDAH!5e0!3m2!1sid!2sid!4v1702192197729!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <Footer />
        </section>
    );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_lmp from "../../../public/images/containment_lmp.png";

const ProfileSection = () => {
    const dataProfile = [
        {
            img: logo_lmp,
            title: "Leading Data Center Infrastructure",
            description:
                "LMP is a leading data center infrastructure manufacturer and edge data center operator in Indonesia. With a 46.99% Domestic Component Level (TKDN), LMP supports digital transformation and local content development. It plays a vital role in enhancing Indonesia's technological self-sufficiency.",
        },
        {
            img: logo_lmp,
            title: "Localized Data Center Solutions",
            description:
                "LMP focuses on local content development to strengthen Indonesia's economy and meet the country's unique needs. Understanding Indonesia's diverse geography, LMP designs data center solutions for both urban and remote areas. This approach promotes inclusivity and bridges the digital divide.",
        },
        {
            img: logo_lmp,
            title: "Digital Progress and Connectivity through Innovation",
            description:
                "LMP empowers businesses and connects communities by driving Indonesia's digital progress. With a high TKDN rate and commitment to innovation, LMP leads the nation's connectivity revolution. It enables limitless possibilities for Indonesians in the interconnected world.",
        },
    ];

    return (
        <section className="w-full my-12">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] mx-auto py-16 flex flex-col gap-8 px-4 sm:px-6 xl:px-0"
            >
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-3xl mx-auto"
                >
                    <motion.h2
                        variants={textVariant(0.2)}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        LMP Profile
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        viewport={{ once: true }}
                        className="text-slate-600 text-base"
                    >
                        ivamus a ligula ut velit placerat egestas at id leo.
                        Nulla ac volutpat nunc. Suspendisse ut magna porttitor,
                        sollicitudin ligula at, molestie dolor.{" "}
                    </motion.p>
                </motion.div>
                {dataProfile.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between justify-items-center gap-x-8 lg:gap-x-0"
                    >
                        {/* Title and Image Swap */}
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            viewport={{ once: true }}
                            className={`md:w-1/2 ${
                                index % 2 !== 0 ? "md:order-2" : ""
                            }`}
                        >
                            <motion.h2
                                variants={textVariant(0.2)}
                                className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-start ${
                                    index % 2 !== 0
                                        ? "text-center md:text-end"
                                        : "text-center md:text-start "
                                }`}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                variants={fadeIn("up", 0.5)}
                                className={`text-slate-600 text-base md:text-lg ${
                                    index % 2 !== 0
                                        ? "text-center md:text-end"
                                        : "text-center md:text-start "
                                }`}
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            viewport={{ once: true }}
                            className={`w-[400px] h-[350px] hidden md:block ${
                                index % 2 !== 0 ? "md:order-1" : ""
                            }`}
                        >
                            <motion.img
                                variants={fadeIn("right", 0.3)}
                                viewport={{ once: true }}
                                className="card-img h-full w-full object-cover object-center"
                                src={item.img}
                                alt="Logo"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ProfileSection;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import atom from "../../../public/images/icons/ic-atom.png";

const AboutGreeting = (props) => {
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-8 w-full justify-center"
        >
            <motion.div
                variants={fadeIn("up", 0.3)}
                viewport={{ once: true }}
                className="px-4 sm:px-6 xl:px-0 justify-center items-center flex flex-col gap-8"
            >
                {/* Image */}
                <motion.div
                    variants={fadeIn("down", 0.5)}
                    viewport={{ once: true }}
                    className={`max-w-[150px] md:max-w-[170px] mx-auto xl:mx-0`}
                >
                    <motion.img
                        variants={fadeIn("right", 0.3)}
                        viewport={{ once: true }}
                        src={atom}
                        alt="Logo Atom"
                    />
                </motion.div>

                <motion.p
                    variants={fadeIn("up", 0.4)}
                    viewport={{ once: true }}
                    className="text-slate-600 text-lg text-center font-medium"
                >
                    At LMP we design and manufacture all the solution by
                    considering and put forward environment sustainability
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default AboutGreeting;

import React from "react";
import { fadeIn } from "../../utils/motion";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import atom from "../../../../public/images/icons/ic-atom.png";

const AboutGreeting = () => {
    const refHero = useRef(null);
    const isInViewHero = useInView(refHero, { once: true });

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-12 w-full justify-center"
        >
            <div
                ref={refHero}
                className="flex flex-col items-center justify-center text-center gap-10"
            >
                <img src={atom} alt="atom" className="w-36  h-36 object-contain" />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInViewHero ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-medium text-slate-800 max-w-3xl leading-relaxed"
                >
                    At LMP we design and manufacture all the solutions by
                    considering and putting forward
                    <span className="text-green-600 font-semibold">
                        {" "}
                        environmental sustainability
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInViewHero ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-px w-24 bg-slate-300 mt-12"
                />
            </div>
        </motion.section>
    );
};

export default AboutGreeting;

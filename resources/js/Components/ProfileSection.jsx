import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import MultiFeatureCard from "./Common/MultiFeaturedCard";
import Heading from "./Common/Heading";

const ProfileSection = ({ lmp_profile }) => {

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto py-16 flex flex-col gap-12 px-4 sm:px-6 xl:px-0"
        >
            <Heading
                title={"LMP Profile"}
                description={
                    "ivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.."
                }
            />
            {lmp_profile.map((item, index) => (
                <MultiFeatureCard
                    key={index}
                    item={item}
                    index={index}
                    fadeIn={fadeIn}
                    textVariant={textVariant}
                    showButton={false}
                    buttonLink={item.buttonLink}
                />
            ))}
        </motion.section>
    );
};

export default ProfileSection;

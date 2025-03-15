import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_lmp from "../../../public/images/containment_lmp.png";
import server from "../../../public/images/researchdevelopment.png";
import MultiFeatureCard from "./Common/MultiFeaturedCard";
import Heading from "./Common/Heading";

const ProfileSection = () => {
    const dataProfile = [
        {
            img: server,
            title: "Leading Data Center Infrastructure",
            description:
                "LMP is a leading data center infrastructure manufacturer and edge data center operator in Indonesia. With a 46.99% Domestic Component Level (TKDN), LMP supports digital transformation and local content development. It plays a vital role in enhancing Indonesia's technological self-sufficiency.",
        },
        {
            img: logo_lmp,
            title: "Localized Data Center Solutions for Indonesia",
            description:
                "By prioritizing local content development, LMP not only strengthens Indonesia's economy but also ensures that the data center infrastructure is aligned with the nation's unique requirements and challenges. With a deep understanding of Indonesia's diverse geography and population distribution, LMP  designs and deploys data center solutions that cater to both urban centers and remote areas, fostering inclusivity and bridging the digital divide.",
        },
        {
            img: server,
            title: "Digital Progress and Connectivity through Innovation",
            description:
                "LMP empowers businesses and connects communities by driving Indonesia's digital progress. With a high TKDN rate and commitment to innovation, LMP leads the nation's connectivity revolution. It enables limitless possibilities for Indonesians in the interconnected world.",
        },
    ];

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto py-16 my-12 flex flex-col gap-10 px-4 sm:px-6 xl:px-0"
        >
            <Heading
                title={"LMP Profile"}
                description={
                    "ivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.."
                }
            />
            {dataProfile.map((item, index) => (
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

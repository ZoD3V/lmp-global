import React from "react";
import logo_lmp from "../../../public/images/containment_lmp.png";
import server from "../../../public/images/researchdevelopment.png";
import { fadeIn, textVariant } from "../utils/motion";
import MultiFeatureCard from "./Common/MultiFeaturedCard";
import Heading from "./Common/Heading";

const CentersSection = () => {
    const dataCenters = [
        {
            img: server,
            title: "Leading Data Center Infrastructure",
            buttonLink: "/research-development",
            description:
                "LMP is a leading data center infrastructure manufacturer and edge data center operator in Indonesia. With a 46.99% Domestic Component Level (TKDN), LMP supports digital transformation and local content development. It plays a vital role in enhancing Indonesia's technological self-sufficiency.",
        },
        {
            img: logo_lmp,
            title: "Localized Data Center Solutions for Indonesia",
            buttonLink: "/research-development",
            description:
                "By prioritizing local content development, LMP not only strengthens Indonesia's economy but also ensures that the data center infrastructure is aligned with the nation's unique requirements and challenges. With a deep understanding of Indonesia's diverse geography and population distribution, LMP  designs and deploys data center solutions that cater to both urban centers and remote areas, fostering inclusivity and bridging the digital divide.",
        },
    ];

    return (
        <section className="py-16 bg-white max-w-[1200px] flex flex-col gap-10 container mx-auto px-4 sm:px-6 xl:px-0 my-12">
            <Heading
                title={"Our Centers"}
                description={
                    " As a Web Development Services, We are Committed to Building Custom Web Solutions that Drive Business Success."
                }
            />

            {dataCenters.map((item, index) => (
                <MultiFeatureCard
                    key={index}
                    item={item}
                    index={index}
                    fadeIn={fadeIn}
                    textVariant={textVariant}
                    showButton={true}
                    buttonLink={item.buttonLink}
                />
            ))}
        </section>
    );
};

export default CentersSection;

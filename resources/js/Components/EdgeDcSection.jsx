import React from "react";
import server from "../../../public/images/containment.jpeg";
import server2 from "../../../public/images/containment2.png";
import server3 from "../../../public/images/containment3.png";
import { fadeIn, textVariant } from "../utils/motion";
import Heading from "./Common/Heading";
import MultiContainmentCard from "./Common/MultiContainmentCard";

const EdgeDcSection = ({edgeDc}) => {

    return (
        <section className="py-16 bg-white max-w-[1200px] flex flex-col gap-12 container mx-auto px-4 sm:px-6 xl:px-0">
            <Heading
                title={"Our Centers"}
                description={
                    " As a Web Development Services, We are Committed to Building Custom Web Solutions that Drive Business Success."
                }
            />

            {edgeDc.map((item, index) => (
                <MultiContainmentCard
                    key={index}
                    item={item}
                    index={index}
                    fadeIn={fadeIn}
                    textVariant={textVariant}
                    buttonLink={item.buttonLink}
                />
            ))}
        </section>
    );
};

export default EdgeDcSection;

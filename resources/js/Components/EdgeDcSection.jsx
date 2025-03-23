import React, { useEffect } from "react";
import server from "../../../public/images/containment.jpeg";
import server2 from "../../../public/images/containment2.png";
import server3 from "../../../public/images/containment3.png";
import { fadeIn, textVariant } from "../utils/motion";
import Heading from "./Common/Heading";
import MultiContainmentCard from "./Common/MultiContainmentCard";

const EdgeDcSection = ({edgeDc}) => {
    useEffect(() => {
        console.log(edgeDc)
    }, []);
    const dataCenters = [
        {
            img: server,
            title: "Containment Data Center",
            buttonLink: "/research-development",
            description:
                "Data Center Containment is an airflow management system designed to improve cooling efficiency by separating hot and cold air in the server room. Consisting of Hot Aisle Containment (HAC) and Cold Aisle Containment (CAC), this system helps reduce temperature mixing, so that the cooling system works more optimally, reduces energy consumption, and extends the life of IT equipment. With good containment, data centers can achieve higher energy efficiency, improve cooling performance, and lower operating costs, making it an ideal solution for a more environmentally friendly and sustainable modern data center.",
        },
        {
            img: server2,
            title: "Micro Data Center",
            buttonLink: "/research-development",
            description:
                "Micro Data Center is a compact data center solution that integrates servers, storage, networking, power, cooling, and security in one modular system. Unlike traditional data centers, micro data centers are designed to be located closer to users or data sources, reducing latency, increasing processing speed, and saving operational costs. With a flexible and scalable design, micro data centers are ideal for IoT, edge computing, industrial manufacturing, and environments with limited space and infrastructure, providing high efficiency and ease of implementation.",
        },
        {
            img: server3,
            title: "Modular Data Center / Container Data Center",
            buttonLink: "/research-development",
            description:
                "Micro Data Center is a compact data center solution that integrates servers, storage, networking, power, cooling, and security in one modular system. Unlike traditional data centers, micro data centers are designed to be located closer to users or data sources, reducing latency, increasing processing speed, and saving operational costs. With a flexible and scalable design, micro data centers are ideal for IoT, edge computing, industrial manufacturing, and environments with limited space and infrastructure, providing high efficiency and ease of implementation.",
        },
    ];

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

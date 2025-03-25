import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Heading from "./Common/Heading";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

const ServicesRelatedSection = ({ features, title, showButton = false }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto flex flex-col w-full justify-center pb-16"
        >
            <div className="px-4 md:px-6 xl:px-0 max-w-[1200px] container flex flex-col gap-12">
                <Heading title={title} />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((data, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl overflow-hidden"
                            variants={itemVariants}
                        >
                            <Card className="overflow-hidden">
                                <div className="relative h-64 w-full">
                                    <img
                                        src={data.image}
                                        alt="Design Engineering"
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 text-center">
                                        {data.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesRelatedSection;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo_lmp from "../../../public/images/containment_lmp.png";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "./Common/Heading";

const CsrSection = () => {
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

    const features = [
        {
            img: logo_lmp,
            title: "Main Tank & Storage Tank",
        },
        {
            img: product1,
            title: "Installation of 3 inch PE pipe 550M long",
        },
        {
            img: product2,
            title: "Installation of 1,100M long 2 inch PE pipe",
        },
    ];

    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-8 w-full justify-center"
        >
            <div className="flex flex-col gap-10">
                <Heading
                    title={
                        "Responsibility For Development Social And Community"
                    }
                />
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
                                        src={data.img}
                                        alt="Design Engineering"
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <p className="font-bold text-gray-900 text-center">
                                        {data.title}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CsrSection;

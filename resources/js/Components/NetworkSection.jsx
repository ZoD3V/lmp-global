import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Heading from "./Common/Heading";

const NetworkSection = ({ networkProduct }) => {
    const networkImageData = networkProduct.products;
    const detailProductData = [
        {
            id: 1,
            badges: ["OS1/OS2", "Single Mode"],
            details:
                "High-performance single mode fiber optic jumper cables for long-distance data transmission.",
            bg_color: "bg-gradient-to-r from-orange-100 to-orange-50",
        },
        {
            id: 1,
            badges: ["OS1/OS2", "Multi Mode"],
            details:
                "High-performance Multi Mode fiber optic jumper cables for long-distance data transmission.",
            bg_color: "bg-gradient-to-r from-teal-100 to-teal-50",
        },
        {
            id: 1,
            badges: ["OM4", "Single Mode"],
            details:
                "High-performance single mode fiber optic jumper cables for long-distance data transmission.",
            bg_color: "bg-gradient-to-r from-blue-100 to-blue-50",
        },
    ];

    const combineProductAndDetails = (networkImageData, detailProductData) => {
        return networkImageData.map((product, index) => {
            const productDetails = detailProductData[index];
            return {
                ...product,
                badges: productDetails ? productDetails.badges : [],
                details: productDetails ? productDetails.details : "",
                bg_color: productDetails ? productDetails.bg_color : "",
            };
        });
    };

    const combinedData = combineProductAndDetails(
        networkImageData,
        detailProductData
    );

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="networks" className="w-full py-20">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge className="text-sm">Connectivity Solutions</Badge>
                    <Heading
                        title={networkProduct.title}
                        description={networkProduct.desc}
                    />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {combinedData.map((data, index) => (
                        <motion.div variants={item} key={index}>
                            <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className={`relative h-60 flex items-center justify-center p-6 ${data.bg_color}`}>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={`/storage/${data.image_path}`}
                                                alt="Single Mode OS1/OS2 Jumper LC-LC"
                                                className="object-contain max-h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold mb-2">
                                            LMP Networks®
                                        </h3>
                                        <p className="text-sm font-medium line-clamp-1">
                                            {data.caption}
                                        </p>
                                        <div className="mt-4 space-y-2">
                                            <div className="flex items-center gap-2">
                                                {data.badges.map(
                                                    (badge, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="bg-slate-50"
                                                        >
                                                            {badge}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {data.details}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 p-6 bg-white rounded-lg shadow-sm border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-muted-foreground">
                        {networkProduct.patch_cord_info}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NetworkSection;

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Download,
    ShoppingCart,
    Info,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ProductCard from "./Common/ProductCard";
import { router } from "@inertiajs/react";

const downloadFile = (filePath, fileName) => {
    fetch(filePath)
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
            console.error("Download failed:", error);
        });
};

const handleWhatsAppClick = (product) => {
    const message = `Hello, I'm interested in the product. ${product}`;
    const whatsappUrl = `https://wa.me/6282320218200?text=${encodeURIComponent(
        message
    )}`;
    window.open(whatsappUrl, "_blank");
};

const handleClick = () => {
    router.visit("/product");
};

const DetailProductSection = ({ detailData, popularProducts }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <section className="max-w-[1200px] container mx-auto px-4 sm:px-6 xl:px-0 gap-12 flex flex-col py-24 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Product Image */}
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: imageLoaded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative min-w-[350px]"
                    >
                        <img
                            src={`/storage/${detailData.image}`}
                            alt="Edge X UHD Series 1U 144F"
                            fill="none"
                            className="object-cover w-full h-full"
                            onLoad={() => setImageLoaded(true)}
                        />
                    </motion.div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeIn}>
                        <Badge className="mb-3" variant="outline">
                            Enterprise Grade
                        </Badge>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                            {detailData.name}
                        </h1>
                        <p className="text-muted-foreground mb-4">
                            Rack Mount Drawer Indoor Fiber Enclosure
                        </p>
                    </motion.div>

                    <motion.div variants={fadeIn} className="flex gap-4 mb-6">
                        <Button
                            variant="theme"
                            onClick={() => handleWhatsAppClick(detailData.name)}
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Order
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                downloadFile(
                                    `/storage/${detailData.brochure}`,
                                    detailData.name
                                )
                            }
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Get Brochure
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeIn} className="mb-6">
                        <p className="text-base leading-relaxed mb-4">
                            {detailData.desc}
                        </p>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Info className="mr-2 h-5 w-5 text-primary" />
                            Key Specifications
                        </h3>
                        {detailData.key_characters &&
                        detailData.key_characters.length > 0 ? (
                            <ul className="grid gap-2 mb-6">
                                {detailData.key_characters.map(
                                    (keyCharacter, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                            <span>{keyCharacter.name}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        ) : (
                            <p className="text-gray-500">
                                No key specifications available.
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            {/* Similar Products */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Similar Products</h2>
                    <Button
                        variant="ghost"
                        className="gap-1"
                        onClick={handleClick}
                    >
                        View all <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.name}
                            description={product.desc}
                            link={`/product/${product.id}`}
                            imageSrc={`/storage/${product.image}`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default DetailProductSection;

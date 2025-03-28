import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Download,
    ShoppingCart,
    Info,
    Server,
    Cable,
    CheckCircle2,
    ArrowRight,
    Cpu,
    GalleryThumbnailsIcon,
    List,
} from "lucide-react";

import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import ProductCard from "./Common/ProductCard";
import { router } from "@inertiajs/react";
import { cn } from "@/lib/utils";

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

const handleClick = () => {
    router.visit("/product");
};

const DetailProductSection = ({
    detailData,
    popularProducts,
    designFeatures,
    performanceBenefits,
    PhysicalSpecifications,
    Capacity,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [activeOptimization, setActiveOptimization] = useState("details");

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
                        className="relative min-w-[350px] h-[350px]"
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
                        <Button variant="theme">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Pre Order
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

            {/* Tabs Section */}
            <Tabs
                defaultValue="details"
                value={activeOptimization}
                onValueChange={setActiveOptimization}
            >
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger
                        value="details"
                        className={cn(
                            "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                            "hover:text-blue-600 transition-all bg-blue-50 text-blue-500"
                        )}
                    >
                        <List className="w-5 h-5 mr-2" />
                        Details
                    </TabsTrigger>
                    <TabsTrigger
                        value="features"
                        className={cn(
                            "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                            "hover:text-blue-600 transition-all bg-blue-50 text-blue-500"
                        )}
                    >
                        <GalleryThumbnailsIcon className="w-5 h-5 mr-2" />
                        Features
                    </TabsTrigger>
                    <TabsTrigger
                        value="specs"
                        className={cn(
                            "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                            "hover:text-blue-600 transition-all bg-blue-50 text-blue-500"
                        )}
                    >
                        <Cpu className="w-5 h-5 mr-2" />
                        Specsifications
                    </TabsTrigger>
                </TabsList>
                <motion.div
                    key={activeOptimization}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <TabsContent value="details" className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Server className="mr-2 h-5 w-5 text-primary" />
                                Product Overview
                            </h3>
                            <p className="mb-4 text-gray-500">
                                {detailData.product_overview
                                    ? detailData.product_overview
                                    : "No product overview available."}
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="features" className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Cable className="mr-2 h-5 w-5 text-primary" />
                                Features & Benefits
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <h4 className="font-medium">
                                        Design Features
                                    </h4>
                                    {designFeatures &&
                                    designFeatures.length > 0 ? (
                                        <ul className="space-y-2">
                                            {designFeatures.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                                        <span>{item.name}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500">
                                            No design features available.
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-medium">
                                        Performance Benefits
                                    </h4>
                                    {performanceBenefits.length > 0 ? (
                                        <ul className="space-y-2">
                                            {performanceBenefits.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                                        <span>{item.name}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500">
                                            No performance available.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="specs" className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">
                                Technical Specifications
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium mb-2">
                                        Physical Specifications
                                    </h4>
                                    <ul className="space-y-2">
                                        {PhysicalSpecifications &&
                                        PhysicalSpecifications.length > 0 ? (
                                            PhysicalSpecifications.map(
                                                (spec, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex justify-between border-b pb-2"
                                                    >
                                                        <span className="text-muted-foreground">
                                                            {spec.spec_name}
                                                        </span>
                                                        <span className="font-medium">
                                                            {spec.spec_value}
                                                        </span>
                                                    </li>
                                                )
                                            )
                                        ) : (
                                            <p className="text-gray-500">
                                                No physical specifications
                                                available.
                                            </p>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">
                                        Capacity
                                    </h4>
                                    <ul className="space-y-2">
                                        {Capacity && Capacity.length > 0 ? (
                                            Capacity.map((spec, index) => (
                                                <li
                                                    key={index}
                                                    className="flex justify-between border-b pb-2"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {spec.spec_name}
                                                    </span>
                                                    <span className="font-medium">
                                                        {spec.spec_value}
                                                    </span>
                                                </li>
                                            ))
                                        ) : (
                                            <p className="text-gray-500">
                                                No capacity available.
                                            </p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </motion.div>
            </Tabs>

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

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Heading from "./Common/Heading";
import { ChevronRight } from "lucide-react";
import { router } from "@inertiajs/react";

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
        },
    },
};

const EdgeDcSection = ({
    title,
    description,
    tabsConfig,
    dataProducts,
    customGrid = 3,
}) => {
    const [activeTab, setActiveTab] = useState(tabsConfig[0].value);

    const handleClick = (link) => {
        router.visit(link);
    };

    return (
        <section className="py-16">
            <div className="container max-w-[1200px] px-4 md:px-6 xl:px-0">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <Heading title={title} description={description} />
                </motion.div>

                <Tabs
                    defaultValue={tabsConfig[0].value}
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <div className="flex justify-center mb-12">
                        <TabsList className="w-fit flex flex-wrap items-start">
                            {tabsConfig.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className="data-[state=active]:bg-blue-600 text-xs md:text-sm data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                                >
                                    <tab.icon className="w-5 h-5 mr-2" />
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {dataProducts.map((solution) => (
                        <TabsContent
                            key={solution.id}
                            value={solution.id}
                            className="focus:outline-none"
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="order-2 md:order-1"
                                >
                                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
                                        {solution.title}
                                    </h3>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <div className="grid gap-8 mb-10">
                                        {solution.benefits.map(
                                            (benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    variants={itemVariants}
                                                    className="flex items-start gap-4"
                                                >
                                                    <div
                                                        className={`mt-1 ${benefit.iconBg} p-3 rounded-full`}
                                                    >
                                                        {benefit.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-900 text-lg mb-1">
                                                            {benefit.title}
                                                        </h4>
                                                        <p className="text-slate-600">
                                                            {
                                                                benefit.description
                                                            }
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )
                                        )}
                                    </div>

                                    <Button
                                        size="lg"
                                        variant="theme"
                                        className="group text-base"
                                        onClick={() => handleClick("/contact")}
                                    >
                                        Request Consultation
                                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="order-1 md:order-2 flex justify-center"
                                >
                                    <motion.div
                                        className="relative w-full max-w-md"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            delay: 0.2,
                                        }}
                                    >
                                        <div className="aspect-square relative flex items-center justify-center">
                                            <img
                                                src={
                                                    solution.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={solution.title}
                                                fill="true"
                                                className="object-contain"
                                                style={{
                                                    filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.15))",
                                                }}
                                            />
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute -z-10 w-full h-full top-0 left-0">
                                            <div className="absolute top-1/4 -left-10 w-20 h-20 bg-blue-100/70 rounded-full blur-xl"></div>
                                            <div className="absolute bottom-1/4 -right-10 w-32 h-32 bg-amber-100/70 rounded-full blur-xl"></div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default EdgeDcSection;

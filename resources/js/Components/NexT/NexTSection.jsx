import React from "react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Leaf, Zap, Server, Globe, Database,Info } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const NextTSection = ({ nexT }) => {
    const [activeTab, setActiveTab] = useState("overview");
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const iconColors = {
        server: {
            bg: "bg-blue-100 dark:bg-blue-900/30",
            icon: "text-blue-600 dark:text-blue-400",
        },
        globe: {
            bg: "bg-purple-100 dark:bg-purple-900/30",
            icon: "text-purple-600 dark:text-purple-400",
        },
        cpu: {
            bg: "bg-cyan-100 dark:bg-cyan-900/30",
            icon: "text-cyan-600 dark:text-cyan-400",
        },
        zap: {
            bg: "bg-amber-100 dark:bg-amber-900/30",
            icon: "text-amber-600 dark:text-amber-400",
        },
        leaf: {
            bg: "bg-green-100 dark:bg-green-900/30",
            icon: "text-green-600 dark:text-green-400",
        },
        database: {
            bg: "bg-indigo-100 dark:bg-indigo-900/30",
            icon: "text-indigo-600 dark:text-indigo-400",
        },
        network: {
            bg: "bg-rose-100 dark:bg-rose-900/30",
            icon: "text-rose-600 dark:text-rose-400",
        },
    };

    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col my-12 gap-12">
            <div className="container px-4 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <Badge
                        variant="outline"
                        className="px-4 py-1 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 mb-4"
                    >
                        Next Generation Data Centers
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                        <span className="text-gray-800 dark:text-blue-400">
                            {nexT[0].title}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                        {nexT[0].sub_title}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="order-2 lg:order-1"
                    >
                        <p
                            className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: nexT[0].content,
                            }}
                        ></p>

                        <Tabs
                            defaultValue="overview"
                            className="w-full"
                            onValueChange={setActiveTab}
                        >
                            <TabsList className="grid grid-cols-3 mb-8 bg-blue-100/50 dark:bg-blue-900/20">
                                <TabsTrigger
                                    value="overview"
                                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                                >
                                    <Info className="w-5 h-5 mr-2" />
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger
                                    value="technology"
                                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                                >
                                    <Cpu className="w-5 h-5 mr-2" />
                                    Technology
                                </TabsTrigger>
                                <TabsTrigger
                                    value="sustainability"
                                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                                >
                                    <Leaf className="w-5 h-5 mr-2" />
                                    Sustainability
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-4">
                                <motion.div
                                    initial="hidden"
                                    animate={
                                        activeTab === "overview"
                                            ? "visible"
                                            : "hidden"
                                    }
                                    variants={staggerContainer}
                                    className="grid gap-4"
                                >
                                    <motion.div variants={fadeIn}>
                                        <Card className="overflow-hidden border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <div
                                                    className={`p-2 rounded-full ${iconColors.server.bg}`}
                                                >
                                                    <Server
                                                        className={`h-5 w-5 ${iconColors.server.icon}`}
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle>
                                                        Edge Computing
                                                        Infrastructure
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                    Strategically placed data
                                                    centers across the
                                                    Indonesian Archipelago
                                                    provide minimal latency and
                                                    maximum reliability, solving
                                                    connectivity challenges in
                                                    geographically dispersed
                                                    regions.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <Card className="overflow-hidden border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <div
                                                    className={`p-2 rounded-full ${iconColors.globe.bg}`}
                                                >
                                                    <Globe
                                                        className={`h-5 w-5 ${iconColors.globe.icon}`}
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle>
                                                        Nationwide Coverage
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                    As the first data center
                                                    provider with nationwide
                                                    coverage in Indonesia, we
                                                    ensure businesses and
                                                    individuals have access to
                                                    reliable digital
                                                    infrastructure regardless of
                                                    their location.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent
                                value="technology"
                                className="space-y-4"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate={
                                        activeTab === "technology"
                                            ? "visible"
                                            : "hidden"
                                    }
                                    variants={staggerContainer}
                                    className="grid gap-4"
                                >
                                    <motion.div variants={fadeIn}>
                                        <Card className="overflow-hidden border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <div
                                                    className={`p-2 rounded-full ${iconColors.cpu.bg}`}
                                                >
                                                    <Cpu
                                                        className={`h-5 w-5 ${iconColors.cpu.icon}`}
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle>
                                                        Dynamix Cooling System
                                                        (DCS)
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                    Our proprietary cooling
                                                    management system uses
                                                    AI-driven predictive
                                                    algorithms to optimize
                                                    cooling supply based on
                                                    real-time IT equipment
                                                    productivity, reducing
                                                    energy waste and operational
                                                    costs.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <Card className="overflow-hidden border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <div
                                                    className={`p-2 rounded-full ${iconColors.zap.bg}`}
                                                >
                                                    <Zap
                                                        className={`h-5 w-5 ${iconColors.zap.icon}`}
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle>
                                                        Cooling as a Service
                                                        (CaaS)
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                    Our innovative service model
                                                    allows clients to pay only
                                                    for the cooling they need,
                                                    optimizing resource
                                                    allocation and reducing
                                                    unnecessary power
                                                    consumption while
                                                    maintaining optimal
                                                    operating temperatures.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent
                                value="sustainability"
                                className="space-y-4"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate={
                                        activeTab === "sustainability"
                                            ? "visible"
                                            : "hidden"
                                    }
                                    variants={staggerContainer}
                                    className="grid gap-4"
                                >
                                    <motion.div variants={fadeIn}>
                                        <Card className="overflow-hidden border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <div
                                                    className={`p-2 rounded-full ${iconColors.leaf.bg}`}
                                                >
                                                    <Leaf
                                                        className={`h-5 w-5 ${iconColors.leaf.icon}`}
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle>
                                                        Renewable Energy
                                                        Integration
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                    Our edge data centers
                                                    incorporate solar panels and
                                                    other renewable energy
                                                    sources, reducing carbon
                                                    footprint while ensuring
                                                    reliable operation even in
                                                    remote locations with
                                                    unstable power grids.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>

                                    <motion.div variants={fadeIn}>
                                        <Card className="overflow-hidden border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <div
                                                    className={`p-2 rounded-full ${iconColors.database.bg}`}
                                                >
                                                    <Database
                                                        className={`h-5 w-5 ${iconColors.database.icon}`}
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle>
                                                        Efficiency Metrics
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                    Our solutions achieve up to
                                                    40% reduction in power
                                                    consumption compared to
                                                    traditional cooling systems,
                                                    translating to significant
                                                    cost savings and
                                                    environmental benefits for
                                                    our clients.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </motion.div>

                    <motion.div
                        ref={imageRef}
                        className="relative order-1 lg:order-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="aspect-square md:aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 shadow-xl">
                            {/* Decorative elements */}
                            <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                            <motion.div
                                style={{ scale: imageScale }}
                                className="h-full w-full relative p-8 flex items-center justify-center"
                            >
                                {/* Placeholder data center visualization */}
                                <img
                                    src={`/storage/${nexT[0].image}`}
                                    alt="Data Center"
                                />
                            </motion.div>

                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-blue-900/80 to-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h3 className="text-white text-xl font-semibold mb-2">
                                    Edge DC 360 Module
                                </h3>
                                <p className="text-gray-200 text-sm">
                                    Modular edge data center with integrated
                                    solar panels and advanced cooling systems
                                </p>
                            </motion.div>

                            <motion.div
                                className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                40% Less Emissions
                            </motion.div>

                            <motion.div
                                className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                Solar Powered
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NextTSection;

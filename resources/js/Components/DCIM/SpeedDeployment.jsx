import React, { useState } from "react";
import {
    Clock,
    Zap,
    BarChart3,
    CheckSquare,
    ClipboardList,
    LineChart,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const SpeedDeployment = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <section className="w-full py-16 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05)_0%,rgba(59,130,246,0)_50%)]"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <svg
                    className="absolute top-0 right-0 w-full h-64 text-slate-50 rotate-180"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Badge
                            variant="outline"
                            className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-500"
                        >
                            <Clock className="w-4 h-4 mr-2" />
                            Operational Efficiency
                        </Badge>
                    </motion.div>
                    <Heading
                        title={"Speed of Deployment"}
                        description={
                            "Making Work Orders And Resourcing Effective"
                        }
                    />
                </div>

                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/10">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2 flex items-center">
                                <Zap className="w-5 h-5 mr-2" />
                                XPediTe Provides:
                            </h3>
                            <p className="text-slate-600 mb-4">
                                Our platform delivers comprehensive deployment
                                acceleration through these key capabilities:
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <Tabs
                    onValueChange={setActiveTab}
                    defaultValue="all"
                    className="w-full max-w-5xl mx-auto"
                >
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid grid-cols-3 w-full max-w-md bg-blue-500/5 border border-blue-500/20 p-1">
                            <TabsTrigger
                                value="all"
                                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                            >
                                <CheckSquare className="w-4 h-4 mr-2" />
                                All Features
                            </TabsTrigger>
                            <TabsTrigger
                                value="planning"
                                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                            >
                                <ClipboardList className="w-4 h-4 mr-2" />
                                Planning
                            </TabsTrigger>
                            <TabsTrigger
                                value="monitoring"
                                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-600 hover:text-blue-800 transition-all"
                            >
                                <LineChart className="w-4 h-4 mr-2" />
                                Monitoring
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TabsContent value="all" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Intelligent Commissioning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Saves around at least 95% of
                                                    resource time per IMAC
                                                    (Install, Moves, Adds,
                                                    Changes) ticket - bringing
                                                    deployment time down from
                                                    weeks and days to hours and
                                                    minutes.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                2
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Comprehensive Asset
                                                    Management
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Customers with a
                                                    comprehensive asset
                                                    management view of all
                                                    assets (IT and Facility),
                                                    within in all data centre
                                                    sites (local and remote).
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                3
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Regulatory Compliance
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Compliance with company
                                                    regulations on all policies,
                                                    installs, moves, adds and
                                                    changes of any equipment,
                                                    and any changes in
                                                    infrastructure within all
                                                    corporate sites - this is
                                                    conducted and implemented
                                                    solely through the XPediTe
                                                    platform.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                4
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Automated Planning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Automatic end to end
                                                    planning for installs,
                                                    moves, adds and changes of
                                                    any devices using company
                                                    rules, developed algorithms,
                                                    work orders, change control
                                                    support and required
                                                    equipment labelling.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                5
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Real-time Equipment
                                                    Monitoring
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Real-time monitoring and
                                                    alerting of all installed
                                                    equipment and connectivity
                                                    across the entire inventory
                                                    in all sites through the use
                                                    of bespoke customer
                                                    dashboards notifications.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                6
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Environmental Monitoring
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Real-time monitoring and
                                                    alerting for power,
                                                    environmental conditions,
                                                    changes and trends using
                                                    integration through the
                                                    Power & Thermal Telemetries
                                                    module.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                7
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Capacity Planning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Provides accurate
                                                    information for both
                                                    capacity planning and for
                                                    future deployment and
                                                    relocation projects.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                8
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Accelerated Implementation
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    All planning and design as
                                                    well as implementation is
                                                    done using XPediTe, allowing
                                                    for accurate and rapid new
                                                    installations and fast
                                                    migration.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300 md:col-span-2">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                9
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Intelligent Floor Planning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    A rapid import of floor
                                                    layouts, and configurable,
                                                    intelligent layers to
                                                    provide consistent accurate
                                                    visibility across a
                                                    customer's entire
                                                    infrastructure, all of its
                                                    data centres, and people
                                                    spaces.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="planning" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Intelligent Commissioning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Saves around at least 95% of
                                                    resource time per IMAC
                                                    (Install, Moves, Adds,
                                                    Changes) ticket - bringing
                                                    deployment time down from
                                                    weeks and days to hours and
                                                    minutes.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                4
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Automated Planning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Automatic end to end
                                                    planning for installs,
                                                    moves, adds and changes of
                                                    any devices using company
                                                    rules, developed algorithms,
                                                    work orders, change control
                                                    support and required
                                                    equipment labelling.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                7
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Capacity Planning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Provides accurate
                                                    information for both
                                                    capacity planning and for
                                                    future deployment and
                                                    relocation projects.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                8
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Accelerated Implementation
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    All planning and design as
                                                    well as implementation is
                                                    done using XPediTe, allowing
                                                    for accurate and rapid new
                                                    installations and fast
                                                    migration.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="monitoring" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                5
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Real-time Equipment
                                                    Monitoring
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Real-time monitoring and
                                                    alerting of all installed
                                                    equipment and connectivity
                                                    across the entire inventory
                                                    in all sites through the use
                                                    of bespoke customer
                                                    dashboards notifications.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                6
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Environmental Monitoring
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    Real-time monitoring and
                                                    alerting for power,
                                                    environmental conditions,
                                                    changes and trends using
                                                    integration through the
                                                    Power & Thermal Telemetries
                                                    module.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                                9
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900 mb-2">
                                                    Intelligent Floor Planning
                                                </h4>
                                                <p className="text-slate-600 text-sm">
                                                    A rapid import of floor
                                                    layouts, and configurable,
                                                    intelligent layers to
                                                    provide consistent accurate
                                                    visibility across a
                                                    customer's entire
                                                    infrastructure, all of its
                                                    data centres, and people
                                                    spaces.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </motion.div>
                </Tabs>

                <div className="mt-16 flex justify-center">
                    <Card className="bg-white/80 backdrop-blur-sm border border-blue-500/10 max-w-md">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="min-w-[3rem] min-h-[3rem] w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                <BarChart3 className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium text-slate-900">
                                    Deployment Time Reduction
                                </h4>
                                <p className="text-sm text-slate-600">
                                    XPediTe reduces deployment time by up to
                                    95%, transforming weeks into hours.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default SpeedDeployment;

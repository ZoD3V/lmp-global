import React, { useState } from "react";
import {
    Activity,
    Map,
    Zap,
    Gauge,
    Clock,
    BatteryCharging,
    Sigma,
    BarChart2,
    Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "../Common/Heading";
import dashboard from "../../../../public/images/volts/dashboard.webp";
import voltage from "../../../../public/images/volts/voltage.webp";
import current from "../../../../public/images/volts/current.webp";
import ground from "../../../../public/images/volts/ground.webp";
import frequency from "../../../../public/images/volts/frequency.webp";
import energy from "../../../../public/images/volts/energy.webp";
import powerfactor from "../../../../public/images/volts/powerfactor.webp";
import thdv from "../../../../public/images/volts/thdv.webp";
import thdi from "../../../../public/images/volts/thdi.webp";
import { fadeIn } from "@/utils/motion";

const MonitoringDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    const dashboards = [
        {
            id: "dashboard",
            title: "Dashboard",
            icon: <Map className="h-5 w-5 text-blue-500" />,
            description:
                "Geographic view of all device locations with real-time status indicators",
            color: "from-blue-500/20 to-cyan-500/20",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
            img: dashboard,
        },
        {
            id: "voltage",
            title: "Voltage",
            icon: <Zap className="h-5 w-5 text-amber-500" />,
            description:
                "Monitor voltage levels across all connected devices with precision gauges",
            color: "from-amber-500/20 to-yellow-500/20",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-500",
            img: voltage,
        },
        {
            id: "current",
            title: "Current",
            icon: <Activity className="h-5 w-5 text-green-500" />,
            description:
                "Track current flow with advanced visualization and threshold alerts",
            color: "from-green-500/20 to-emerald-500/20",
            iconBg: "bg-green-100",
            iconColor: "text-green-500",
            img: current,
        },
        {
            id: "ground",
            title: "Ground",
            icon: <Gauge className="h-5 w-5 text-purple-500" />,
            description:
                "Monitor ground connections and safety parameters in real-time",
            color: "from-purple-500/20 to-violet-500/20",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-500",
            img: ground,
        },
        {
            id: "frequency",
            title: "Frequency",
            icon: <Clock className="h-5 w-5 text-red-500" />,
            description: "Monitor system frequency stability with live updates",
            color: "from-red-500/20 to-pink-500/20",
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
            img: frequency,
        },
        {
            id: "energy",
            title: "Energy",
            icon: <BatteryCharging className="h-5 w-5 text-indigo-500" />,
            description: "Track energy consumption and efficiency metrics",
            color: "from-indigo-500/20 to-blue-500/20",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-500",
            img: energy,
        },
        {
            id: "powerfactor",
            title: "Power Factor",
            icon: <Sigma className="h-5 w-5 text-teal-500" />,
            description:
                "Measure power efficiency with real-time power factor calculations",
            color: "from-teal-500/20 to-cyan-500/20",
            iconBg: "bg-teal-100",
            iconColor: "text-teal-500",
            img: powerfactor,
        },
        {
            id: "thdv",
            title: "THDV",
            icon: <BarChart2 className="h-5 w-5 text-orange-500" />,
            description:
                "Monitor Total Harmonic Distortion Voltage for power quality",
            color: "from-orange-500/20 to-amber-500/20",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            img: thdv,
        },
        {
            id: "thdi",
            title: "THDI",
            icon: <Waves className="h-5 w-5 text-rose-500" />,
            description:
                "Track Total Harmonic Distortion Current in the system",
            color: "from-rose-500/20 to-pink-500/20",
            iconBg: "bg-rose-100",
            iconColor: "text-rose-500",
            img: thdi,
        },
    ];

    const activeDashboard = dashboards.find((d) => d.id === activeTab);
    return (
        <section className="py-16 px-4 md:px-6 xl:px-0 relative overflow-hidden bg-white text-slate-800">
            {/* Decorative circles */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl z-0" />
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl z-0" />

            <div className="w-full mx-auto max-w-[1200px] relative z-10 flex flex-col gap-12">
                <Heading
                    title={"Monitoring System LMP Volts"}
                    description={
                        "Our electrical protection devices are equipped with real-time monitoring and device location features, allowing you to view the position and status of devices spread across multiple locations —right from one centralized dashboard."
                    }
                />

                {/* Desktop View - Side by side previews */}
                <div className="hidden lg:grid grid-cols-2 gap-8 mb-4">
                    {dashboards.map((dashboard,index) => (
                        <motion.div
                            key={dashboard.id}
                            initial={"hidden"}
                            whileInView={"show"}
                            whileHover={{ y: -5 }}
                            variants={fadeIn("fadeIn", 0.2 * index)}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={cn(
                                    "overflow-hidden transition-all duration-300 bg-white border shadow-md",
                                    activeTab === dashboard.id &&
                                        "shadow-xl shadow-" +
                                            dashboard.iconColor.replace(
                                                "text-",
                                                ""
                                            ) +
                                            "/10"
                                )}
                                onClick={() => setActiveTab(dashboard.id)}
                            >
                                <CardContent className="p-0">
                                    <div
                                        className={cn(
                                            "p-4 flex items-center gap-3 border-b bg-gradient-to-r",
                                            activeTab === dashboard.id
                                                ? "bg-slate-50"
                                                : "bg-white"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center",
                                                dashboard.iconBg
                                            )}
                                        >
                                            <div
                                                className={dashboard.iconColor}
                                            >
                                                {dashboard.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-slate-800">
                                                {dashboard.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 line-clamp-1">
                                                {dashboard.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative p-0 bg-white">
                                        <div className="relative transform perspective-1200 transition-all duration-500">
                                            <div className="transform transition-transform duration-500 rotateX-3">
                                                <img
                                                    src={
                                                        dashboard.img ||
                                                        "/placeholder.svg"
                                                    }
                                                    width={800}
                                                    height={600}
                                                    alt={`${dashboard.title} monitoring dashboard view`}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View - Enhanced Tabs */}
                <div className="lg:hidden">
                    <Tabs
                        defaultValue="dashboard"
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid grid-cols-4 mb-8 bg-slate-100">
                            {dashboards.map((dashboard) => (
                                <TabsTrigger
                                    key={dashboard.id}
                                    value={dashboard.id}
                                    className="relative text-slate-500 data-[state=active]:text-slate-800"
                                >
                                    <div className="flex flex-row items-center gap-1">
                                        {dashboard.icon}
                                        <span className="hidden sm:inline text-xs font-medium">
                                            {dashboard.title}
                                        </span>
                                    </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value={activeTab} className="mt-0">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative">
                                    <div className="rounded-lg overflow-hidden bg-white border shadow-md">
                                        <img
                                            src={
                                                activeDashboard.img ||
                                                "/placeholder.svg"
                                            }
                                            width={800}
                                            height={600}
                                            alt={`${activeDashboard?.title} monitoring dashboard view`}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="font-semibold text-xl flex items-center justify-center gap-2 text-slate-800">
                                            {activeDashboard?.icon}
                                            {activeDashboard?.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mt-2">
                                            {activeDashboard?.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default MonitoringDashboard;

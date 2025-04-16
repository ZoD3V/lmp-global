import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import EdgeDcSection from "@/Components/EdgeDcSection";
import React from "react";
import rack from "../../../public/images/phylax/rack-kabinet.png";
import phylax from "../../../public/images/phylax/controller.png";
import {
    Zap,
    Thermometer,
    DatabaseIcon,
    LucideContainer,
    ShieldCheck,
    BarChart2,
    Cable,
    Bolt,
} from "lucide-react";

const Phylax = ({ banner }) => {
    const tabItems = [
        {
            value: "rack",
            label: "Rack Cabinet",
            icon: LucideContainer,
        },
        {
            value: "controller",
            label: "Controller Containment",
            icon: DatabaseIcon,
        },
    ];

    const solutions = [
        {
            id: "rack",
            title: "Rack Cabinet",
            description:
                "Advanced airflow management systems that optimize cooling efficiency and reduce operational costs.",
            image: rack,
            benefits: [
                {
                    icon: <Thermometer className="h-5 w-5 text-red-500" />,
                    iconBg: "bg-red-100",
                    title: "Precision Cooling",
                    description:
                        "Active cooling system with real-time temperature monitoring for high-density network equipment.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Power Optimization",
                    description:
                        "Smart power distribution reduces energy consumption by up to 30% compared to conventional systems.",
                },
                {
                    icon: <ShieldCheck className="h-5 w-5 text-blue-500" />, // Ganti Clock ke ShieldCheck
                    iconBg: "bg-blue-100",
                    title: "Hardware Protection",
                    description:
                        "Thermal management extends equipment lifespan by preventing overheating damage.",
                },
                {
                    icon: <BarChart2 className="h-5 w-5 text-emerald-500" />, // Ganti DollarSign ke BarChart2
                    iconBg: "bg-emerald-100",
                    title: "ROI Maximization",
                    description:
                        "Modular design reduces deployment costs by 40% with standardized configurations.",
                },
                {
                    icon: <Cable className="h-5 w-5 text-purple-500" />, // Tambahan benefit baru
                    iconBg: "bg-purple-100",
                    title: "Smart Cable Management",
                    description:
                        "Integrated routing channels with tool-less access for effortless maintenance.",
                },
            ],
        },
        {
            id: "controller",
            title: "Controller Containment",
            description:
                "Compact, self-contained systems that integrate computing, storage, networking, and cooling in a single enclosure.",
            image: phylax,
            benefits: [
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Instant Power Analytics",
                    description:
                        "Real-time energy monitoring system with centralized control. Track, analyze, and optimize electricity usage across all infrastructure points with millisecond precision.",
                },
            ],
        },
    ];
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <EdgeDcSection
                    title={"Data Center Infrastructure Solutions"}
                    description={
                        "Optimize your data center operations with our comprehensive range of infrastructure solutions designed to enhance efficiency, reduce costs, and ensure reliability."
                    }
                    dataProducts={solutions}
                    tabsConfig={tabItems}
                />
                <Footer />
            </div>
        </main>
    );
};

export default Phylax;

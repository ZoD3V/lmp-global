import Footer from "@/components/Common/Footer";
import Hero from "@/components/Common/Hero";
import Navbar from "@/components/Common/Navbar";
import EdgeDcSection from "@/components/EdgeDcSection";
import React from "react";
import rack from "../../../public/images/phylax/rack-kabinet.png";
import phylax from "../../../public/images/phylax/controller.png";
import {
    Zap,
    Thermometer,
    DatabaseIcon,
    LucideContainer,
    Bolt,
    Settings,
    DollarSign,
    Server,
} from "lucide-react";
import LogoBrandSection from "@/components/LogoBrandSection";
import phylaxLogo from "../../../public/images/logo/phylax.png";

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
                "Advanced airflow management systems that optimize cooling efficiency and reduce operational costs",
            image: rack,
            benefits: [
                {
                    icon: <Thermometer className="h-5 w-5 text-blue-500" />, // Changed to blue for cooling
                    iconBg: "bg-blue-100",
                    title: "High-Density Cooling",
                    description:
                        "Engineered solution designed for high-density network and storage switches and cabling",
                },
                {
                    icon: <Zap className="h-5 w-5 text-green-500" />, // Changed to green for energy efficiency
                    iconBg: "bg-green-100",
                    title: "Aisle Containment Integration",
                    description:
                        "Provides complete separation of hot and cold air within the cabinet to expand your data center Aisle Containment strategy to your network infrastructure",
                },
                {
                    icon: <Settings className="h-5 w-5 text-indigo-500" />, // Changed to settings for configuration
                    iconBg: "bg-indigo-100",
                    title: "Custom Airflow Configuration",
                    description:
                        "Order pre-configured for front-to-rear, front to-top, side-to-rear or side-to-top airflow",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />, // Changed to dollar for ROI
                    iconBg: "bg-emerald-100",
                    title: "Infrastructure Efficiency",
                    description:
                        "Includes large cable entry ports on the top panel, T-shaped cable guides on the front mounting rails and a front-to-rear cable manager to organize cables; vertical cable managers are available as accessories",
                },
                {
                    icon: <Server className="h-5 w-5 text-purple-500" />, // Changed to server for rack sizes
                    iconBg: "bg-purple-100",
                    title: "Flexible Rack Sizing",
                    description: "Available in 42U, 45U, 48U sizes",
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
                <LogoBrandSection logo={phylaxLogo} />
                <EdgeDcSection
                    title={"Data Center Infrastructure Solutions"}
                    description={
                        "Optimize your data center operations with our comprehensive range of infrastructure solutions designed to enhance efficiency, reduce costs, and ensure reliability."
                    }
                    dataProducts={solutions}
                    tabsConfig={tabItems}
                    customGrid={2}
                />
                <Footer />
            </div>
        </main>
    );
};

export default Phylax;

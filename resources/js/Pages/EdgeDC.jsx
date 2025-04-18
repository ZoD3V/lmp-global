import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import EdgeDcSection from "@/Components/EdgeDcSection";
import React from "react";
import {
    Zap,
    Thermometer,
    Recycle,
    Clock,
    DollarSign,
    Shield,
    BookCopyIcon,
    DatabaseIcon,
    LucideContainer,
} from "lucide-react";
import containment1 from "../../../public/images/containment.png";
import containment2 from "../../../public/images/containment2.png";
import containment3 from "../../../public/images/containment3.png";
import tkdn1 from "../../../public/images/edge-dc/tkdn1.webp";
import tkdndetail1 from "../../../public/images/edge-dc/tkdndetail1.webp";
import tkdn2 from "../../../public/images/edge-dc/tkdn2.webp";
import tkdndetail2 from "../../../public/images/edge-dc/tkdndetail2.webp";
import tkdn3 from "../../../public/images/edge-dc/tkdn3.webp";
import tkdn4 from "../../../public/images/edge-dc/tkdn4.webp";
import CertificateTKDN from "@/Components/CertificateTKDN";
import edgeXLogo from "../../../public/images/logo/edge-x.png";
import LogoBrandSection from "@/Components/LogoBrandSection";

const EdgeDC = ({ banner }) => {
    const certificates = [
        {
            id: "cert1",
            src: tkdn1,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert2",
            src: tkdndetail1,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert3",
            src: tkdn2,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert4",
            src: tkdndetail2,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert5",
            src: tkdn3,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert6",
            src: tkdn4,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
    ];

    const tabItems = [
        {
            value: "containment",
            label: "Containment Solutions",
            icon: LucideContainer,
        },
        {
            value: "micro",
            label: "Micro Data Centers",
            icon: DatabaseIcon,
        },
        {
            value: "modular",
            label: "Modular Data Centers",
            icon: BookCopyIcon,
        },
    ];

    const solutions = [
        {
            id: "containment",
            title: "Data Center Containment Solutions",
            description:
                "Advanced airflow management systems that optimize cooling efficiency and reduce operational costs.",
            image: containment1,
            benefits: [
                {
                    icon: <Thermometer className="h-5 w-5 text-red-500" />,
                    iconBg: "bg-red-100",
                    title: "Temperature Control",
                    description:
                        "Separates hot and cold air to prevent mixing, allowing cooling systems to operate at optimal efficiency and reducing energy consumption by up to 30%.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Energy Efficiency",
                    description:
                        "Reduces cooling power requirements by maintaining consistent airflow patterns, leading to significant reductions in electricity costs and carbon footprint.",
                },
                {
                    icon: <Clock className="h-5 w-5 text-blue-500" />,
                    iconBg: "bg-blue-100",
                    title: "Extended Equipment Lifespan",
                    description:
                        "Consistent cooling prevents thermal stress on servers and IT equipment, extending their operational life and reducing the frequency of replacement parts.",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
                    iconBg: "bg-emerald-100",
                    title: "Cost Reduction",
                    description:
                        "Lower cooling costs, reduced maintenance requirements, and fewer equipment failures translate to substantial operational savings.",
                },
            ],
        },
        {
            id: "micro",
            title: "Micro Data Center Solutions",
            description:
                "Compact, self-contained systems that integrate computing, storage, networking, and cooling in a single enclosure.",
            image: containment2,
            benefits: [
                {
                    icon: <Recycle className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Rapid Deployment",
                    description:
                        "Pre-engineered solutions that can be deployed in days rather than months, enabling quick response to changing business needs.",
                },
                {
                    icon: <Shield className="h-5 w-5 text-purple-500" />,
                    iconBg: "bg-purple-100",
                    title: "Enhanced Security",
                    description:
                        "Integrated physical security features protect critical IT assets in edge locations or branch offices where dedicated security staff may not be present.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Optimized Performance",
                    description:
                        "Purpose-built cooling and power systems designed specifically for the enclosed IT equipment ensure optimal performance.",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
                    iconBg: "bg-emerald-100",
                    title: "Reduced Footprint",
                    description:
                        "Compact design requires minimal floor space while delivering enterprise-grade computing capabilities.",
                },
            ],
        },
        {
            id: "modular",
            title: "Modular Data Center Solutions",
            description:
                "Scalable, containerized data centers that can be rapidly deployed and easily expanded as needs grow.",
            image: containment3,
            benefits: [
                {
                    icon: <Clock className="h-5 w-5 text-blue-500" />,
                    iconBg: "bg-blue-100",
                    title: "Rapid Scalability",
                    description:
                        "Additional capacity can be added in modular increments without disrupting existing operations, enabling just-in-time capacity expansion.",
                },
                {
                    icon: <Zap className="h-5 w-5 text-amber-500" />,
                    iconBg: "bg-amber-100",
                    title: "Predictable Performance",
                    description:
                        "Factory-tested systems deliver consistent, predictable performance regardless of deployment location.",
                },
                {
                    icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
                    iconBg: "bg-emerald-100",
                    title: "Capital Efficiency",
                    description:
                        "Pay-as-you-grow approach aligns capital expenditure with actual capacity needs rather than projected future requirements.",
                },
                {
                    icon: <Recycle className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Deployment Flexibility",
                    description:
                        "Can be deployed in non-traditional locations including outdoors, in warehouses, or in repurposed buildings.",
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
                <LogoBrandSection logo={edgeXLogo} />
                <EdgeDcSection
                    title={"Data Center Infrastructure Solutions"}
                    description={
                        "Optimize your data center operations with our comprehensive range of infrastructure solutions designed to enhance efficiency, reduce costs, and ensure reliability."
                    }
                    dataProducts={solutions}
                    tabsConfig={tabItems}
                    customGrid={3}
                />
                <CertificateTKDN certificates={certificates} />
                <Footer />
            </div>
        </main>
    );
};

export default EdgeDC;

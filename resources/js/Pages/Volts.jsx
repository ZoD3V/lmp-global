import React from "react";
import Footer from "@/components/Common/Footer";
import Hero from "@/components/Common/Hero";
import Navbar from "@/components/Common/Navbar";
import LogoBrandSection from "@/components/LogoBrandSection";
import SavvySection from "@/components/Volts/SavvySection";
import voltsLogo from "../../../public/images/logo/volts.png";
import savvyLogo from "../../../public/images/logo/savvy.png";
import EdgeDcSection from "@/components/EdgeDcSection";
import low from "../../../public/images/volts/low.png";
import middle from "../../../public/images/volts/middle.png";
import high from "../../../public/images/volts/high.png";
import { Bolt, DatabaseIcon, LucideContainer } from "lucide-react";
import MonitoringDashboard from "@/components/Volts/MonitoringDashboard";
import testimoni from "../../../public/images/testimoni/testimoni.webp";
import ResearchDevelopmentSection from "@/components/About/ResearchDevelopmentSection";
import Button from "@/components/Common/Button";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import VoltsSection from "@/components/Volts/VoltsSection";

const Volts = ({ banner, volts }) => {
    const tabItems = [
        {
            value: "low_capacity",
            label: "Low Capacity",
            icon: LucideContainer,
        },
        {
            value: "middle_capacity",
            label: "Middle Capacity",
            icon: DatabaseIcon,
        },
        {
            value: "high_capacity",
            label: "High Capacity",
            icon: DatabaseIcon,
        },
    ];

    const solutions = [
        {
            id: "low_capacity",
            title: "Low Capacity",
            description:
                "Compact and efficient system, designed for small devices, ensuring safety and reliability in voltage and grounding.",
            image: low,
            benefits: [
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Voltage & Surge Protection",
                    description:
                        "Protects devices from voltage spikes (>250V) and ensures safe operation by dampening surge voltages.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Voltage Stabilization",
                    description:
                        "Stabilizes incoming voltage to a steady 220V, ensuring safe and optimal operation of small devices.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Grounding Improvement",
                    description:
                        "Improves the electronic grounding value to below 1V, ensuring a safer and more reliable operation.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Noise Filtration",
                    description:
                        "Filters out electrical noise and disturbances caused by electromagnetic fields, ensuring smooth performance.",
                },
            ],
        },
        {
            id: "middle_capacity",
            title: "Middle Capacity",
            description:
                "A mid-range system ideal for handling moderate to heavy devices, with enhanced protection for industrial use.",
            image: middle,
            benefits: [
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Voltage & Surge Protection",
                    description:
                        "Protects devices from extreme voltage and surge (>250V), ensuring stable operation even in high-demand environments.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Voltage Stabilization",
                    description:
                        "Ensures steady 220V voltage, ideal for industrial machines or larger office devices that require a stable supply.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Grounding Improvement",
                    description:
                        "Enhances grounding to prevent issues with electrical interference and ensures optimal functioning of equipment.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Noise Filtration",
                    description:
                        "Effectively filters out noise and electromagnetic disturbances, keeping systems running without interference.",
                },
            ],
        },
        {
            id: "high_capacity",
            title: "High Capacity",
            description:
                "A robust solution designed for high-power devices and critical infrastructure, providing advanced protection for sensitive systems.",
            image: high,
            benefits: [
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Voltage & Surge Protection",
                    description:
                        "Protects high-capacity systems from severe voltage fluctuations and surges, preventing damage to critical equipment.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Voltage Stabilization",
                    description:
                        "Maintains a steady 220V, ensuring the smooth operation of large-scale industrial equipment and data centers.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Grounding Improvement",
                    description:
                        "Improves grounding to under 1V, safeguarding high-capacity devices from electrical faults and enhancing safety.",
                },
                {
                    icon: <Bolt className="h-5 w-5 text-teal-500" />,
                    iconBg: "bg-teal-100",
                    title: "Noise Filtration",
                    description:
                        "Filters out high-level noise and electromagnetic interference, ensuring uninterrupted operation of power-hungry devices.",
                },
            ],
        },
    ];

    const dataTestimoni = [
        {
            img: testimoni,
            title: "Testimonials & Use Cases from Various Industries",
            description:
                "We don’t just design data center solutions — we help companies maintain the performance, efficiency, and resilience of their digital infrastructure.",
            buttonLink: "/testimoni",
            showButton: true,
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
                <LogoBrandSection logo={voltsLogo} />
                <VoltsSection voltsData={volts} />
                <EdgeDcSection
                    title={""}
                    description={""}
                    dataProducts={solutions}
                    tabsConfig={tabItems}
                    customGrid={3}
                />
                <MonitoringDashboard />
                <LogoBrandSection logo={savvyLogo} />
                <SavvySection />
                <ResearchDevelopmentSection data={dataTestimoni} />
                <div className="flex max-w-[1200px] px-4 md:px-6 xl:px-0 pb-16 w-full mx-auto">
                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:ml-auto w-full lg:w-fit"
                    >
                        <Button
                            buttonText="All Product"
                            buttonLink={"/product"}
                            showArrow={true}
                            outline={true}
                        />
                    </motion.div>
                </div>
                <Footer />
            </div>
        </main>
    );
};

export default Volts;

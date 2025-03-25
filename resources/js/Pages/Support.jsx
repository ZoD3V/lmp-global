import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import ServicesSection from "../Components/ServicesSection";
import { AiOutlineFileText } from "react-icons/ai";
import { GrFan } from "react-icons/gr";
import { CiServer } from "react-icons/ci";
import SolutionSection from "../Components/SolutionSection";
import CentersSection from "../Components/CentersSection";

const Support = ({ banner }) => {
    const featuresData = [
        {
            title: "Technical Support",
            description:
                "Plan and structure work how you want. Quickly organizing tasks.",
            icon: <CiServer size={30} />,
            iconColor: "text-indigo-600",
        },
        {
            title: "Consultant products",
            description:
                "Bring all your tools and data together. Also join with hundreds of other apps.",
            icon: <GrFan size={30} />,
            iconColor: "text-pink-600",
        },
        {
            title: "Consultant Data Center",
            description:
                "Get real time insight into progress and allows teams to track their work habits.",
            icon: <AiOutlineFileText size={30} />,
            iconColor: "text-teal-600",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP Support"
                    description="Locate your specific product for the latest user manuals, system application guides, data sheets, warranties, software downloads and more."
                />
                <ServicesSection features={featuresData} />
                <SolutionSection
                    banner={banner}
                    title="Contact Support"
                    description="Get ongoing support for products already purchased. (021 888869727)"
                />
                <CentersSection />
                <Footer />
            </div>
        </main>
    );
};

export default Support;

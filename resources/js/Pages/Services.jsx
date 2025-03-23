import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import ServicesSection from "../Components/ServicesSection";
import ServicesRelatedSection from "../Components/ServiceRelatedSection";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.jpeg";
import product3 from "../../../public/images/product3.png";
import { AiOutlineFileText } from "react-icons/ai";
import { GrFan } from "react-icons/gr";
import { CiServer } from "react-icons/ci";

const Services = ({ banner }) => {
    const featuresData = [
        {
            title: "Data Center Design",
            description:
                "Plan and structure work how you want. Quickly organizing tasks.",
            icon: <CiServer size={30} />,
            iconColor: "text-indigo-600",
        },
        {
            title: "Data Center Cooling Management Assessment",
            description:
                "Bring all your tools and data together. Also join with hundreds of other apps.",
            icon: <GrFan size={30} />,
            iconColor: "text-pink-600",
        },
        {
            title: "Data Reporting",
            description:
                "Get real time insight into progress and allows teams to track their work habits.",
            icon: <AiOutlineFileText size={30} />,
            iconColor: "text-teal-600",
        },
    ];

    const features = [
        {
            image: product3,
            name: "Design Engineering",
            desc: "Learn about advanced design principles.",
            link: "/design-engineering",
        },
        {
            image: product1,
            name: "HVAC Services",
            desc:
                "Explore our HVAC installation and maintenance services.",
            link: "/hvac-services",
        },
        {
            image: product2,
            name: "Connectivity",
            desc: "Get connected with high-speed data solutions.",
            link: "/connectivity",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP Service & Learning Center"
                    description="Whether it's engineering, on-site project management, energy-consumption monitoring, or something else, LMP offers a wide ran ge of programs and services to support critical infrastructure needs."

                />
                <ServicesSection features={featuresData} />
                <ServicesRelatedSection
                    features={features}
                    title="Learning Center"
                    showButton={false}
                />
                <Footer />
            </div>
        </main>
    );
};

export default Services;

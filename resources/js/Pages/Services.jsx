import React from "react";
import product1 from "../../../public/images/learning-center/connectivity.png";
import product2 from "../../../public/images/learning-center/designengineering.jpeg";
import product3 from "../../../public/images/learning-center/hvac.png";
import Hero from "@/Components/Common/Hero";
import ServicesSection from "@/Components/ServicesSection";
import ServicesRelatedSection from "@/Components/ServiceRelatedSection";
import Layout from "@/Layouts/Layouts";

const Services = ({ banner }) => {
    const features = [
        {
            image: product3,
            name: "Design Engineering",
            desc: "Learn about advanced design principles.",
            link: "/design-engineering",
        },
        {
            image: product2,
            name: "HVAC Services",
            desc: "Explore our HVAC installation and maintenance services.",
            link: "/hvac-services",
        },
        {
            image: product1,
            name: "Connectivity",
            desc: "Get connected with high-speed data solutions.",
            link: "/connectivity",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <ServicesSection />
                <ServicesRelatedSection
                    features={features}
                    title="Learning Center"
                    showButton={false}
                />
            </div>
        </main>
    );
};

Services.layout = (page) => <Layout children={page} />;
export default Services;

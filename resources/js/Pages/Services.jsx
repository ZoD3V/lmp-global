import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import ServicesSection from "../Components/ServicesSection";
import ServicesRelatedSection from "../Components/ServiceRelatedSection";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.jpeg";
import product3 from "../../../public/images/product3.png";;

const Services = ({ banner }) => {

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
                    title={banner[0].name}
                    description={banner[0].description}

                />
                <ServicesSection />
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

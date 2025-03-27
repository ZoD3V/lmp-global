import React from "react";
import SupportServiceSection from "@/Components/Support/SupportServiceSection";
import SolutionSection from "@/Components/SolutionSection";
import CentersSection from "@/Components/Support/CentersSection";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";

const Support = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <SupportServiceSection />
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

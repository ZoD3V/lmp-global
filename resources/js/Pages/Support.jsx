import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import SolutionSection from "../Components/SolutionSection";
import CentersSection from "../Components/CentersSection";
import SupportServiceSection from "@/Components/SupportServiceSection";

const Support = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP Support"
                    description="Locate your specific product for the latest user manuals, system application guides, data sheets, warranties, software downloads and more."
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

import React from "react";
import SupportServiceSection from "@/components/Support/SupportServiceSection";
import SolutionSection from "@/components/SolutionSection";
import CentersSection from "@/components/Support/CentersSection";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import Footer from "@/components/Common/Footer";

const Support = ({ banner, Supportbanner }) => {
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
                    banner={Supportbanner}
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

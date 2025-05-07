import React from "react";
import AdvantageSection from "@/components/AdvantageSection";
import RenewableDataCentersSection from "@/components/RenewableDataCentersSection";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import Footer from "@/components/Common/Footer";

const Energy = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <RenewableDataCentersSection />
                <AdvantageSection />
                <Footer />
            </div>
        </main>
    );
};

export default Energy;

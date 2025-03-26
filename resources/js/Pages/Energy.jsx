import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import AdvantageSection from "@/Components/AdvantageSection";
import RenewableDataCentersSection from "@/Components/RenewableDataCentersSection";

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

import React from "react";
import KyrosMiraeServiceSection from "@/Components/LmpKyrosMirae/KyrosMiraeServiceSection";
import CoreTechnology from "@/Components/LmpKyrosMirae/CoreTechnology";
import KyrosLifecycle from "@/Components/LmpKyrosMirae/KyrosLifecycle";
import DwinTechnologySection from "@/Components/LmpKyrosMirae/DwinTechnologySection";
import DigitalTwinsDcVerse from "@/Components/LmpKyrosMirae/DigitalTwinsDcVerse";
import ChillerPlantDataHall from "@/Components/LmpKyrosMirae/ChillerPlantDataHall";
import FeatureHighlights from "@/Components/LmpKyrosMirae/FeatureHighlights";
import ThermalRisk from "@/Components/LmpKyrosMirae/ThermalRisk";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";

const KyrosMirae = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <KyrosMiraeServiceSection />
                <CoreTechnology />
                <KyrosLifecycle />
                <DwinTechnologySection />
                <DigitalTwinsDcVerse />
                <ChillerPlantDataHall />
                <ThermalRisk />
                <FeatureHighlights />
                <Footer />
            </div>
        </main>
    );
};

export default KyrosMirae;

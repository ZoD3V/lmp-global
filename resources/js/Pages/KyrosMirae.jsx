import React from "react";
import KyrosMiraeServiceSection from "@/components/LmpKyrosMirae/KyrosMiraeServiceSection";
import CoreTechnology from "@/components/LmpKyrosMirae/CoreTechnology";
import KyrosLifecycle from "@/components/LmpKyrosMirae/KyrosLifecycle";
import DwinTechnologySection from "@/components/LmpKyrosMirae/DwinTechnologySection";
import DigitalTwinsDcVerse from "@/components/LmpKyrosMirae/DigitalTwinsDcVerse";
import ChillerPlantDataHall from "@/components/LmpKyrosMirae/ChillerPlantDataHall";
import FeatureHighlights from "@/components/LmpKyrosMirae/FeatureHighlights";
import ThermalRisk from "@/components/LmpKyrosMirae/ThermalRisk";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import Footer from "@/components/Common/Footer";
import SuccessStories from "@/components/LmpKyrosMirae/SuccessStories";
import LogoBrandSection from "@/components/LogoBrandSection";
import kyrosLogo from "../../../public/images/logo/kyros-mirae.png";
import redDotsLogo from "../../../public/images/logo/red-dots.png";

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
                <LogoBrandSection logo={kyrosLogo} />
                <KyrosMiraeServiceSection />
                <SuccessStories />
                <LogoBrandSection logo={redDotsLogo} customClass="pb-16"/>
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

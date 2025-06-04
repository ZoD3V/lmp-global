import React from "react";
import KyrosMiraeServiceSection from "@/Components/LmpKyrosMirae/KyrosMiraeServiceSection";
import CoreTechnology from "@/Components/LmpKyrosMirae/CoreTechnology";
import KyrosLifecycle from "@/Components/LmpKyrosMirae/KyrosLifecycle";
import DwinTechnologySection from "@/Components/LmpKyrosMirae/DwinTechnologySection";
import DigitalTwinsDcVerse from "@/Components/LmpKyrosMirae/DigitalTwinsDcVerse";
import ChillerPlantDataHall from "@/Components/LmpKyrosMirae/ChillerPlantDataHall";
import FeatureHighlights from "@/Components/LmpKyrosMirae/FeatureHighlights";
import ThermalRisk from "@/Components/LmpKyrosMirae/ThermalRisk";
import Hero from "@/Components/Common/Hero";
import SuccessStories from "@/Components/LmpKyrosMirae/SuccessStories";
import LogoBrandSection from "@/Components/LogoBrandSection";
import kyrosLogo from "../../../public/images/logo/kyros-mirae.png";
import redDotsLogo from "../../../public/images/logo/red-dots.png";
import Layout from "@/Layouts/Layouts";

const KyrosMirae = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
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
            </div>
        </main>
    );
};

KyrosMirae.layout = (page) => <Layout children={page} />;
export default KyrosMirae;

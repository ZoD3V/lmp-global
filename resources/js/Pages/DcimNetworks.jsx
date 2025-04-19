import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import AwardsCertification from "@/Components/DCIM/AwardsCertification";
import FeaturesOperational from "@/Components/DCIM/FeaturesOperational";
import RackServer from "@/Components/DCIM/RackServer";
import RiskMitigation from "@/Components/DCIM/RiskMitigation";
import SpeedDeployment from "@/Components/DCIM/SpeedDeployment";
import VisibilityDcim from "@/Components/DCIM/VisibilityDcim";
import XPediTePlatform from "@/Components/DCIM/XPediTePlatform";
import ritLogo from "../../../public/images/logo/rit.png";
import React from "react";
import LogoBrandSection from "@/Components/LogoBrandSection";

const DcimNetworks = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <LogoBrandSection logo={ritLogo} />
                <AwardsCertification />
                <XPediTePlatform />
                <VisibilityDcim />
                <FeaturesOperational />
                <SpeedDeployment />
                <RiskMitigation />
                <RackServer />
                <Footer />
            </div>
        </main>
    );
};

export default DcimNetworks;

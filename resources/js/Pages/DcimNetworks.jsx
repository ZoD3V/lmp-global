import Footer from "@/components/Common/Footer";
import Hero from "@/components/Common/Hero";
import Navbar from "@/components/Common/Navbar";
import AwardsCertification from "@/components/DCIM/AwardsCertification";
import FeaturesOperational from "@/components/DCIM/FeaturesOperational";
import RackServer from "@/components/DCIM/RackServer";
import RiskMitigation from "@/components/DCIM/RiskMitigation";
import SpeedDeployment from "@/components/DCIM/SpeedDeployment";
import VisibilityDcim from "@/components/DCIM/VisibilityDcim";
import XPediTePlatform from "@/components/DCIM/XPediTePlatform";
import ritLogo from "../../../public/images/logo/rit.png";
import React from "react";
import LogoBrandSection from "@/components/LogoBrandSection";

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

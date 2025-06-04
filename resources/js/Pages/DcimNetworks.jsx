import Hero from "@/Components/Common/Hero";
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
import Layout from "@/Layouts/Layouts";

const DcimNetworks = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
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
            </div>
        </main>
    );
};

DcimNetworks.layout = (page) => <Layout children={page} />;

export default DcimNetworks;

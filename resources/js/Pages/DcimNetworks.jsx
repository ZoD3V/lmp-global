import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import FeaturesOperational from "@/Components/DCIM/FeaturesOperational";
import SpeedDeployment from "@/Components/DCIM/SpeedDeployment";
import VisibilityDcim from "@/Components/DCIM/VisibilityDcim";
import XPediTePlatform from "@/Components/DCIM/XPediTePlatform";
import React from "react";

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
                <XPediTePlatform />
                <VisibilityDcim />
                <FeaturesOperational />
                <SpeedDeployment />
                <Footer />
            </div>
        </main>
    );
};

export default DcimNetworks;

import React from "react";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import Footer from "@/components/Common/Footer";
import CentriniumSection from "@/components/Network/CentriniumSection";
import NetworkSection from "@/components/Network/NetworkSection";
import SavvyProgrammes from "@/components/Network/SavvyProgrammes";
import CertificateTKDN from "@/components/CertificateTKDN";
import tkdn1 from "../../../public/images/network/tkdn1.webp";
import tkdndetail1 from "../../../public/images/network/tkdndetail1.webp";
import tkdn2 from "../../../public/images/network/tkdn2.webp";
import tkdndetail2 from "../../../public/images/network/tkdndetail2.webp";
import tkdn3 from "../../../public/images/network/tkdn3.webp";
import LogoBrandSection from "@/components/LogoBrandSection";
import lmpLogo from "../../../public/images/logo/logo_lmp.png";

const Networks = ({ banner, networks }) => {
    const certificates = [
        {
            id: "cert1",
            src: tkdn1,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert2",
            src: tkdndetail1,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert3",
            src: tkdn2,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert4",
            src: tkdndetail2,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
        {
            id: "cert5",
            src: tkdn3,
            alt: "TKDN Certificate - Optical Patch Cord for FTTH",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <LogoBrandSection logo={lmpLogo} />
                {networks[0] && <NetworkSection networkProduct={networks[0]} />}
                {networks[1] && (
                    <CentriniumSection networkProduct={networks[1]} />
                )}
                <SavvyProgrammes />
                <CertificateTKDN certificates={certificates} />
                <Footer />
            </div>
        </main>
    );
};

export default Networks;

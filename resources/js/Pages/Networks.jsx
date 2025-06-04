import React from "react";
import Hero from "@/Components/Common/Hero";
import CentriniumSection from "@/Components/Network/CentriniumSection";
import NetworkSection from "@/Components/Network/NetworkSection";
import SavvyProgrammes from "@/Components/Network/SavvyProgrammes";
import CertificateTKDN from "@/Components/CertificateTKDN";
import tkdn1 from "../../../public/images/network/tkdn1.webp";
import tkdndetail1 from "../../../public/images/network/tkdndetail1.webp";
import tkdn2 from "../../../public/images/network/tkdn2.webp";
import tkdndetail2 from "../../../public/images/network/tkdndetail2.webp";
import tkdn3 from "../../../public/images/network/tkdn3.webp";
import LogoBrandSection from "@/Components/LogoBrandSection";
import lmpLogo from "../../../public/images/logo/logo_lmp.png";
import Layout from "@/Layouts/Layouts";

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
            </div>
        </main>
    );
};

Networks.layout = (page) => <Layout children={page} />;
export default Networks;

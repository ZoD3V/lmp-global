import React from "react";
import Hero from "@/Components/Common/Hero";
import PolymerSection from "@/Components/PolymerSection";
import tkdn1 from "../../../public/images/polymer/tkdn1.webp";
import CertificateTKDN from "@/Components/CertificateTKDN";
import Layout from "@/Layouts/Layouts";

const Polymer = ({ banner, polymer }) => {
    const certificates = [
        {
            id: "cert1",
            src: tkdn1,
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
                <PolymerSection polymerData={polymer} />
                <CertificateTKDN certificates={certificates} />
            </div>
        </main>
    );
};

Polymer.layout = (page) => <Layout children={page} />;
export default Polymer;

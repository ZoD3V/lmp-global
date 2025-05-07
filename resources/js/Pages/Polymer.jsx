import React from "react";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import PolymerSection from "@/components/PolymerSection";
import tkdn1 from "../../../public/images/polymer/tkdn1.webp";
import CertificateTKDN from "@/components/CertificateTKDN";

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
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <PolymerSection polymerData={polymer} />
                <CertificateTKDN certificates={certificates} />
                <Footer />
            </div>
        </main>
    );
};

export default Polymer;

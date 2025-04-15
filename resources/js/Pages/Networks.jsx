import React from "react";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";
import CentriniumSection from "@/Components/Network/CentriniumSection";
import NetworkSection from "@/Components/Network/NetworkSection";
import SavvyProgrammes from "@/Components/Network/SavvyProgrammes";

const Networks = ({ banner, networks }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                {networks[0] && <NetworkSection networkProduct={networks[0]} />}
                {networks[1] && (
                    <CentriniumSection networkProduct={networks[1]} />
                )}
                <SavvyProgrammes />
                <Footer />
            </div>
        </main>
    );
};

export default Networks;

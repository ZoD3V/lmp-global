import React from "react";
import NetworkSection from "@/Components/NetworkSection";
import CentriniumSection from "@/Components/CentriniumSection";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";

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
                {networks[1] && <CentriniumSection networkProduct={networks[0]} />}
                <Footer />
            </div>
        </main>
    );
};

export default Networks;

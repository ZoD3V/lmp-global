import React from "react";
import Hero from "../Components/Common/Hero";
import Navbar from "../Components/Common/Navbar";
import Footer from "../components/Common/Footer";
import NetworkSection from "@/Components/NetworkSection";
import CentriniumSection from "@/Components/CentriniumSection";

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

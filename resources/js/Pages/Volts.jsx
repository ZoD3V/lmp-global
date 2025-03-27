import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import VoltsSection from "@/Components/VoltsSection";
import React from "react";

const Volts = ({ banner, volts }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <VoltsSection voltsData={volts} />
                <Footer />
            </div>
        </main>
    );
};

export default Volts;

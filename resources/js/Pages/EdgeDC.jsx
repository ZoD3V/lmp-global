import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import EdgeDcSection from "../Components/EdgeDcSection";

const EdgeDC = ({ banner, edgeDc }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP EdgeDC"
                    description="Locate your specific product for the latest user manuals, system application guides, data sheets, warranties, software downloads and more."
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                />
                <EdgeDcSection edgeDc={edgeDc} />
                <Footer />
            </div>
        </main>
    );
};

export default EdgeDC;

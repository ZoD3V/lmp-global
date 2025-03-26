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
                    title={banner[0].name}
                    description={banner[0].description}

                />
                <EdgeDcSection edgeDc={edgeDc} />
                <Footer />
            </div>
        </main>
    );
};

export default EdgeDC;

import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import EdgeDcSection from "@/Components/EdgeDcSection";
import React from "react";

const EdgeDC = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}

                />
                <EdgeDcSection />
                <Footer />
            </div>
        </main>
    );
};

export default EdgeDC;

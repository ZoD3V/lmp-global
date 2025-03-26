import React from "react";
import Hero from "../Components/Common/Hero";
import Navbar from "../Components/Common/Navbar";
import Footer from "../components/Common/Footer";
import PolymerSection from "../Components/PolymerSection";

const Polymer = ({ banner, polymer }) => {
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
                <Footer />
            </div>
        </main>
    );
};

export default Polymer;

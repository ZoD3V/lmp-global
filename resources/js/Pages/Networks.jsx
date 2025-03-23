import React, { useEffect } from "react";
import Hero from "../Components/Common/Hero";
import Navbar from "../Components/Common/Navbar";
import Footer from "../components/Common/Footer";
import NetworkProduct from "../Components/NetworkProduct";

const Networks = ({ banner, networks }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP Networks"
                    description="LMP Networks provide Ultra High Density Solution for connectivity in Data Center. Optimizing Space - Air flow and Efficiency in Cooling Systems & Energy consumption."

                />
                <NetworkProduct networkDataArray={networks} />
                <Footer />
            </div>
        </main>
    );
};

export default Networks;

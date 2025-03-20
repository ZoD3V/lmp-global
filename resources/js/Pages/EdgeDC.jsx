import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "../components/Common/Footer";

const CSR = ({ banner, csr }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="EDGE DC"
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                    description="Optimize your data center performance with high-quality products from Lmp Networks. We provide EDGE data center, Micro data center, UPS & power management, to advanced security solutions to ensure your data center operations remain reliable, efficient, and energy efficient."
                />
                <Footer />
            </div>
        </main>
    );
};

export default CSR;

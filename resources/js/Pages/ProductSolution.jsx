import React from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Hero from "../Components/Common/Hero";
import ProductSection from "../Components/ProductSection";
import SolutionSection from "../Components/SolutionSection";
import ServiceProductSection from "../Components/ServicesProductSection";
import CustomizeSection from "../Components/CustomizeSection";

const ProductSolution = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="Product & Solution"
                    description="LMP offers essential infrastructure technology and specialized solutions that can be swiftly implemented to meet your business needs."
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                />
                <ProductSection />
                <SolutionSection
                    banner={banner}
                    title="Data Center Solution"
                    description="We present LMP EDGE DC, a revolutionary solution to enhance efficiency, improve performance, and optimize your best Edge data center. With an approach that brings data processing closer to its source, we deliver remarkable latency reduction for maximum results in energy, cooling, and connectivity."
                />
                <ServiceProductSection />
                <CustomizeSection />
                <Footer />
            </div>
        </main>
    );
};

export default ProductSolution;

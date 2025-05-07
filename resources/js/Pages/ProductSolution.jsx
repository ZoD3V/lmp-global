import React from "react";
import ProductSection from "@/components/ProductSolution/ProductSection";
import SolutionSection from "@/components/SolutionSection";
import ServiceProductSection from "@/components/ProductSolution/ServicesProductSection";
import CustomizeSection from "@/components/ProductSolution/CustomizeSection";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import Footer from "@/components/Common/Footer";

const ProductSolution = ({ banner, categories }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <ProductSection dataProduct={categories} />
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

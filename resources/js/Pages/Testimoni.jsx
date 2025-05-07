import React from "react";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Common/Hero";
import Footer from "@/components/Common/Footer";
import TestimoniSection from "@/components/Testimoni/TestimoniSection";

const Testimoni = ({ banner, testimonials }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                {testimonials.map((section, index) => (
                    <TestimoniSection key={index} useCases={section} />
                ))}
                <Footer />
            </div>
        </main>
    );
};

export default Testimoni;

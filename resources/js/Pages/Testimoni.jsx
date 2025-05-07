import React from "react";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";
import TestimoniSection from "@/Components/Testimoni/TestimoniSection";

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

import React from "react";
import Hero from "@/Components/Common/Hero";
import TestimoniSection from "@/Components/Testimoni/TestimoniSection";
import Layout from "@/Layouts/Layouts";

const Testimoni = ({ banner, testimonials }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                {testimonials.map((section, index) => (
                    <TestimoniSection key={index} useCases={section} />
                ))}
            </div>
        </main>
    );
};

Testimoni.layout = (page) => <Layout children={page} />;
export default Testimoni;

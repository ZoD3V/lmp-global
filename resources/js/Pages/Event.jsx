import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import Navbar from "@/Components/Common/Navbar";
import React from "react";

const Event = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />

                <Footer />
            </div>
        </main>
    );
};

export default Event;

import Footer from "@/components/Common/Footer";
import Hero from "@/components/Common/Hero";
import Navbar from "@/components/Common/Navbar";
import EventSection from "@/components/Event/EventSection";
import React from "react";

const Event = ({ banner, videos }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <EventSection Event={videos} />
                <Footer />
            </div>
        </main>
    );
};

export default Event;

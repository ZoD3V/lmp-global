import Hero from "@/Components/Common/Hero";
import EventSection from "@/Components/Event/EventSection";
import Layout from "@/Layouts/Layouts";
import React from "react";

const Event = ({ banner, videos }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <EventSection Event={videos} />
            </div>
        </main>
    );
};

Event.layout = (page) => <Layout children={page} />;
export default Event;

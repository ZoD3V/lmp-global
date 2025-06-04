import React from "react";
import AdvantageSection from "@/Components/AdvantageSection";
import RenewableDataCentersSection from "@/Components/RenewableDataCentersSection";
import Hero from "@/Components/Common/Hero";
import Layout from "@/Layouts/Layouts";

const Energy = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <RenewableDataCentersSection />
                <AdvantageSection />
            </div>
        </main>
    );
};

Energy.layout = (page) => <Layout children={page} />;
export default Energy;

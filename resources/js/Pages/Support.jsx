import React from "react";
import SupportServiceSection from "@/Components/Support/SupportServiceSection";
import SolutionSection from "@/Components/SolutionSection";
import CentersSection from "@/Components/Support/CentersSection";
import Hero from "@/Components/Common/Hero";
import Layout from "@/Layouts/Layouts";

const Support = ({ banner, Supportbanner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <SupportServiceSection />
                <SolutionSection
                    banner={Supportbanner}
                    title="Contact Support"
                    description="Get ongoing support for products already purchased. (021 888869727)"
                />
                <CentersSection />
            </div>
        </main>
    );
};

Support.layout = (page) => <Layout children={page} />;
export default Support;

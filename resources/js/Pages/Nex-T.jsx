import LogoBrandSection from "@/Components/LogoBrandSection";
import NexTIndustries from "@/Components/NexT/NexTIndustries";
import NextTSection from "@/Components/NexT/NexTSection";
import edgeDcLogo from "../../../public/images/logo/edge-dc.png";
import React from "react";
import Layout from "@/Layouts/Layouts";

const NextT = ({ nexT }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <LogoBrandSection logo={edgeDcLogo} customClass="mt-16" customWidth="w-64" />
                <NextTSection nexT={nexT} />
                <NexTIndustries />
            </div>
        </main>
    );
};

NextT.layout = (page) => <Layout children={page} />;
export default NextT;

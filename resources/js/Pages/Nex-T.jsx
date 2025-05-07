import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import LogoBrandSection from "@/components/LogoBrandSection";
import NexTIndustries from "@/components/NexT/NexTIndustries";
import NextTSection from "@/components/NexT/NexTSection";
import edgeDcLogo from "../../../public/images/logo/edge-dc.png";
import React from "react";

const NextT = ({ nexT }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <LogoBrandSection logo={edgeDcLogo} customClass="mt-16" customWidth="w-64" />
                <NextTSection nexT={nexT} />
                <NexTIndustries />
                <Footer />
            </div>
        </main>
    );
};

export default NextT;

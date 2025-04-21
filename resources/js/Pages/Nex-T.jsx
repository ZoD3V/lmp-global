import Footer from "@/Components/Common/Footer";
import Navbar from "@/Components/Common/Navbar";
import LogoBrandSection from "@/Components/LogoBrandSection";
import NexTIndustries from "@/Components/NexT/NexTIndustries";
import NextTSection from "@/Components/NexT/NexTSection";
import edgeDcLogo from "../../../public/images/logo/edge-dc.png";
import React from "react";

const NextT = ({ nexT }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <LogoBrandSection logo={edgeDcLogo} customClass="mt-16" />
                <NextTSection nexT={nexT} />
                <NexTIndustries />
                <Footer />
            </div>
        </main>
    );
};

export default NextT;

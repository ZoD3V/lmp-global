import Footer from "@/Components/Common/Footer";
import Navbar from "@/Components/Common/Navbar";
import NexTIndustries from "@/Components/NexT/NexTIndustries";
import NextTSection from "@/Components/NexT/NexTSection";
import React from "react";

const NextT = ({ nexT }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <NextTSection nexT={nexT} />
                <NexTIndustries />
                <Footer />
            </div>
        </main>
    );
};

export default NextT;

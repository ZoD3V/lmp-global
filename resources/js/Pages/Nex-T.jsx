import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import NextTSection from "../Components/NexT/NexTSection";

const NextT = ({ nexT }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <NextTSection nexT={nexT} />
                <Footer />
            </div>
        </main>
    );
};

export default NextT;

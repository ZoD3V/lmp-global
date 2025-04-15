import React from "react";
import AirConditioning from "@/Components/AirConditioning";
import EnergyEfficiency from "@/Components/EnergyEfficiency";
import IntelligentControlSystems from "@/Components/IntelligentControlSystems";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";
import { Button } from "@/Components/ui/button";
import TypesPAC from "@/Components/PAC/TypesPAC";

const PAC = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <TypesPAC />
                <AirConditioning />
                <EnergyEfficiency />
                <IntelligentControlSystems />
                <section className="w-full py-16 bg-primary text-primary-foreground">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Optimize Your Data Center?
                                </h2>
                                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our experts will help you design the perfect
                                    cooling solution for your specific needs.
                                </p>
                            </div>
                            <div className="mx-auto w-full max-w-sm space-y-2">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="w-full"
                                >
                                    Request a Consultation
                                </Button>
                                <p className="text-xs">
                                    Our team typically responds within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
};

export default PAC;

import React from "react";
import dcVerse1 from "../../../../public/images/dc-verse-1.png";
import dcVerse2 from "../../../../public/images/dc-verse-2.png";

const DigitalTwinsDcVerse = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        LMP Digital Twins Solution : DCVERSE
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        The Digital Twin Platform That
                        <span className="text-red-600 font-semibold">
                            Manage
                        </span>
                        The Infrastructure Risk,
                        <span className="text-blue-600 font-semibold">
                            Optimised
                        </span>
                        The Energy performance &
                        <span className="text-red-600 font-semibold">
                            Accelerates
                        </span>
                        Your Sustainability Journey
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="aspect-video bg-black relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={dcVerse1}
                                    alt="Simulation & Control Indoor & Outdoor"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="aspect-video bg-black relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={dcVerse2}
                                    alt="Digital Native Model Generation by AIGC"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="aspect-video bg-black relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={dcVerse1}
                                    alt="High-speed CFD Indoor Simulation For Smart Computing DC"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="aspect-video bg-black relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={dcVerse1}
                                    alt="Multi-Dimensional Data Monitoring And Statistics"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalTwinsDcVerse;

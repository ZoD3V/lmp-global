import React from "react";
import { Check } from "lucide-react";
import savvyFurniture from "../../../../public/images/volts/savy-furniture.png";
import savvyProduct from "../../../../public/images/volts/savy-product.png";

const SavvySection = () => {
    return (
        <section className="w-full bg-white py-16">
            {/* Hero Section */}
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            SAVVY
                        </h1>
                        <p className="text-lg text-justify text-gray-600 leading-relaxed">
                            Introducing SAVVY, Your Ultimate Energy Save. Unlock
                            the potential of sustainable living with SAVVY, the
                            cutting-edge solution to energy savings for your air
                            conditioning, refrigerator, water pump, and chiller
                            systems.
                        </p>
                        <p className="text-lg text-justify text-gray-600 leading-relaxed">
                            Designed to optimize the performance of cooling and
                            pumping equipment, SAVVY intelligently reduces
                            energy consumption, leading to significant cost
                            savings while contributing to a greener environment.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={savvyFurniture}
                            alt="Modern living room with air conditioning unit"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Advantage Section */}
            <div className="bg-gray-50 py-16">
                <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative w-64 h-64 bg-white rounded-full p-8 shadow-lg flex items-center justify-center">
                                <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                                    <div className="w-40 h-40 bg-teal-50 rounded-full flex items-center justify-center">
                                        <img
                                            src={savvyProduct}
                                            alt="SAVVY device"
                                            width={120}
                                            height={120}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                The SAVVY Advantage
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                With SAVVY, you're not just investing in an
                                energy-saving device—you're investing in a
                                smarter, more sustainable future. Start saving
                                today with a device that works for you and the
                                environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Why Choose Savvy */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Why Choose Savvy?
                        </h2>
                        <div className="space-y-4">
                            {[
                                "Smart Energy Management",
                                "Versatility Across Appliances",
                                "Plug and Play",
                                "Eco-Friendly and Cost-Efficient",
                                "Durability and Longevity",
                            ].map((feature, index) => (
                                <FeatureItem key={index}>
                                    <p className="text-lg text-gray-700">
                                        {index + 1}. {feature}
                                    </p>
                                </FeatureItem>
                            ))}
                        </div>
                    </div>

                    {/* Savvy Key Features */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Savvy Key Features
                        </h2>
                        <div className="space-y-4">
                            {[
                                "Real-time Energy Monitoring",
                                "Smart Control Algorithms",
                                "Universal Compatibility",
                                "Compact, Sleek Design",
                            ].map((feature, index) => (
                                <FeatureItem key={index}>
                                    <p className="text-lg text-gray-700">
                                        {index + 1}. {feature}
                                    </p>
                                </FeatureItem>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function FeatureItem({ children }) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 bg-blue-500 text-white rounded-full p-1 flex-shrink-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>{children}</div>
        </li>
    );
}

export default SavvySection;

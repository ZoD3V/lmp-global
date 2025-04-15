import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import kementrian from "../../../../public/images/network/kementrianRepublikIndonesia.png";

const SavvyProgrammes = () => {
    return (
        <section className="w-full py-16">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <Card className="bg-black text-white border-zinc-800 overflow-hidden rounded-3xl shadow-xl">
                    <CardHeader className="text-center border-b border-zinc-800 pb-6">
                        <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                            LMP Networks Savvy Programmes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left column */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">
                                    Savvy Production & Shipment Monitoring
                                </h2>
                                <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">
                                    Product availability is critical to your
                                    installations, and quick access to the
                                    materials you need can make or break a
                                    project. Our savvy programme for fibre optic
                                    solutions for data centres, and storage area
                                    networks, quickly supports your day-to-day
                                    work like moves, adds, and changes.
                                </p>
                                <div className="pt-4">
                                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">
                                        The Savvy programs open your horizon to
                                        monitor production progress that will
                                        impact to project delivery to end user.
                                        Parallel shipment can avoid project
                                        delay and optimizing installation time.
                                    </p>
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">
                                    Savvy Connect
                                </h2>
                                <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">
                                    This "made-to-order" programme provides
                                    shipping within two weeks upon receipt of
                                    your purchase order at LMP Networks. To see
                                    which items are available, please contact
                                    LMP Networks Customer Care.
                                </p>
                                <div className="flex flex-row items-center justify-between pt-8 mt-8 border-t border-zinc-800">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                                        <div className="relative w-[150px] sm:w-[170px] md:w-[200px] h-[100px]">
                                            <img
                                                src={kementrian}
                                                alt="Kementerian Perindustrian Logo"
                                                className="object-contain h-full w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400">
                                            TKDN 29.34% - 38%
                                        </p>
                                        <p className="text-xs sm:text-sm md:text-base text-zinc-400">
                                            (Structure Cabling System)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default SavvyProgrammes;

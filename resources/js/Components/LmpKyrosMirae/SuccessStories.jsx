import { TrendingUp } from "lucide-react";
import bdx from "../../../../public/images/kyros-mirae/bdx.png";
import equinix from "../../../../public/images/kyros-mirae/equinix.png";
import iron from "../../../../public/images/kyros-mirae/iron-montain.png";

export default function SuccessStories() {
    const successStories = [
        {
            logo: bdx,
            location: "Singapore",
            scope: "AI-Driven Energy Optimization",
            improvement: "3.5%",
            timeframe: "Two Months",
            additionalInfo:
                "Est Energy reduction, equivalent to >US$100k/MW per year",
        },
        {
            logo: equinix,
            location: "Singapore",
            scope: "AI-Driven Chiller Plant Optimization",
            improvement: "5%",
            timeframe: "Two Quarters",
            additionalInfo: null,
        },
        {
            logo: iron,
            location: "Singapore",
            scope: "AI-Driven Chiller Plant Optimization",
            improvement: "7%",
            timeframe: "Two Quarters",
            additionalInfo: null,
        },
    ];

    return (
        <section className="py-16">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-manrope leading-normal mb-6">
                        Success Story of Digital Twins & Physical Infra
                        Enhancement
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-sm hover:border-slate-200 relative"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-center items-center h-20 mb-8 relative">
                                    <img
                                        src={story.logo || "/placeholder.svg"}
                                        alt="Company logo"
                                        width={180}
                                        height={70}
                                        className="object-contain relative z-10"
                                    />
                                </div>

                                <div className="space-y-5 flex-grow">
                                    <div className="flex flex-col space-y-1">
                                        <span className="text-sm uppercase tracking-wider text-slate-500 font-medium">
                                            Location
                                        </span>
                                        <span className="text-slate-800 font-medium">
                                            {story.location}
                                        </span>
                                    </div>

                                    <div className="flex flex-col space-y-1">
                                        <span className="text-sm uppercase tracking-wider text-slate-500 font-medium">
                                            Scope
                                        </span>
                                        <span className="text-slate-800">
                                            {story.scope}
                                        </span>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-100">
                                        <div className="flex items-center mb-2">
                                            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-500">
                                                {story.improvement}
                                            </span>
                                            <TrendingUp className="ml-2 text-rose-500 h-6 w-6" />
                                        </div>
                                        <p className="text-slate-700 font-medium">
                                            Energy Efficiency Improvement
                                        </p>
                                        <p className="text-slate-600">
                                            Within{" "}
                                            <span className="text-rose-600 font-medium">
                                                {story.timeframe}
                                            </span>{" "}
                                            of Development
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

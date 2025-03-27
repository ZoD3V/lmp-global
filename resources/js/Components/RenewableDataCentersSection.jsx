import {
    BarChart3,
    CloudCog,
    Database,
    Globe,
    Leaf,
    Server,
    Zap,
} from "lucide-react";

export default function RenewableDataCentersSection() {
    return (
        <section className="bg-white py-20 px-4 md:px-6 lg:px-8">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Interactive illustration */}
                    <div className="relative">
                        <div className="relative z-10 mx-auto lg:mx-0 max-w-md">
                            <div className="relative aspect-square bg-slate-100 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden p-8 group shadow-md">
                                {/* Background glow effects */}
                                <div className="absolute -z-10 w-2/3 h-2/3 top-0 left-0 bg-emerald-500/10 rounded-full blur-[80px] animate-pulse"></div>
                                <div
                                    className="absolute -z-10 w-1/2 h-1/2 bottom-0 right-0 bg-teal-500/10 rounded-full blur-[60px] animate-pulse"
                                    style={{ animationDelay: "1s" }}
                                ></div>

                                {/* Data center illustration */}
                                <div className="relative h-full w-full flex items-center justify-center">
                                    {/* Globe */}
                                    <div className="absolute w-40 h-40 rounded-full border-4 border-slate-200 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-300">
                                        <Globe className="w-20 h-20 text-slate-500 group-hover:text-emerald-500 transition-colors duration-300" />

                                        {/* Orbiting servers */}
                                        <div className="absolute w-full h-full">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md group-hover:bg-emerald-50 transition-colors duration-300">
                                                <Server className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-lg shadow-md group-hover:bg-emerald-50 transition-colors duration-300">
                                                <Database className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md group-hover:bg-emerald-50 transition-colors duration-300">
                                                <CloudCog className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md group-hover:bg-emerald-50 transition-colors duration-300">
                                                <Zap className="w-5 h-5 text-emerald-500" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Energy flow lines */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <svg
                                                className="w-full h-full"
                                                viewBox="0 0 200 200"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100,20 Q140,60 180,100 Q140,140 100,180 Q60,140 20,100 Q60,60 100,20"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="1"
                                                    strokeDasharray="5,5"
                                                    fill="none"
                                                    className="animate-[spin_15s_linear_infinite]"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="gradient"
                                                        x1="0%"
                                                        y1="0%"
                                                        x2="100%"
                                                        y2="100%"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#10b981"
                                                            stopOpacity="0.4"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#14b8a6"
                                                            stopOpacity="0.4"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-lg shadow-lg shadow-emerald-500/20 flex items-center gap-2 animate-pulse">
                                <Leaf className="w-5 h-5" />
                                <span className="font-semibold text-sm">
                                    Eco-friendly
                                </span>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white p-3 rounded-lg shadow-lg shadow-teal-500/20 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                <span className="font-semibold text-sm">
                                    Energy Efficient
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-4">
                                Renewable Energy in Data Centers
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group shadow-md">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-emerald-50 p-3 rounded-lg group-hover:bg-emerald-100 transition-colors duration-300">
                                        <Globe className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 leading-relaxed">
                                            Renewable energy in data centers
                                            refers to the use of renewable
                                            energy sources such as solar, wind,
                                            hydro, or biomass to operate IT
                                            infrastructure in a more
                                            environmentally friendly manner.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group shadow-md">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-emerald-50 p-3 rounded-lg group-hover:bg-emerald-100 transition-colors duration-300">
                                        <BarChart3 className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 leading-relaxed">
                                            With the increasing need for large
                                            amounts of power, many data centers
                                            are turning to green energy to
                                            reduce their carbon footprint,
                                            reduce long-term operating costs,
                                            and meet environmental regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group shadow-md">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-emerald-50 p-3 rounded-lg group-hover:bg-emerald-100 transition-colors duration-300">
                                        <Server className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 leading-relaxed">
                                            By implementing renewable energy,
                                            data centers can become more
                                            sustainable, cost-effective, and
                                            support the global initiative for
                                            net-zero emissions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 text-center shadow-md">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">
                            75%
                        </div>
                        <p className="text-slate-700">
                            Reduction in carbon emissions possible with
                            renewable energy
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 text-center shadow-md">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">
                            30%
                        </div>
                        <p className="text-slate-700">
                            Decrease in operational costs over a 5-year period
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 text-center shadow-md">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">
                            100+
                        </div>
                        <p className="text-slate-700">
                            Major tech companies committed to renewable energy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

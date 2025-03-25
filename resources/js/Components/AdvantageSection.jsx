import {
    ArrowRightIcon,
    Leaf,
    Lightbulb,
    LineChart,
    Recycle,
    Shield,
    Sparkles,
    Users,
} from "lucide-react";

export default function AdvantageSection() {
    return (
        <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-4 md:px-6 lg:px-8">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 tracking-tight mb-4">
                        ADVANTAGE
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Environmental Preservation */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                            <Leaf className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Environmental Preservation
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Renewable energy sources, such as wind, solar, and
                            hydropower, help preserve the environment by
                            reducing greenhouse gas emissions and minimizing air
                            and water pollution.
                        </p>
                    </div>

                    {/* Sustainability */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                            <Recycle className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Sustainability
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Renewable energy is inexhaustible and can be
                            harnessed continuously without depleting natural
                            resources, ensuring long-term sustainability.
                        </p>
                    </div>

                    {/* Energy Independence */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                            <Shield className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Energy Independence
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            Utilizing renewable energy reduces reliance on
                            fossil fuels, contributing to greater energy
                            independence and security.
                        </p>
                    </div>

                    {/* Job Creation */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                            <Users className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Job Creation
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            The renewable energy sector generates employment
                            opportunities, driving economic growth and job
                            creation in various fields.
                        </p>
                    </div>

                    {/* Reduced Energy Costs */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                            <LineChart className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Reduced Energy Costs
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            As technology advances and renewable energy becomes
                            more accessible, it often leads to reduced energy
                            costs for both individuals and businesses.
                        </p>
                    </div>

                    {/* Innovation */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Innovation
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            The pursuit of renewable energy fosters innovation
                            and drives advancements in clean energy
                            technologies.
                        </p>
                    </div>

                    {/* Energy Efficiency */}
                    <div className="md:col-span-2 lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4 md:mb-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
                                <Lightbulb className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Energy Efficiency
                                </h3>
                                <p className="text-slate-300 leading-relaxed max-w-3xl">
                                    The integration of renewable energy often
                                    encourages energy efficiency measures and
                                    practices, creating a more sustainable
                                    energy ecosystem for future generations.
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-auto flex items-center text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="mr-2">Learn more</span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { Wind, Droplets, GitMerge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const TypesPAC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="py-16">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                        Types of PAC (precision air cooling)
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Air Cooling Card */}
                    <motion.div variants={item}>
                        <Card className="h-full bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-sm hover:border-slate-200 shadow-none">
                            <CardHeader className="pb-2">
                                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                                    <Wind className="h-8 w-8 text-sky-500" />
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    Air Cooling
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    The most common cooling method uses air as
                                    the cooling medium. Efficient for many
                                    applications with lower heat density
                                    requirements.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Liquid Cooling Card */}
                    <motion.div variants={item}>
                        <Card className="h-full bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-sm hover:border-slate-200 shadow-none">
                            <CardHeader className="pb-2">
                                <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                                    <Droplets className="h-8 w-8 text-cyan-500" />
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    Liquid Cooling
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    In this system, a fluid (usually water) is
                                    used to absorb and transfer heat from the
                                    equipment. Provides superior cooling for
                                    high-density applications.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Hybrid Cooling Card */}
                    <motion.div variants={item}>
                        <Card className="h-full bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-sm hover:border-slate-200 shadow-none">
                            <CardHeader className="pb-2">
                                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <GitMerge className="h-8 w-8 text-purple-500" />
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    Hybrid Cooling
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    A combination of air cooling and liquid
                                    cooling, or can also combine the PAC system
                                    with other methods. Offers flexibility and
                                    optimized efficiency.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TypesPAC;

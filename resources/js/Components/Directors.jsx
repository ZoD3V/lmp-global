import React from "react";
import Heading from "./Common/Heading";
import Erlangga from "../../../public/images/directors/erlangga.png";
import Teguh from "../../../public/images/directors/teguh.png";
import Widjatmoko from "../../../public/images/directors/widjatmoko.png";

const Directors = () => {
    const directors = [
        {
            name: "Teguh Prikarihadi",
            title: "CO-Founder & Strategic Director",
            image: Teguh,
            email: "teguh@example.com",
        },
        {
            name: "Erlangga Sudrajat",
            title: "CEO - CTO & President Director",
            image: Erlangga,
            email: "erlangga@example.com",
        },
        {
            name: "Widjatmoko",
            title: "Sales Director",
            image: Widjatmoko,
            email: "widjatmoko@example.com",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] flex flex-col gap-12">
                <Heading title={"Board of Directors"} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {directors.map((director) => (
                        <div
                            key={director.name}
                            className="group flex flex-col items-center"
                        >
                            <div className="relative w-64 h-64 mb-6 overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-medium mb-1 text-center">
                                {director.name}
                            </h3>
                            <p className="text-sm text-slate-500 mb-4 text-center">
                                {director.title}
                            </p>

                            <div className="h-px w-12 bg-slate-200 mb-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Directors;

import React from "react";
import { useEffect, useRef } from "react";
import Heading from "../Common/Heading";

const NextTSection = ({ nexT }) => {
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements =
            sectionRef.current?.querySelectorAll(".animate-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => {
            elements?.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col mt-12 gap-16">
            <div ref={sectionRef} className="relative overflow-hidde">
                <div className="container relative mx-auto px-6 max-w-6xl">
                    <Heading
                        title={nexT[0].title}
                        description={
                            nexT[0].sub_title
                        }
                        align="center"
                    />

                    <div className="flex justify-center animate-on-scroll my-16">
                        <div className="relative w-full max-w-3xl group">
                            <img
                                src={`/storage/${nexT[0].image}`}
                                alt="LMP Nex-T Edge DC 360 modular data center with solar panels"
                                width={600}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-4 animate-on-scroll">
                            LMP Nex-T Edge DC 360
                        </h3>

                        <p
                            className="text-slate-700 leading-relaxed text-lg animate-on-scroll"
                            dangerouslySetInnerHTML={{
                                __html: nexT[0].content,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextTSection;

import React from "react";

const CentersSection = () => {
    return (
        <section class="py-16 bg-white max-w-[1200px] container mx-auto px-4 sm:px-6 xl:px-0">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold text-gray-900">About Us</h2>
                <p class="mt-4 text-lg text-gray-500">
                    As a Web Development Services, We are Committed to Building
                    Custom Web Solutions that Drive Business Success.
                </p>
            </div>

            <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 md:gap-2 bg-slate-100 rounded-lg">
                <div class="relative md:h-[400px]">
                    <img
                        class="w-full h-full object-cover object-center rounded-t-lg md:rounded-s-lg md:rounded-r-none"
                        src="https://loremflickr.com/800/600"
                        alt="Our Mission"
                        width="800"
                        height="500"
                    />
                </div>
                <div class="flex flex-col justify-center p-7">
                    <h3 class="text-2xl font-bold text-gray-900">
                        Our Mission
                    </h3>
                    <p class="mt-4 text-base md:text-lg text-gray-500">
                        Our training and development courses can advance skills
                        and technical knowledge in both industry best practices
                        and LMP products, to help realize the full potential of
                        your IT infrastructure or facilities. Standard or
                        specialized trainings can take place at LMP Learning or
                        at your location upon request.
                    </p>
                    <a
                        href="#"
                        class="mt-6 text-indigo-600 hover:text-indigo-800"
                    >
                        Read More →
                    </a>
                </div>
            </div>

            <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 md:gap-2 bg-slate-100 rounded-lg">
                <div class="flex flex-col justify-center p-7 order-2 md:order-1">
                    <h3 class="text-2xl font-bold text-gray-900">
                        Our Mission
                    </h3>
                    <p class="mt-4 text-base md:text-lg text-gray-500">
                        Our team can collaborate with your team to create
                        effective and innovative design solutions that structure
                        and optimize the design process for better results.
                    </p>
                    <a
                        href="#"
                        class="mt-6 text-indigo-600 hover:text-indigo-800"
                    >
                        Read More →
                    </a>
                </div>
                <div class="relative order-1 md:order-2 md:h-[400px]">
                    <img
                        class="w-full h-full object-cover object-center rounded-t-lg md:rounded-r-lg md:rounded-l-none"
                        src="https://loremflickr.com/800/600"
                        alt="Our Values"
                        width="800"
                        height="600"
                    />
                </div>
            </div>
        </section>
    );
};

export default CentersSection;

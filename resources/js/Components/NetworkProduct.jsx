import React from "react";
import Heading from "./Common/Heading";
import jumperLCLC from "../../../public/images/jumperLCLC.png";
import NetworkProductCard from "./Common/NetworkProductCard";

const NetworkProduct = () => {
    const products = [
        {
            id: 1,
            image: jumperLCLC,
            title: "LMP Networks Multi Mode OM3 Jumper LC-LC",
        },
        {
            id: 2,
            image: jumperLCLC,
            title: "LMP Networks Multi Mode OM3 Jumper LC-LC",
        },
        {
            id: 3,
            image: jumperLCLC,
            title: "LMP Networks Multi Mode OM3 Jumper LC-LC",
        },
    ];

    return (
        <section className="container mx-auto py-16 max-w-[1200px] px-4 sm:px-6 xl:px-0 flex flex-col gap-12">
            <Heading
                title={"LMP Networks"}
                description={
                    "Provide interconnect and cross-connect of applications over installations in entrance facilities, telecommunicati-ons rooms, data center and at the desk."
                }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <NetworkProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default NetworkProduct;

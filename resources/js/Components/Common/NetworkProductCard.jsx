import React from "react";

const NetworkProductCard = ({ image, title }) => {
    return (
        <div className="border-[1px] rounded-lg border-gray-200">
            <img
                src={image}
                alt="Product Image"
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="font-normal text-sm leading-6 text-gray-900 text-center">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default NetworkProductCard;

import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";

const DetailProduct = () => {
    const { props } = usePage();
    const { product} = props;

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Nama: {product.name}</p>
        </div>
    );
};

export default DetailProduct;

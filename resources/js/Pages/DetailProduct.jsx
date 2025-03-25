import React from "react";
import { usePage } from "@inertiajs/react";
import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import DetailProductSection from "@/Components/DetailProductSection";

const DetailProduct = () => {
    const { props } = usePage();
    const { product, popularProducts } = props;

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <Navbar />
            <DetailProductSection
                detailData={product}
                popularProducts={popularProducts}
            />
            <Footer />
        </main>
    );
};

export default DetailProduct;

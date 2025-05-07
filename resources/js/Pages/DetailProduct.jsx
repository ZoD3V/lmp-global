import React from "react";
import { usePage } from "@inertiajs/react";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import DetailProductSection from "@/components/DetailProductSection";

const DetailProduct = () => {
    const { props } = usePage();
    const {
        product,
        popularProducts,
    } = props;

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

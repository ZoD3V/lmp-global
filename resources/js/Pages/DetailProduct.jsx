import React from "react";
import { usePage } from "@inertiajs/react";
import DetailProductSection from "@/Components/DetailProductSection";
import Layout from "@/Layouts/Layouts";

const DetailProduct = () => {
    const { props } = usePage();
    const {
        product,
        popularProducts,
    } = props;

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <DetailProductSection
                detailData={product}
                popularProducts={popularProducts}
            />
        </main>
    );
};

DetailProduct.layout = (page) => <Layout children={page} />;
export default DetailProduct;

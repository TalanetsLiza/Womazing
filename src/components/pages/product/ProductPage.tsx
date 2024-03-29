import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../store/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import ProductCard from "./productCard/ProductCard";
import RelatedProducts from "./relatedProducts/RelatedProducts";

const ProductPage: React.FC = () => {
    const{ id } = useParams();
    
    const dispatch = useAppDispatch();
    const productData = useAppSelector((state) => state.product.data);
    const status = useAppSelector((state) => state.product.status);

    useEffect( () => {
        if (id && +id) {
            dispatch(fetchProduct(+id));
        }
    }, [id]);

    if (status === "loading") {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (!productData) {
        return (
            <div>
                Product not found
            </div>
        );
    }

    return (
        <div className="block">
            <ProductCard productData={productData} />
            <RelatedProducts productData={productData} />
        </div>
    );
};

export default ProductPage;
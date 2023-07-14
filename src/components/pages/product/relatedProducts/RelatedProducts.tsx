import React, { useEffect } from "react";
import t from "../../../../assets/translations/translations";
import { fetchRelatedProduct } from "../../../../store/relatedProducts/relatedProductsSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import ProductType from "../../../../types/product/ProductType";
import Product from "../../shop/product/Product";
import styles from "./RelatedProducts.module.scss";

interface PropsType {
    productData: ProductType;
}

const RelatedProducts:React.FC<PropsType> = ({
    productData,
}) => {
    const dispatch = useAppDispatch();
    const productDataRelated = useAppSelector((state) => state.relatedProducts.data);

    useEffect( () => {
        dispatch(fetchRelatedProduct(productData))
    }, [productData]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t.productPage.relatedProduct}
            </h2>
            <div className={styles.products}>
                {productDataRelated.map((dataItem) => (
                    <Product key={dataItem.id} dataItem={dataItem} />
                ))}
            </div>
        </div>
    )
};

export default RelatedProducts;
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchShop } from "../../../store/shop/shopSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import ProductCategoryType from "../../../types/product/ProductCategoryType";
import Categories from "../../category/Categories";
import PageTitle from "../../pageTitle/PageTitle";
import Product from "./product/Product";
import styles from "./Shop.module.scss";



const Shop: React.FC = () => {
    const dispatch = useAppDispatch();
    const shopData = useAppSelector((state) => state.shop.data);
    const [searchPrams] = useSearchParams();
    const category = searchPrams.get("category") as ProductCategoryType | undefined;

    useEffect( () => {
        dispatch(fetchShop({ category }));
    },[category]);

    console.log(category)

    return (
        <div className="block">
            <PageTitle titleKey="shop" />
            <Categories category={category} />
            <div className={styles.products}>
                {shopData.map((dataItem) => (
                    <Product key={dataItem.id} dataItem={dataItem} />
                ))}
            </div>
        </div>
    );
};

export default Shop;

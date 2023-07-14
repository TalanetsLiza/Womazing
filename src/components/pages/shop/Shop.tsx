import React, { useEffect } from "react";
import { fetchShop } from "../../../store/shop/shopSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import PageTitle from "../../pageTitle/PageTitle";
import Product from "./product/Product";
import styles from "./Shop.module.scss";

const Shop: React.FC = () => {
    const dispatch = useAppDispatch();
    const shopData = useAppSelector((state) => state.shop.data);

    useEffect( () => {
        dispatch(fetchShop());
    },[]);

    return (
        <div>
            <PageTitle titleKey="shop" />
            <div className={styles.products}>
                {shopData.map((dataItem) => (
                    <Product key={dataItem.id} dataItem={dataItem} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
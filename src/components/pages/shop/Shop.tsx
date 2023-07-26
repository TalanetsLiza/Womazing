import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import t from "../../../assets/translations/translations";
import { fetchShop } from "../../../store/shop/shopSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import ProductCategoryType from "../../../types/product/ProductCategoryType";
import Categories from "../../category/Categories";
import PageTitle from "../../pageTitle/PageTitle";
import Pagination from "../../pagination/Pagination";
import Product from "./product/Product";
import styles from "./Shop.module.scss";

const limit = 9;

const Shop: React.FC = () => {
    const dispatch = useAppDispatch();
    const shopData = useAppSelector((state) => state.shop.data);
    const total = useAppSelector((state) => state.shop.total)
    const [searchPrams] = useSearchParams();
    const [page, setPage] = useState(1);
    const category = searchPrams.get("category") as ProductCategoryType | undefined;

    // TODO: fix request duplication error when changing category
    // const [categoryTimestamp, setCategoryTimestamp] = useState(0);
    // const initialCategoryRef = useRef(category);
    // useEffect(() => {
    //     if (initialCategoryRef.current === category) {
    //         return;
    //     }
    //     setPage(1);
    //     setCategoryTimestamp(Date.now());
    // }, [category]);
    // useEffect(() => {
    //     dispatch(fetchShop({ category, page, limit }));
    // }, [categoryTimestamp, page]);

    useEffect(() => {
        dispatch(fetchShop({ category, page, limit }));
    }, [category, page]);

    useEffect(() => {
        setPage(1);
    }, [category]);

    const pageCount = Math.ceil(total / limit);
    const visibleCount = shopData.length;

    return (
        <div className="block">
            <PageTitle titleKey="shop" />
            <Categories category={category} />
            <div className={styles.count}>
                {t.shopPage.count.shown} {visibleCount} {t.shopPage.count.from} {total} {t.shopPage.count.products}
            </div>
            <div className={styles.products}>
                {shopData.map((dataItem) => (
                    <Product key={dataItem.id} dataItem={dataItem} />
                ))}
            </div>
            <div className={styles.count}>
                {t.shopPage.count.shown} {visibleCount} {t.shopPage.count.from} {total} {t.shopPage.count.products}
            </div>
            <Pagination
                count={pageCount}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default Shop;

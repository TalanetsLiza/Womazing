import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import t from "../../../assets/translations/translations";
import pageUrls from "../../../constants/pageUrls";
import { fetchBusketItemsData } from "../../../store/busket/busketSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Button from "../../button/Button";
import PageTitle from "../../pageTitle/PageTitle";
import styles from "./Busket.module.scss";
import CardBusket from "./cardBusket/CardBusket";
import CouponBusket from "./couponBusket/CouponBusket";
import NoProduct from "./noProduct/NoProduct";
import TotalBusket from "./totalBusket/TotalBusket";

const Busket: React.FC = () => {
    const itemsData = useAppSelector((state) => state.busket.itemsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBusketItemsData());
    }, []);

    if (itemsData.length === 0) {
        return (
            <NoProduct />
        );
    };

    return (
        <div className="block">
            <div className={styles.container}>
                <PageTitle titleKey="busket" />
                <div className={styles.tableHeader}>
                    <div>
                        {t.busketPage.tableHeader.product}
                    </div>
                    <div className={styles.tableHeaderRight}>
                        <div>
                            {t.busketPage.tableHeader.price}
                        </div>
                        <div>
                            {t.busketPage.tableHeader.quantity}
                        </div>
                        <div>
                            {t.busketPage.tableHeader.totalPrice}
                        </div>
                    </div>
                </div>
                <div>
                    {itemsData.map((dataItem) => (
                        <CardBusket key={dataItem.id} dataItem={dataItem} />
                    ))}
                </div>
                <CouponBusket />
                <TotalBusket />
            </div>
        </div>  
    );
};

export default Busket;
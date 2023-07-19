import React from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import { useAppSelector } from "../../../../store/store";
import Button from "../../../button/Button";
import styles from "./TotalBusket.module.scss";

const TotalBusket: React.FC = () => {
    const items = useAppSelector((state) => state.busket.items);
    const itemsData = useAppSelector((state) => state.busket.itemsData);

    const totalPrice = items.reduce((acc, item) => {
        const itemData = itemsData.find((itemData) => item.id === itemData.id);
        if (!itemData) {
            return acc;
        }
        const currentItemPrice = itemData.priceSale ?? itemData?.price;
        const totalItemPrice = currentItemPrice * item.count;
        return acc + totalItemPrice;
    }, 0);

    return (
        <div className={styles.container}>
            <div className={styles.blockSubtotal}>
                {t.busketPage.totalBusket.subtotal}
                <div>
                    ${totalPrice}
                </div>
            </div>
            <div className={styles.blockTotlal}>
                <div className={styles.totlal}>
                    {t.busketPage.totalBusket.total}
                    <div>
                        ${totalPrice}
                    </div>
                </div>
                <Link to={pageUrls.ordering}>
                    <Button>
                        {t.button.checkout}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TotalBusket;

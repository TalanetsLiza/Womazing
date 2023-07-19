import React from "react";
import t from "../../../../assets/translations/translations";
import Button from "../../../button/Button";
import styles from "./CouponBusket.module.scss";

const CouponBusket: React.FC = () => {
    const hendelClick = () => {
        alert("Неверный купон");
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder={t.busketPage.couponePlaceholder}
            />
            <Button
                variant="outline"
                type="submit"
                onClick={hendelClick}  
            >
                {t.button.addCoupon}
            </Button>
        </div>
    );
};

export default CouponBusket;

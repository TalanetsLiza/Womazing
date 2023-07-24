import React from "react";
import PageTitle from "../../pageTitle/PageTitle";
import { ReactComponent as OrderCkeckIcon } from "../../../assets/icon/orderCkeck.svg";
import t from "../../../assets/translations/translations";
import styles from "./OrderReceived.module.scss";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import pageUrls from "../../../constants/pageUrls";

const OrderReceived: React.FC = () => {
    return (
        <div className="block">
            <PageTitle titleKey="orderReceived" />
            <div className={styles.container}>
                <div className={styles.block}>
                    <OrderCkeckIcon />
                    <div className={styles.blockText}>
                        <h3 className={styles.title}>
                            {t.orderReceivedPage.title}
                        </h3>
                        <div className={styles.description}>
                            {t.orderReceivedPage.description}
                        </div>
                    </div>
                </div>
                <Link to={pageUrls.home} className={styles.button}>
                    <Button
                        variant="outline"
                    >
                        {t.button.goHome}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default OrderReceived;
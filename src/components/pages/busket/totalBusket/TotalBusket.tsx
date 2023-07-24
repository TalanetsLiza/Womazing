import React from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import useTotalBusketPrice from "../../../../hooks/useTotalBusketPrice";
import Button from "../../../button/Button";
import styles from "./TotalBusket.module.scss";

const TotalBusket: React.FC = () => {
    const totalPrice = useTotalBusketPrice();

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

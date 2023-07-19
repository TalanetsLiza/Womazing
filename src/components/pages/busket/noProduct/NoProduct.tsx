import React from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import Button from "../../../button/Button";
import styles from "./NoProduct.module.scss";

const NoProduct: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.noProduct}>
                В корзине нет товаров
            <Link to={pageUrls.shop}>
                <Button
                    variant="filled"
                    type="submit"
                >
                    {t.button.goShop}
                </Button>
            </Link>
            </div>
        </div>
    );
}

export default NoProduct;

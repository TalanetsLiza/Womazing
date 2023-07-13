import React from "react";
import ProductType from "../../../../types/product/ProductType";
import styles from "./Product.module.scss";
import { ReactComponent as ArrowRight } from "../../../../assets/icon/ArrowRight.svg";
import { Link } from "react-router-dom";
import pageUrls from "../../../../constants/pageUrls";

interface PropsType {
    dataItem: ProductType,
};

const Product: React.FC<PropsType> = ({
    dataItem,
}) => {

    const currentPrice = dataItem.priceSale ?? dataItem.price;
    const oldPrice = dataItem.priceSale && dataItem.price;

    return (
        <Link className={styles.product} to={`${pageUrls.product}/${dataItem.id}`}>
            <div className={styles.image__container}>
                <img 
                    className={styles.image}
                    src={dataItem.image.src}
                    alt={dataItem.image.alt}
                />
                <div className={styles.productHover}>
                    <ArrowRight />
                </div>
            </div>
            
            <span className={styles.title}>
                {dataItem.title}
            </span>
            <div className={styles.container__price}>
                {oldPrice && (
                    <span className={styles.oldPrice}>
                        ${oldPrice}
                    </span>
                )}
                <span>
                    ${currentPrice}
                </span>
            </div>
        </Link>
    );
};

export default Product;

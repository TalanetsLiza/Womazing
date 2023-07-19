import React from "react";
import { useAppDispatch } from "../../../../store/store";
import { ReactComponent as CloseIcon } from "../../../../assets/icon/close.svg";
import ProductType from "../../../../types/product/ProductType";
import styles from "./CardBusket.module.scss";
import { remove } from "../../../../store/busket/busketSlice";
import { Link } from "react-router-dom";
import pageUrls from "../../../../constants/pageUrls";

interface PropsType {
    dataItem: ProductType,
}

const CardBusket: React.FC<PropsType> = ({
    dataItem,

}) => {
    const dispatch = useAppDispatch();

    const deleteToBusket = () => {
        dispatch(remove(dataItem.id));
    };

    const currentPrice = dataItem.priceSale ?? dataItem?.price;
    
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <button 
                    onClick={deleteToBusket}
                    className={styles.buttonDelete}
                >
                    <CloseIcon />
                </button>
                <Link to={`${pageUrls.product}/${dataItem.id}`} className={styles.blockLink}>
                    <img
                    className={styles.image}
                    src={dataItem.image.src}
                    alt={dataItem.image.alt}
                />
                    {dataItem.title}
                </Link>
                
            </div>
            <div className={styles.table}>
                <div>
                    ${currentPrice}
                </div>
                <button className={styles.amountButton}>
                    1
                </button>
                <div>
                    ${currentPrice}
                </div>
            </div>
        </div>
    );
};

export default CardBusket;
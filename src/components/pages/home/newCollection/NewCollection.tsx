import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import { fetchNewCollection } from "../../../../store/newCollectionProduct/newCollectionSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import Button from "../../../button/Button";
import Product from "../../shop/product/Product";
import styles from "./NewCollection.module.scss";

const NewCollection:React.FC = () => {
    const dispatch = useAppDispatch();
    const productDataNewCollection = useAppSelector((state) => state.newCollection.data);

    useEffect( () => {
        dispatch(fetchNewCollection())
    }, []);

    return (
        <div className="block">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    {t.newCollection.name}
                </h2>
                <div className={styles.products}>
                    {productDataNewCollection.map((dataItem) => (
                        <Product key={dataItem.id} dataItem={dataItem} />
                    ))}
                </div>
                <Link to={pageUrls.shop} className={styles.link}>
                    <Button 
                        variant="outline"
                        type="submit"
                    >
                        {t.button.openShop}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NewCollection;

import React from "react";
import { Link } from "react-router-dom";
import t from "../../assets/translations/translations";
import categories from "../../constants/caregories";
import pageUrls from "../../constants/pageUrls";
import ProductCategoryType from "../../types/product/ProductCategoryType";
import styles from "./Categories.module.scss";

interface PropsType {
    category: ProductCategoryType | undefined,
}

const Categories: React.FC<PropsType> = ({
    category,
}) => {
    return (
        <div className={styles.container}>
            <Link
                to={pageUrls.shop}
                className={`${styles.category} ${category === undefined ? styles.active : ""}`}
            >
                {t.categories.all}
            </Link>
            {categories.map((item) => (
                <Link
                    to={`${pageUrls.shop}?category=${item}`}
                    key={item}
                    className={`${styles.category} ${category === item ? styles.active : ""}`}
                >
                    {t.categories[item]}
                </Link>
            ))}
        </div>
    );
};

export default Categories;

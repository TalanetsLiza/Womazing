import React from "react";
import { Link } from "react-router-dom";
import t from "../../../assets/translations/translations";
import pageUrls from "../../../constants/pageUrls";
import categories from "../../../constants/caregories";
import styles from "./FooterCategories.module.scss";

const FooterCategories: React.FC = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.ul}>
                {categories.map((item) => (
                    <li key={item}>
                        <Link
                            to={`${pageUrls.shop}?category=${item}`}
                            className={styles.text}
                        >
                            {t.categories[item]}
                        </Link>
                    </li>
                ))}
            </ul> 
        </nav>
    );
};

export default FooterCategories;

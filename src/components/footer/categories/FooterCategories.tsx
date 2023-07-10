import styles from "./FooterCategories.module.scss";
import React from "react";
import pageUrls from "../../../constants/pageUrls";
import { Link } from "react-router-dom";
import t from "../../../assets/translations/translations";

const FooterCategories: React.FC = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.ul}>
                <li>
                    <Link to={pageUrls.shop} className={styles.text}>
                        {t.categories.coat}
                    </Link>
                </li>
                <li>
                    <Link to={pageUrls.shop} className={styles.text}>
                        {t.categories.sweatshirts}
                    </Link>
                </li>
                <li>
                    <Link to={pageUrls.shop} className={styles.text}>
                        {t.categories.cardigans}
                    </Link>
                </li>
                <li>
                    <Link to={pageUrls.shop} className={styles.text}>
                        {t.categories.hoodies}
                    </Link>
                </li>
            </ul> 
        </nav>
    );
};

export default FooterCategories;

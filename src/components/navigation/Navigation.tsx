import t from "../../assets/translations/translations";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import pageUrls from "../../constants/pageUrls";
import React from "react";

const Navigation: React.FC = () => {
    return (
        <nav>
           <ul className={styles.ul}>
                <li>
                    <Link to={pageUrls.home} className={styles.text}>
                        {t.navigation.home}
                    </Link>
                </li>
                <li>
                    <Link to={pageUrls.shop} className={styles.text}>
                        {t.navigation.shop}
                    </Link>
                </li>
                <li>
                    <Link to={pageUrls.about} className={styles.text}>
                        {t.navigation.about}
                    </Link>
                </li>
                <li>
                    <Link to={pageUrls.contacts} className={styles.text}>
                        {t.navigation.contacts}
                    </Link>
                </li>
            </ul> 
        </nav>
    );
}

export default Navigation;
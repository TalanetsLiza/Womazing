import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import React from "react";
import t from "../../assets/translations/translations";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import pageUrls from "../../constants/pageUrls";

const Logo: React.FC = () => {
    return (
        <Link className={styles.logo} to={pageUrls.home}>
            <div className={styles.icon}>
                <LogoIcon />
            </div>
            <span className={styles.name}>
                {t.logo.name}
            </span>
        </Link>
    )
};

export default Logo;

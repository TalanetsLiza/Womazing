// import styles from "./Busket.module.scss";
import { ReactComponent as BusketIcon } from "../../../assets/icon/busket.svg";
import pageUrls from "../../../constants/pageUrls";
import styles from "./HeaderBusket.module.scss";
import { Link } from "react-router-dom";
import React from "react";

const HeaderBusket: React.FC = () => {
    return (
        <Link to={pageUrls.busket} className={styles.container}>
            <BusketIcon />
        </Link>
    );
};

export default HeaderBusket;

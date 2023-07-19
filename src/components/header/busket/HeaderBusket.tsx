import { ReactComponent as BusketIcon } from "../../../assets/icon/busket.svg";
import pageUrls from "../../../constants/pageUrls";
import styles from "./HeaderBusket.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import { useAppSelector } from "../../../store/store";

const HeaderBusket: React.FC = () => {
    const busketCount = useAppSelector((state) => state.busket.items);
    const count = busketCount.reduce((acc, item) => acc + item.count, 0);

    if (count <= 0) {
        return (
            <Link to={pageUrls.busket} className={styles.container}>
                <BusketIcon />
            </Link>
        );
    }
    
    return (
        <Link to={pageUrls.busket} className={styles.container}>
            <BusketIcon />
            <div className={styles.count}>
                {count}
            </div>
        </Link>
    );
};

export default HeaderBusket;

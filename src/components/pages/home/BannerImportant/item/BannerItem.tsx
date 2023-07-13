import React from "react";
import styles from "./BannerItem.module.scss";

interface PropsType {
    Icon: React.ReactNode,
    title: string,
    description: string,
}

const BannerItem: React.FC<PropsType> = ({
    Icon,
    title,
    description,
}) => {

    return (
        <div className={styles.column}>
            {Icon}
            <h3 className={styles.column__title}>
                {title}
            </h3>
            <span className={styles.column__description}>
                {description}
            </span>
        </div>
    );
};

export default BannerItem;

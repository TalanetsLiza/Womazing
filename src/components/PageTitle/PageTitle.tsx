import React from "react";
import t from "../../assets/translations/translations";
import styles from "./PageTitle.module.scss";

interface PropsType {
    titleKey: keyof typeof t.navigation;
}

const PageTitle: React.FC<PropsType> = ({
    titleKey,
}) => {
    const text = t.navigation[titleKey];

    return (
        <h1 className={styles.container}>
            {text}
        </h1>
    );
};

export default PageTitle;
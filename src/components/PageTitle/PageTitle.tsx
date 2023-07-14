import React from "react";
import t from "../../assets/translations/translations";
import styles from "./PageTitle.module.scss";

interface NavigationTitlePropsType {
    titleKey: keyof typeof t.navigation;
}
interface CustomTitlePropsType {
    text: string;
}

type PropsType = (NavigationTitlePropsType & Partial<CustomTitlePropsType>)
    | (CustomTitlePropsType & Partial<NavigationTitlePropsType>);

const PageTitle: React.FC<PropsType> = ({
    titleKey,
    text,
}) => {
    const displayedText = text || t.navigation[titleKey!];

    return (
        <h1 className={styles.container}>
            {displayedText}
        </h1>
    );
};

export default PageTitle;
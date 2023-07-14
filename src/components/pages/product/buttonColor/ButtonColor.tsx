import React from "react";
import styles from "./ButtonColor.module.scss";

interface PropsType {
    color: string,
    onSelect: (value: string) => void;
    isActive: boolean;
}

const ButtonColor:React.FC<PropsType> = ({
    color,
    onSelect,
    isActive,
}) => {
    const hendelClick = () => {
        onSelect(color);
    };

    return (
        <button
            className={`${styles.button} ${isActive ? styles.activeButton : ""}`}
            style={{
                background: color
            }}
            type="button"
            onClick={hendelClick}
        />
    )
};

export default ButtonColor;

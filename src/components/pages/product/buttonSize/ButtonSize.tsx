import React from "react";
import { SizeType } from "../../../../types/product/ProductType";
import styles from "./ButtonSize.module.scss";

interface PropsType {
    size: SizeType,
    onSelect: (value: SizeType) => void;
    isActive: boolean;
}

const ButtonSize:React.FC<PropsType> = ({
    size,
    onSelect,
    isActive,
}) => {
    const hendelClick = () => {
        onSelect(size);
    };

    return (
        <button
            className={`${styles.button} ${isActive ? styles.activeButton : ""}`}
            type="button"
            onClick={hendelClick}
        >
            {size}
        </button>
    )
};

export default ButtonSize;

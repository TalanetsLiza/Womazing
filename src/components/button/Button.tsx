import React, { useState } from "react";
import styles from "./Button.module.scss";

type VariantsType = "filled" | "outline";

interface PropsType {
    children: string,
    variant?: VariantsType,
    type?: "button" | "submit" | "reset",
}

const variantsStyles: Record<VariantsType, string> = {
    filled: styles.filledButton,
    outline: styles.outlineButton,
};

const Button:React.FC<PropsType> = ({
    children,
    variant = "filled",
    type,
}) => {
    const customStyle = variantsStyles[variant];

    return (
        <button
            className={`${styles.button} ${customStyle}`}
            type={type}
        >
            {children}
        </button>
    )
};

export default Button;
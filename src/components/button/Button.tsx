import React from "react";
import styles from "./Button.module.scss";

type VariantsType = "filled" | "outline";

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VariantsType,
}

const variantsStyles: Record<VariantsType, string> = {
    filled: styles.filledButton,
    outline: styles.outlineButton,
};

const Button:React.FC<PropsType> = ({
    children,
    variant = "filled",
    ...props
}) => {
    const customStyle = variantsStyles[variant];

    return (
        <button
            className={`${styles.button} ${customStyle}`}
            {...props}
        >
            {children}
        </button>
    )
};

export default Button;
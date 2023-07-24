import React from "react";
import styles from "./TextField.module.scss";

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const TextField: React.FC<PropsType> = ({
    error,
    ...props
}) => {

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                {...props}
            />
            {error && (
                <div
                    className={styles.error}
                    title={error}
                >
                    {error}
                </div>
            )}
        </div>
    );
};

export default TextField;

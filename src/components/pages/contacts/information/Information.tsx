import React from "react";
import t from "../../../../assets/translations/translations";
import styles from "./Information.module.scss";

const Information: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <span className={styles.title}>
                    {t.contacts.phone.name}
                </span>
                <span className={styles.description}>
                    {t.contacts.phone.number}
                </span>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>
                    {t.contacts.email.name}
                </span>
                <span className={styles.description}>
                    {t.contacts.email.addres}
                </span>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>
                    {t.contacts.addres.name}
                </span>
                <span className={styles.description}>
                    {t.contacts.addres.addres}
                </span>
            </div>
        </div>
    );
};

export default Information;
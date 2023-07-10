import styles from "./FooterInformation.module.scss";
import React from "react";

const FooterInformation: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                © Все права защищены
            </div>
            <a href="/assets/documents/PolitykaKonf.pdf" target="_blank" rel="noreferrer" className={styles.link}>
                Политика конфиденциальности
            </a>
            <a href="/assets/documents/soglas.pdf" target="_blank" rel="noreferrer" className={styles.link}>
                Публичная оферта
            </a>
        </div>
    );
};

export default FooterInformation;

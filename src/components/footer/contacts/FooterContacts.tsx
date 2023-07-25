import styles from "./FooterContacts.module.scss";
import React from "react";
import t from "../../../assets/translations/translations";

const FooterContacts: React.FC = () => {
    return (
        <div className={styles.container}>
            <a className={styles.phone} href="tel:+79175105759">
                {t.contacts.phone.number}
            </a>
            {t.contacts.email.addres}
        </div>
    );
};

export default FooterContacts;

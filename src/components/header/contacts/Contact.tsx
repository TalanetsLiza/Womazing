import styles from "./Contact.module.scss";
import { ReactComponent as CallingIcon } from "../../../assets/icon/calling.svg";
import t from "../../../assets/translations/translations";

const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <CallingIcon />
            </div>
            <a className={styles.phone} href="tel:+79175105759">
                {t.contacts.phone}
            </a>
        </div>
    );
}

export default Contact;
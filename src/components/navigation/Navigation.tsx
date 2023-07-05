import t from "../../assets/translations/translations";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
    return (
        <nav>
           <ul className={styles.ul}>
                <li><a href="#" className={styles.text}>{t.navigation.home}</a></li>
                <li><a href="#" className={styles.text}>{t.navigation.shop}</a></li>
                <li><a href="#" className={styles.text}>{t.navigation.about}</a></li>
                <li><a href="#" className={styles.text}>{t.navigation.contacts}</a></li>
            </ul> 
        </nav>
    );
}

export default Navigation;
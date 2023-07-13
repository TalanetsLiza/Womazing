import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import styles from "./MenuBurgerPopup.module.scss";

const MenuBurgerPopup = ({ onClick }) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.li} to={pageUrls.home} onClick={onClick}>
                        {t.navigation.home}
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.shop} onClick={onClick}>
                        {t.navigation.shop}
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.about} onClick={onClick}>
                        {t.navigation.about}
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.contacts} onClick={onClick}>
                        {t.navigation.contacts}
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default MenuBurgerPopup;

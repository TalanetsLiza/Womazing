import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import t from "../../assets/translations/translations";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.icon}>
                <LogoIcon />
            </div>
            <span className={styles.name}>
                {t.logo.name}
            </span>
        </div>
    )
};

export default Logo;

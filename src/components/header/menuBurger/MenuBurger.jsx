import styles from "./MenuBurger.module.scss";
import { ReactComponent as Burger } from "../../../assets/icon/Burger.svg";
import { useEffect, useState } from "react";
import MenuBurgerPopup from "./popup/MenuBurgerPopup";

const MenuBurger = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div className={styles.menu} onClick={() => setOpen(!isOpen)}>
            <Burger className={styles.burger} />
            <Burger className={styles.burger} />
            <Burger />
            {isOpen && <MenuBurgerPopup onClick={() => setOpen(false)} />}
        </div>
    );
};

export default MenuBurger;

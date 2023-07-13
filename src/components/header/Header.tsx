import React from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import HeaderBusket from "./busket/HeaderBusket";
import HeaderContact from "./contacts/HeaderContact";
import styles from "./Header.module.scss";
import MenuBurger from "./menuBurger/MenuBurger";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <MenuBurger />
            <Logo />
            <Navigation />
            <HeaderContact />
            <HeaderBusket />
        </div>
    );
};

export default Header;

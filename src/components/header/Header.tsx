import React from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import Busket from "./busket/Busket";
import Contact from "./contacts/Contact";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <Navigation />
            <Contact />
            <Busket />
        </div>
    );
}

export default Header;

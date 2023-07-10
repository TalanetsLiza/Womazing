import React from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import FooterCategories from "./categories/FooterCategories";
import FooterContacts from "./contacts/FooterContacts";
import styles from "./Footer.module.scss";
import FooterInformation from "./information/FooterInformation";
import FooterLinks from "./links/FooterLinks";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Logo />
                <Navigation />
                <FooterContacts />
            </div>
            <div className={styles.containerBottom}>
                <FooterInformation />
                <FooterCategories />
                <FooterLinks />
            </div>
        </div>
    );
};

export default Footer;

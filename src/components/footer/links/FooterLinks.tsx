import styles from "./FooterLinks.module.scss";
import { ReactComponent as InstagramIcon } from "../../../assets/icon/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icon/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icon/twitter.svg";
import image from "../../../assets/icon/visaMastercard.png";
import React from "react";

const FooterLinks: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <a href="https://www.instagram.com" target="_blank">
                    <InstagramIcon />
                </a>
                <a href="https://www.facebook.com" target="_blank" className={styles.icon}>
                    <FacebookIcon />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <TwitterIcon />
                </a>
            </div>
            <img src={image} alt="visaMastercard" />
        </div>
    );
};

export default FooterLinks;

import React from "react";
import t from "../../../assets/translations/translations";
import PageTitle from "../../pageTitle/PageTitle";
import styles from "./About.module.scss"
import Image1 from "../../../assets/images/aboutPageArticle1.png";
import Image2 from "../../../assets/images/aboutPageArticle2.png";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import pageUrls from "../../../constants/pageUrls";

const About: React.FC = () => {
    return (
        <div className="block">
            <div className={styles.container}>
                <PageTitle titleKey="about" />
                <div className={styles.block}>
                    <img className={styles.image} src={Image1} alt="фото" />
                    <div className={styles.section}>
                        <div className={styles.title}>
                            {t.aboutPage.articles[0].title}
                        </div>
                        <div className={styles.description}>
                            {t.aboutPage.articles[0].paragraphs.map((text) => (
                                <p key={text}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.section}>
                        <div className={styles.title}>
                            {t.aboutPage.articles[1].title}
                        </div>
                        <div className={styles.description}>
                            {t.aboutPage.articles[1].paragraphs.map((text) => (
                                <p key={text}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                    <img className={styles.image} src={Image2} alt="фото" />
                </div>
                <Link to={pageUrls.shop} className={styles.link}>
                    <Button 
                        variant="filled"
                        type="submit"
                    >
                        {t.button.goShop}
                    </Button>
                </Link>
                
            </div>
        </div>
    );
};

export default About;
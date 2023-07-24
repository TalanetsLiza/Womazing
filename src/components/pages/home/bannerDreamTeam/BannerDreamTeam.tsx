import React from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import styles from "./BannerDreamTeam.module.scss";
import DemoCarousel from "./carousel/DemoCarousel";

const BannerDreamTeam: React.FC = () => {
    return (
        <div className="block">
            <div className={`${styles.container}`}>
                <h2 className={styles.title}>
                    {t.bunnerDreamTeamt.title}
                </h2>
                <div className={styles.block}>
                    <DemoCarousel />
                    <div className={styles.blockRight}>
                        <div className={styles.__title}>
                            {t.bunnerDreamTeamt.block.title}
                        </div>
                        <p className={styles.__description}>
                            {t.bunnerDreamTeamt.block.description.paragraphs1}
                        </p>
                        <p className={styles.__description}>
                            {t.bunnerDreamTeamt.block.description.paragraphs2}
                        </p>
                        <Link to={pageUrls.about} className={styles.button}>
                            {t.button.about}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerDreamTeam;

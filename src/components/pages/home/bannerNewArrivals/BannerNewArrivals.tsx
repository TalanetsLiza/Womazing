import React from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import Button from "../../../button/Button";
import styles from "./BannerNewArrivals.module.scss";
import BannerNewArrivalsImageLeft from "../../../../assets/images/bannerNewArrivalsImageLeft.png";
import BannerNewArrivalsImageCenter from "../../../../assets/images/bannerNewArrivalsImageCenter.png";
import BannerNewArrivalsImageRight from "../../../../assets/images/bannerNewArrivalsImageRight.png";

const BannerNewArrivals: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockText}>
                <h2 className={styles.title}>
                    {t.bannerNewArrivals.title}
                </h2>
                <div className={styles.description}>
                    {t.bannerNewArrivals.description}
                </div>
                <Link to={pageUrls.shop} className={styles.button}>
                    <Button>
                        {t.button.openShop}
                    </Button>
                </Link>
            </div>
            <div className={styles.blockImage}>
                <img
                    className={styles.imageLeft}
                    src={BannerNewArrivalsImageLeft}
                    alt="foto"
                />
                <img
                    className={styles.imageCenter}
                    src={BannerNewArrivalsImageCenter}
                    alt="foto"
                />
                <img
                    className={styles.imageRight}
                    src={BannerNewArrivalsImageRight}
                    alt="foto"
                />
            </div>
        </div>
    );
};

export default BannerNewArrivals;

import React from "react";
import t from "../../../../assets/translations/translations";
import { ReactComponent as SpeedIcon } from "../../../../assets/icon/speed.svg";
import { ReactComponent as HandIcon } from "../../../../assets/icon/hand.svg";
import { ReactComponent as QualityIcon } from "../../../../assets/icon/quality.svg";
import styles from "./BannerImportant.module.scss";
import BannerItem from "./item/BannerItem";

const BannerImportant: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t.bunnerImportant.title}
            </h2>
            <div className={styles.block}>
                <BannerItem
                    Icon={<QualityIcon />}
                    title={t.bunnerImportant.qualityBlock.title}
                    description={t.bunnerImportant.qualityBlock.description}
                />
                <BannerItem
                    Icon={<SpeedIcon/>}
                    title={t.bunnerImportant.speedBlock.title}
                    description={t.bunnerImportant.speedBlock.description}
                />
                <BannerItem
                    Icon={<HandIcon />}
                    title={t.bunnerImportant.responsibilityBlock.title}
                    description={t.bunnerImportant.responsibilityBlock.description}
                />
            </div>
        </div>
    );
};

export default BannerImportant;

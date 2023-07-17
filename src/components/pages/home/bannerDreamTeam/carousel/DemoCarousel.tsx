import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../../../../assets/images/bannerDremTeamImage1.png";
import Image2 from "../../../../../assets/images/bannerDremTeamImage2.png";
import Image3 from "../../../../../assets/images/bannerDremTeamImage3.png";
import { ReactComponent as ArrowNext } from "../../../../../assets/icon/arrowNext.svg";
import { ReactComponent as ArrowPrev } from "../../../../../assets/icon/arrowPrev.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./DemoCarousel.module.scss";

const DemoCarousel: React.FC = () => {
    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
            className={styles.container}
            renderArrowPrev={(clickHandler, hasPrev) => (
                <button onClick={clickHandler} className={styles.prevButton} disabled={!hasPrev}>
                    <ArrowPrev/>
                </button>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
                <button onClick={clickHandler} className={styles.nextButton} disabled={!hasNext}>
                    <ArrowNext/>
                </button>
            )}
        >
            <div>
                <img src={Image1} alt="фото" />
            </div>
            <div>
                <img src={Image2} alt="фото" />
            </div>
            <div>
                <img src={Image3} alt="фото" />
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
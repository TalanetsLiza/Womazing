import React from "react";
import BannerDreamTeam from "./bannerDreamTeam/BannerDreamTeam";
import BannerImportant from "./bannerImportant/BannerImportant";
import BannerNewArrivals from "./bannerNewArrivals/BannerNewArrivals";
import NewCollection from "./newCollection/NewCollection";

const Home: React.FC = () => {
    return (
        <div>
            <BannerNewArrivals />
            <NewCollection />
            <BannerImportant />
            <BannerDreamTeam />
        </div>
    );
};

export default Home;

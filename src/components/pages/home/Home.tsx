import React from "react";
import BannerDreamTeam from "./bannerDreamTeam/BannerDreamTeam";
import BannerImportant from "./BannerImportant/BannerImportant";
import NewCollection from "./newCollection/NewCollection";

const Home: React.FC = () => {
    return (
        <div>
            <NewCollection />
            <BannerImportant />
            <BannerDreamTeam />
        </div>
    );
};

export default Home;

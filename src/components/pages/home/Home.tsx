import React from "react";
import BannerImportant from "./BannerImportant/BannerImportant";
import NewCollection from "./newCollection/NewCollection";

const Home: React.FC = () => {
    return (
        <div>
            <NewCollection />
            <BannerImportant />
        </div>
    );
};

export default Home;

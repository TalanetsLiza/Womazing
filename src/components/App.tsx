import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import pageUrls from "../constants/pageUrls";
import { fetchShop } from "../store/shop/shopSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styles from "./App.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import About from "./pages/about/About";
import Busket from "./pages/busket/Busket";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const shopData = useAppSelector((state) => state.shop.data);

    console.log(shopData);

    useEffect( () => {
        dispatch(fetchShop());
    }, []);

    return (
        <>
            <div className={styles.container}>
            <Header />
            <Routes>
                <Route path={pageUrls.home} element={<Home />} />
                <Route path={pageUrls.shop} element={<Shop />} />
                <Route path={pageUrls.about} element={<About />} />
                <Route path={pageUrls.contacts} element={<Contacts />} />
                <Route path={pageUrls.busket} element={<Busket />} />
            </Routes>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
            
        </>
    );
};

export default App;

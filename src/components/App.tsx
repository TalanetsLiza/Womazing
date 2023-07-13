import React from "react";
import { Routes, Route } from "react-router-dom";
import pageUrls from "../constants/pageUrls";
import styles from "./App.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import About from "./pages/about/About";
import Busket from "./pages/busket/Busket";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import ProductPage from "./pages/product/ProductPage";
import Shop from "./pages/shop/Shop";

const App: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
            <Header />
            <Routes>
                <Route path={pageUrls.home} element={<Home />} />
                <Route path={pageUrls.shop} element={<Shop />} />
                <Route path={`${pageUrls.product}/:id`} element={<ProductPage />} />
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

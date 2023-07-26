import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import pageUrls from "../constants/pageUrls";
import styles from "./App.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import About from "./pages/about/About";
import Busket from "./pages/busket/Busket";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Ordering from "./pages/ordering/Ordering";
import OrderReceived from "./pages/orderReceived/OrderReceived";
import ProductPage from "./pages/product/ProductPage";
import Shop from "./pages/shop/Shop";

const App: React.FC = () => {
    const { pathname, search } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, search]);

    return (
        <>
            <div className={styles.container}>
                <Header />
                <Routes>
                    <Route path={pageUrls.home} element={<Home />} />
                    <Route path={`${pageUrls.shop}`} element={<Shop />} />
                    <Route path={`${pageUrls.product}/:id`} element={<ProductPage />} />
                    <Route path={pageUrls.about} element={<About />} />
                    <Route path={pageUrls.contacts} element={<Contacts />} />
                    <Route path={pageUrls.busket} element={<Busket />} />
                    <Route path={pageUrls.ordering} element={<Ordering />} />
                    <Route path={pageUrls.orderReceived} element={<OrderReceived />} />
                </Routes>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default App;

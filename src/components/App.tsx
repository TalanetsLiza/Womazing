import React from "react";
import styles from "./App.module.scss";
import Header from "./header/Header";

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
}

export default App;

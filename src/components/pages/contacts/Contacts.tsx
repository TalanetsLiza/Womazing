import React from "react";
import styles from "./Contacts.module.scss";
import PageTitle from "../../pageTitle/PageTitle";
import Information from "./information/Information";
import Map from "./map/Map";
import FormContacts from "./form/FormContacts";

const Contacts: React.FC = () => {
    return (
        <div className="block">
            <PageTitle titleKey="contacts" />
            <div className={styles.container}>
                <Map />
                <Information />
                <FormContacts />
            </div>
        </div>
    );
};

export default Contacts;

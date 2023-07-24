import React, { useState } from "react";
import PageTitle from "../../pageTitle/PageTitle";
import styles from "./Ordering.module.scss"
import Form from "./form/Form";
import Order from "./order/Ordex";
import OrderType from "../../../types/order/OrderType";
import useValidation from "../../../hooks/useValidation";
import { useAppDispatch } from "../../../store/store";
import { clearLocalStorage } from "../../../store/busket/busketSlice";
import { useNavigate } from "react-router-dom";
import pageUrls from "../../../constants/pageUrls";


const defaultState: OrderType = {
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    street: "",
    house: "",
    flat: "",
    comment: "",
    cashPayment: false,
};

const Ordering: React.FC = () => {
    const [values, setValues] = useState<OrderType>(defaultState);
    const dispatch = useAppDispatch();
    const validation = useValidation();
    const navigate = useNavigate();

    const handelSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        Object.entries(values).forEach(([name, value]) => validation.validate(name as keyof OrderType, value));
        setTimeout(() => {
            const hasErorr = Object.values(validation.errorsRef.current).some((text) => !!text);
            if (hasErorr) {
                const form = document.getElementById("ordering-form");
                form?.scrollIntoView();
                return;
            }
            dispatch(clearLocalStorage());
            navigate(pageUrls.orderReceived);
        }, 10);
    };

    return (
        <div className="block">
            <PageTitle titleKey="ordering" />
            <form className={styles.container} onSubmit={handelSubmit} id="ordering-form">
                <Form values={values} setValues={setValues} validation={validation}/>
                <Order values={values} setValues={setValues} validation={validation}/>
            </form>
        </div>
    );
};

export default Ordering;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import t from "../../../../assets/translations/translations";
import pageUrls from "../../../../constants/pageUrls";
import useTotalBusketPrice from "../../../../hooks/useTotalBusketPrice";
import { ValidationType } from "../../../../hooks/useValidation";
import { fetchBusketItemsData } from "../../../../store/busket/busketSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import OrderType from "../../../../types/order/OrderType";
import Button from "../../../button/Button";
import styles from "./Order.module.scss";

interface PropsType {
    values: OrderType,
    setValues: (value: OrderType) => void,
    validation: ValidationType,
}

const Order: React.FC<PropsType> = ({
    values,
    setValues,
    validation,
}) => {
    const itemsData = useAppSelector((state) => state.busket.itemsData);
    const totalPrice = useTotalBusketPrice();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBusketItemsData());
    }, []);

    const handleChangeCashPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValues = {...values};
        newValues.cashPayment = event.target.checked;
        setValues(newValues);
    };

    const hasErorr = Object.values(validation.errors).some((text) => !!text);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t.ordering.title.order}
            </h2>
            <div className={styles.table}>
                <div>
                    {t.busketPage.tableHeader.product}
                </div>
                <div>
                    {t.busketPage.tableHeader.totalPrice}
                </div>
            </div>
            {itemsData.map((dataItem) => {
                const currentPrice = dataItem.priceSale ?? dataItem?.price;
                return (
                    <div className={styles.tableInfo} key={dataItem.id}>
                        {dataItem.title}
                        <div>
                            ${currentPrice}
                        </div>
                    </div>
                );
            })}
            <div className={styles.tableInfo}>
                {t.busketPage.totalBusket.subtotal}
                <div>
                    ${totalPrice}
                </div>
            </div>
            <div className={`${styles.table} ${styles.tableTotal}`}>
                {t.busketPage.totalBusket.total}
                <div>
                    ${totalPrice}
                </div>
            </div>
            <div className={styles.payment}>
                <div className={styles.title}>
                    {t.ordering.title.paymentMethods}
                </div>
                <label className={styles.paymentLabel}>
                    <input
                        className={styles.paymentInput}
                        type="checkbox"
                        name="agreement"
                        checked={values.cashPayment}
                        onChange={handleChangeCashPayment}
                        
                    />
                    {t.ordering.title.paementCash}
                </label>
                <Button
                    type="submit"
                    disabled={hasErorr}
                >
                    {t.button.placeYourOrder}
                </Button>
            </div>
        </div>
    );
};

export default Order;

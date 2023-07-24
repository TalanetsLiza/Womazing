import { useAppSelector } from "../store/store";

const useTotalBusketPrice = (): number => {
    const items = useAppSelector((state) => state.busket.items);
    const itemsData = useAppSelector((state) => state.busket.itemsData);

    const totalPrice = items.reduce((acc, item) => {
        const itemData = itemsData.find((itemData) => item.id === itemData.id);
        if (!itemData) {
            return acc;
        }
        const currentItemPrice = itemData.priceSale ?? itemData?.price;
        const totalItemPrice = currentItemPrice * item.count;
        return acc + totalItemPrice;
    }, 0);

    return totalPrice;
};

export default useTotalBusketPrice;

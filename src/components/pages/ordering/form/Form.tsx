import React from "react";
import t from "../../../../assets/translations/translations";
import TextField from "../../../textField/TextField";
import OrderType from "../../../../types/order/OrderType";
import { ValidationType } from "../../../../hooks/useValidation";
import FormGroup from "../../../formGroup/FormGroup";

interface PropsType {
    values: OrderType,
    setValues: (value: OrderType) => void,
    validation: ValidationType,
}

const Form: React.FC<PropsType> = ({ 
    values,
    setValues,
    validation: { validate, errors },
}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValues: OrderType = {...values};
        const name = event.target.name as keyof OrderType;
        const value = event.target.value;

        // @ts-ignore
        newValues[name] = value;

        validate(name, value);
        setValues(newValues);
    };

    return (
        <div>
            <FormGroup title={t.ordering.title.buyerData}>
                <TextField
                    placeholder={t.ordering.placeholder.name}
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name}
                />
                <TextField
                    placeholder={t.ordering.placeholder.email}
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email}
                />
                <TextField
                    placeholder={t.ordering.placeholder.phone}
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    error={errors.phone}
                />
            </FormGroup>
            <FormGroup title={t.ordering.title.address}>
                <TextField
                    placeholder={t.ordering.placeholder.country}
                    name="country"
                    onChange={handleChange}
                    value={values.country}
                />
                <TextField
                    placeholder={t.ordering.placeholder.city}
                    name="city"
                    onChange={handleChange}
                    value={values.city}
                />
                <TextField
                    placeholder={t.ordering.placeholder.street}
                    name="street"
                    onChange={handleChange}
                    value={values.street}
                />
                <TextField
                    placeholder={t.ordering.placeholder.house}
                    name="house"
                    onChange={handleChange}
                    value={values.house}
                />
                <TextField
                    placeholder={t.ordering.placeholder.flat}
                    name="flat"
                    onChange={handleChange}
                    value={values.flat}
                    error={errors.flat}
                />
            </FormGroup>
            <FormGroup title={t.ordering.title.comments}>
                <TextField
                    placeholder={t.ordering.placeholder.comment}
                    name="comment"
                    onChange={handleChange}
                    value={values.comment}
                />
            </FormGroup>
        </div>
    );
};

export default Form;

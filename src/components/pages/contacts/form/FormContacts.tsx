import React, { useState } from "react";
import t from "../../../../assets/translations/translations";
import useValidation from "../../../../hooks/useValidation";
import ContactFormType from "../../../../types/contactForm/ContactFormType";
import Button from "../../../button/Button";
import FormGroup from "../../../formGroup/FormGroup";
import TextField from "../../../textField/TextField";
import styles from "./FormContacts.module.scss";

const defaultState: ContactFormType = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const FormContacts: React.FC = () => {

    const [values, setValues] = useState<ContactFormType>(defaultState);
    const [isSuccess, setIsSuccess] = useState(false);
    const {validate, errors, errorsRef} = useValidation();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValues: ContactFormType = {...values};
        const name = event.target.name as keyof ContactFormType;
        const value = event.target.value;
        newValues[name] = value;

        validate(name, value);
        setValues(newValues);
    };

    const handelSubmit = () => {
        Object.entries(values).forEach(([name, value]) => validate(name, value));
        setTimeout(() => {
            const hasErorr = Object.values(errorsRef.current).some((text) => !!text);
            if (hasErorr) {
                return;
            }
            setValues(defaultState);
            setIsSuccess(true);
        }, 10);
    };

    return (
        <div className={styles.container}>
            <FormGroup title={t.ordering.title.writeToUs}>
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
                <TextField
                    placeholder={t.ordering.placeholder.message}
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                />
                <Button
                    type="submit"
                    onClick={handelSubmit}
                >
                    {t.button.send}
                </Button>
                {isSuccess && (
                    <div className={styles.success}>
                        {t.ordering.success}
                    </div>
                )}
            </FormGroup>
        </div>
    );
};

export default FormContacts;

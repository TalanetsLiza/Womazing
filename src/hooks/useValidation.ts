import { useEffect, useRef, useState } from "react";
import OrderType from "../types/order/OrderType";

type ErrorsType = Partial<Record<keyof OrderType, string>>;

const regularPhone = /^\+375\(\d{2}\)\d{7}$/;
const regularNumber = /[1-9][0-9]{0,2}/;
const pattern = /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;

export type ValidationType = {
	errors: ErrorsType,
	validate: (name: keyof OrderType, value: string) => void,
	errorsRef: React.MutableRefObject<ErrorsType>,
}

const useValidation = () => {
    const [errors, setErrors] = useState<ErrorsType>({});
	const errorsRef = useRef<ErrorsType>({});

	useEffect(() => {
		errorsRef.current = errors;
	}, [errors]);

    const validate = (name: keyof OrderType, value: string) => {
        switch(name) {
            case "name": {
				if (value.length < 2 || value.length > 10) {
					setErrors((preverrorss) => ({ ...preverrorss, name: "Имя должно содержать от 2 до 10 букв"}));
				} else {
					setErrors((preverrorss) =>({...preverrorss, name: "" }));
				}
				break;
			}
            case "phone": {
				if (!regularPhone.test(value)) {
					setErrors((preverrorss) =>({ ...preverrorss, phone: "Образец для номера телефона +375(29)1234567"}));
				} else {
					setErrors((preverrorss) =>({...preverrorss, phone: "" }));
				}
				break;
			}
			case "email": {
				if (!pattern.test(value)) {
					setErrors((preverrorss) =>({ ...preverrorss, email: "Образец для почты ivanov@mail.ru"}));
				} else {
					setErrors((preverrorss) =>({...preverrorss, email: "" }));
				}
				break;
			}
            case "flat": {
				if (!regularNumber.test(value)) {
					setErrors((preverrorss) =>({ ...preverrorss, flat: "Поле должно содержать только цифры"}));
				} else {
					setErrors((preverrorss) =>({...preverrorss, flat: "" }));
				}
				break;
			}
            default: break;
        }
    };
    return { errors, validate, errorsRef };
};

export default useValidation;

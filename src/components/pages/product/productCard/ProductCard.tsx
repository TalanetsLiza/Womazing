import React, { useState } from "react";
import t from "../../../../assets/translations/translations";
import ProductType, { SizeType } from "../../../../types/product/ProductType";
import Button from "../../../button/Button";
import PageTitle from "../../../pageTitle/PageTitle";
import ButtonColor from "../buttonColor/ButtonColor";
import ButtonSize from "../buttonSize/ButtonSize";
import styles from "./ProductCard.module.scss";

interface PropsType {
    productData: ProductType;
}

const ProductCard: React.FC<PropsType> = ({
    productData,
}) => {
    const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
    const [seleckedColor, setSelectedColor] = useState<string | null>(null);

    // console.log(selectedSize);

    const currentPrice = productData.priceSale ?? productData?.price;
    const oldPrice = productData.priceSale && productData.price;

    return (
        <>
            <PageTitle text={productData.title} />
            <div className={styles.product}>
                <img
                    className={styles.image}
                    src={productData.image.src}
                    alt={productData.image.alt}
                    />
                <div className={styles.container}>
                    <div className={styles.price}>
                        <span>
                            ${currentPrice}
                        </span>
                        {oldPrice && (
                            <span className={styles.oldPrice}>
                                ${oldPrice}
                            </span>
                        )}
                    </div>
                    <div className={styles.conditions}>
                        {t.productPage.sizeName}
                        <div className={styles.containerSize}>
                            {productData.sizes.map((size) => (
                                <ButtonSize
                                    key={size}
                                    size={size}
                                    onSelect={setSelectedSize}
                                    isActive={size === selectedSize}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.conditions}>
                        {t.productPage.colorName}
                        <div className={styles.containerSize}>
                            {productData.colors.map((color) => (
                                <ButtonColor
                                    key={color}
                                    color={color}
                                    onSelect={setSelectedColor}
                                    isActive={color === seleckedColor}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.containerButton}>
                        <button className={styles.amountButton}>
                            1
                        </button>
                        <Button 
                        variant="filled"
                        type="submit"

                        >
                            {t.button.addBusket}
                        </Button>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default ProductCard;

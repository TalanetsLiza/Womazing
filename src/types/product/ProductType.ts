 export type SizeType = "S" | "M" | "L" | "XL" | "XXL";

interface ProductType {
    id: number,
    title: string,
    priceSale: number | null,
    price: number,
    image: {
        src: string,
        alt: string,
    },
    sizes: SizeType[],
    colors: string[],

}

export default ProductType;
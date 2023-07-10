interface ProductType {
    id: number,
    title: string,
    priceSale: number | null,
    price: number,
    image: {
        src: string,
        alt: string,
    }
}

export default ProductType;
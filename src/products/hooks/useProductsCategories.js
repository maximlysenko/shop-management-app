import { useMemo } from "react";
import useProducts from "./useProducts";

function useProductsCategories() {
    const products = useProducts();

    return useMemo(() => {
        return products.reduce((categories, product) => {
            if (categories.includes(product.category)) {
                return categories;
            }

            return categories.concat(product.category);
        }, []);
    }, [products]);
}

export default useProductsCategories;

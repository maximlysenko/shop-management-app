import useProductsStore from "../store/useProductsStore";

function useProducts() {
    return useProductsStore(s => s.products);
}

export default useProducts;

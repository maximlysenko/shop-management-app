import productsAPIService from "../services/api/apiService";

export function createFetchProductsAction(setState) {
    return async function fetchProducts() {
        setState({ productsFetchError: undefined, productsBeingFetched: true });

        try {
            const products = await productsAPIService.fetchProducts();

            setState({
                products, productsBeingFetched: false
            });
        } catch (e) {
            setState({ productsFetchError: e.message, productsBeingFetched: false });
        }
    };
}

export function createAddProductAction(setState, getState) {
    return async function createProduct(dto) {
        setState({ productAddError: undefined, productIsBeingAdded: true });

        try {
            const { id } = await productsAPIService.createProduct(dto);

            return setState({
                products: [{ ...dto, id }].concat(getState().products),
                productIsBeingAdded: false,
            });
        } catch (e) {
            return setState({ productAddError: e.message, productIsBeingAdded: false });
        }
    };
}

export function createUpdateProductAction(setState, getState) {
    return async function updateProducts(id, dto) {
        setState({ productUpdateError: undefined, productIsBeingUpdated: true });

        try {
            const response = await productsAPIService.updateProduct(id, dto);

            setState({
                products: getState().products.map((p) => {
                    if (p.id === id) {
                        return { ...dto, id: response.id };
                    }

                    return p;
                }),
                productIsBeingUpdated: false,
            });
        } catch (e) {
            setState({ productUpdateError: e.message, productIsBeingUpdated: false });
        }
    };
}

export function createProductDeleteAction(setState, getState) {
    return async function deleteProducts(id) {
        setState({ productDeleteError: undefined, productIsBeingDeleted: true });

        try {
            await productsAPIService.deleteProduct(id);

            setState({
                products: getState().products.filter((p) => p.id !== id),
                productIsBeingDeleted: false,
            });
        } catch (e) {
            setState({ productDeleteError: e.message, productIsBeingDeleted: false });
        }
    };
}

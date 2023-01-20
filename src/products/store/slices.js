import {
    createAddProductAction,
    createProductDeleteAction,
    createFetchProductsAction,
    createUpdateProductAction
} from "./action-creators";

export function createProductsListSlice(set, get) {
    return {
        products: [],
        productsBeingFetched: false,
        productsFetchError: undefined,
        fetchProducts: createFetchProductsAction(set, get),
    };
}

export function createAddProductSlice(set, get) {
    return {
        productIsBeingAdded: false,
        productAddError: undefined,
        addProduct: createAddProductAction(set, get),
    };
}

export function createProductUpdateSlice(set, get) {
    return {
        productIsBeingUpdated: false,
        productUpdateError: undefined,
        updateProduct: createUpdateProductAction(set, get),
    };
}

export function createProductDeleteSlice(set, get) {
    return {
        productIsBeingDeleted: false,
        productDeleteError: false,
        deleteProduct: createProductDeleteAction(set, get),
    };
}

import { create } from "zustand";
import {
    createAddProductSlice,
    createProductDeleteSlice,
    createProductsListSlice,
    createProductUpdateSlice
} from "./slices";

const useProductsStore = create((set, get) => ({
    ...createProductsListSlice(set, get),
    ...createAddProductSlice(set, get),
    ...createProductUpdateSlice(set, get),
    ...createProductDeleteSlice(set, get),
}));

export default useProductsStore;

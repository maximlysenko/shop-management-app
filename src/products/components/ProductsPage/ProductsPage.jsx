import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchField from "../../../shared/components/SearchField/SearchField";
import useProductsCategories from "../../hooks/useProductsCategories";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import ProductModal from "../ProductModal/ProductModal";
import ProductsList from "../ProductsList/ProductsList";
import useProductsStore from "../../store/useProductsStore";
import {
    addButtonStyles,
    filtersSectionStyles,
    pageContainerStyles,
    pageInnerContainerStyles,
    pageTitleStyles,
    productsListSectionStyles,
    scrollableContainerStyles,
    searchContainerStyles,
} from "./styles";

function ProductsPage() {
    const fetchProducts = useProductsStore(s => s.fetchProducts);
    const addProduct = useProductsStore(s => s.addProduct);
    const [, productIsBeingAdded] = useProductsStore(
        (s) => [s.productAddError, s.productIsBeingAdded],
    );
    const updateProduct = useProductsStore(s => s.updateProduct);
    const productIsBeingUpdated = useProductsStore(s => s.productIsBeingUpdated);
    const deleteProduct = useProductsStore(s => s.deleteProduct);
    const [productsBeingFetched, products] = useProductsStore(
        s => [s.productsBeingFetched, s.products],
    );
    const categories = useProductsCategories();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState(categories);

    const [modalProps, setModalProps] = useState({ isOpen: false, product: null });

    const filteredProducts = products
        .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((product) => selectedCategories.includes(product.category));

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setSelectedCategories(categories);
    }, [categories]);

    useEffect(() => {
        if (!productIsBeingAdded) {
            handleModalClose();
        }
    }, [productIsBeingAdded]);

    useEffect(() => {
        if (!productIsBeingUpdated) {
            handleModalClose();
        }
    }, [productIsBeingUpdated]);

    function handleSearch(searchTerm) {
        setSearchTerm(searchTerm);
    }

    function handleModalClose() {
        setModalProps({ isOpen: false, product: null });
    }

    function handleModalSubmit(product) {
        if (modalProps.product === null) {
            addProduct(product);
        } else {
            updateProduct(modalProps.product.id, product);
        }
    }

    return (
        <Box sx={pageContainerStyles}>
            <Typography component="h2" variant="h4" sx={pageTitleStyles}>Products</Typography>
            <Box sx={pageInnerContainerStyles}>
                <Box sx={filtersSectionStyles}>
                    <Typography component="span">Filters:</Typography>
                    <Box>
                        <CategoriesFilter
                            categories={categories}
                            selectedCategories={selectedCategories}
                            onSelectionChange={setSelectedCategories}
                        />
                    </Box>
                </Box>
                <Box sx={productsListSectionStyles}>
                    <Box sx={searchContainerStyles}>
                        <Button
                            size="small"
                            sx={addButtonStyles}
                            variant="contained"
                            onClick={() => setModalProps((s) => ({ ...s, isOpen: true }))}
                        >
                            Add
                        </Button>
                        <SearchField
                            label="Search by title"
                            searchTerm={searchTerm}
                            onSearch={handleSearch}
                        />
                    </Box>
                    <Box sx={scrollableContainerStyles}>
                        <ProductsList
                            isLoading={productsBeingFetched}
                            products={filteredProducts}
                            onDeleteClick={(p) => deleteProduct(p.id)}
                            onEditClick={(product) => setModalProps({ isOpen: true, product })}
                        />
                    </Box>
                </Box>
                <ProductModal
                    {...modalProps}
                    categories={categories}
                    isLoading={productIsBeingAdded}
                    onCancel={handleModalClose}
                    onSubmit={handleModalSubmit}
                />
            </Box>
        </Box>
    );
}

export default ProductsPage;

import { Box, CircularProgress, Grid } from "@mui/material";
import { useCallback } from "react";
import ProductView from "../Product/ProductView";
import { loaderContainerStyles, productsListContainerStyles } from "./styles";

function ProductsList(props) {
    const { isLoading, products, onDeleteClick, onEditClick } = props;

    const handleProductEdit = useCallback((product) => {
        onEditClick(product);
    }, []);

    const handleProductDelete = useCallback((product) => {
        onDeleteClick(product);
    }, []);

    function renderListOrLoader() {
        if (isLoading) {
            return (
                <Box sx={loaderContainerStyles}>
                    <CircularProgress />
                </Box>
            );
        }

        return (
            <Grid container spacing="16px">
                {products.map((product) => {
                    return (
                        <Grid item key={product.id}>
                            <ProductView
                                product={product}
                                onDelete={handleProductDelete}
                                onEdit={handleProductEdit}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }

    return (
        <Box sx={productsListContainerStyles}>
            {renderListOrLoader()}
        </Box>
    );
}

export default ProductsList;

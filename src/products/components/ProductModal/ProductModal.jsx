import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Button,
    Input,
    Modal,
    TextareaAutosize,
    Typography,
} from "@mui/material";
import { PLACEHOLDER_IMAGE_URL } from "../../constants/links";
import {
    bottomRowFieldsCoontainer,
    buttonsContainerStyles,
    headingContainerStyles,
    imageContainerStyles,
    modalBoxStyles,
    productImageStyles,
    textAreaStyles,
    topRowFieldsContainer,
    topSectionStyles,
} from "./styles";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";

function ProductModal(props) {
    const { isLoading, isOpen, categories, product, onCancel, onSubmit } = props;
    const [title, setTitle] = useState(product?.title ?? "");
    const [description, setDescription] = useState(product?.description ?? "");
    const [price, setPrice] = useState(product?.price ?? "0");
    const [category, setCategory] = useState(product?.category ?? "");
    const isCreateMode = product === null;

    useEffect(() => {
        if (!isCreateMode) {
            setTitle(product.title);
            setPrice(String(product.price));
            setDescription(product.description);
            setCategory(product.category);
        }

        return () => {
            setTitle("");
            setPrice("0");
            setDescription("");
            setCategory("");
        };
    }, [product]);

    function isValid() {
        return title.length > 0
            && description.length > 0
            && Number(price) > 0 
            && category !== "";
    }

    function handleSubmitClick() {
        const baseObject = {
            category,
            title,
            description,
            price,
        };

        if (isCreateMode) {
            onSubmit({
                ...baseObject,
                image: PLACEHOLDER_IMAGE_URL,
                rating: {
                    rate: 0,
                    count: 0,
                },
            });
        } else {
            onSubmit({
                ...product,
                ...baseObject,
            });
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={onCancel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBoxStyles}>
                <Box sx={headingContainerStyles}>
                    <Typography component="span" fontSize="24px">
                        {isCreateMode ? "Add a new product" : `Edit product #${product.id}`}
                    </Typography>
                </Box>
                <Box sx={topSectionStyles}>
                    <Box sx={imageContainerStyles}>
                        <Box
                            alt={product?.title ?? "product"}
                            component="img"
                            src={product?.image ?? PLACEHOLDER_IMAGE_URL}
                            sx={productImageStyles}
                        />
                    </Box>
                    <Box sx={topRowFieldsContainer}>
                        <Input
                            id="product-title-input"
                            placeholder="Title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value.trim())}
                        />
                        <Input
                            id="product-price-input"
                            placeholder="Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value.trim())}
                        />
                        <CategoriesSelect 
                            selectedCategory={category} 
                            categories={categories} 
                            onSelect={setCategory} />
                    </Box>
                </Box>
                <Box sx={bottomRowFieldsCoontainer}>
                    <Box component="label" htmlFor="product-description-area" width="100%">
                        <Typography component="span">Description:</Typography>
                        <TextareaAutosize
                            id="product-description-area"
                            minRows={3}
                            style={textAreaStyles}
                            value={description}
                            onChange={(e) => setDescription(e.target.value.trim())}
                        />
                    </Box>
                </Box>
                <Box sx={buttonsContainerStyles}>
                    <Button variant="outlined" onClick={onCancel}>Cancel</Button>
                    <LoadingButton
                        loading={isLoading}
                        disabled={!isValid()}
                        variant="contained"
                        onClick={handleSubmitClick}
                    >
                        {isCreateMode ? "Add" : "Save"}
                    </LoadingButton>
                </Box>
            </Box>
        </Modal>
    );
}

export default ProductModal;

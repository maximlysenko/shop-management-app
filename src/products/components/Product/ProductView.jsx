import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { memo } from "react";
import { truncateDescription } from "../../utils";
import { productContainerStyles, productImageStyles } from "./styles";

function ProductView(props) {
    const { product, onDelete, onEdit } = props;

    return (
        <Card sx={productContainerStyles}>
            <CardMedia
                sx={productImageStyles}
                image={product.image}
                title={product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {truncateDescription(product.description)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onEdit(product)}>Edit</Button>
                <Button size="small" onClick={() => onDelete(product)}>Delete</Button>
            </CardActions>
        </Card>
    );
}

export default memo(ProductView);

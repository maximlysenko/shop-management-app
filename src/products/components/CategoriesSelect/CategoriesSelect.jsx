import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function CategoriesSelect(props) {
    const { categories, selectedCategory, onSelect } = props;

    function handleChange(e) {
        onSelect(e.target.value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={selectedCategory}
                    label="Category"
                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default CategoriesSelect;

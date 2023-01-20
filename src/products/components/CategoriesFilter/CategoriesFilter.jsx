import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { categoriesBoxStyles, categoriesFilerStyles } from "./styles";

function CategoriesFilter(props) {
    const { categories, selectedCategories, onSelectionChange } = props;
    const allCategoriesSelected = categories.length === selectedCategories.length;

    function toggleCategory(category, isSelected) {
        if (isSelected) {
            onSelectionChange(selectedCategories.filter((c) => c !== category));
        } else {
            onSelectionChange(selectedCategories.concat(category));
        }
    }

    function toggleAll() {
        if (allCategoriesSelected) {
            onSelectionChange([]);
        } else {
            onSelectionChange(categories);
        }
    }

    return (
        <Box sx={categoriesFilerStyles}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={allCategoriesSelected}
                        indeterminate={!allCategoriesSelected && selectedCategories.length > 0}
                        onChange={toggleAll}
                    />
                }
                label="All categories"
            />
            <Box sx={categoriesBoxStyles}>
                {categories.map((category) => {
                    const isChecked = selectedCategories.includes(category);

                    return (
                        <div key={category}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isChecked}
                                        onChange={() => toggleCategory(category, isChecked)}
                                    />
                                }
                                label={category}
                            />
                        </div>
                    );
                })}
            </Box>
        </Box>
    );
}

export default CategoriesFilter;

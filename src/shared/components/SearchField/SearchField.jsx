import { Box, TextField } from "@mui/material";
import { searchFieldContainerStyles } from "./styles";

function SearchField(props) {
    const { label = "Search", searchTerm, onSearch } = props;

    function handleChange(e) {
        onSearch(e.target.value.trim());
    }

    return (
        <Box sx={searchFieldContainerStyles}>
            <TextField
                fullWidth
                id="search-field"
                label={label}
                size="small"
                type="search"
                value={searchTerm}
                variant="standard"
                onChange={handleChange}
            />
        </Box>
    );
}

export default SearchField;

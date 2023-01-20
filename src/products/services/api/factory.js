import { API_URL } from "../../../shared/constants/api";

export default function createProductsAPIService() {
    function preProcessResponse(response) {
        return response.json();
    }

    return {
        fetchProducts() {
            return fetch(`${API_URL}/products`).then(preProcessResponse);
        },
        createProduct(createProductDTO) {
            return fetch(
                `${API_URL}/products`,
                {
                    method: "POST",
                    body: JSON.stringify(createProductDTO),
                }
            ).then(preProcessResponse);
        },
        updateProduct(id, updateProductDTO) {
            return fetch(
                `${API_URL}/products/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(updateProductDTO),
                }
            ).then(preProcessResponse);
        },
        deleteProduct(id) {
            return fetch(`${API_URL}/products/${id}`, { method: "DELETE" }).then(preProcessResponse);
        },
    };
}

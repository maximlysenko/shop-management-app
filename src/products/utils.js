import { DESCRIPTION_MAX_PREVIEW_LENGTH } from "./constants/strings";

export function truncateDescription(description) {
    if (description.length > DESCRIPTION_MAX_PREVIEW_LENGTH) {
        return description.slice(0, DESCRIPTION_MAX_PREVIEW_LENGTH).concat("...")
    }

    return description;
}

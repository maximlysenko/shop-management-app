export const buttonsContainerStyles = {
    display: "flex",
    justifyContent: "flex-end", 
    mt: "24px",
    "& > *:not(:last-child)": { mr: "8px" },
};

export const textAreaStyles = {
    boxSizing: "border-box",
    fontFamily: "Roboto, Helvetica",
    fontSize: "14px",
    lineHeight: "18px",
    padding: "8px",
    resize: "none",
    textAlign: "justify",
    width: "100%",
};

export const bottomRowFieldsCoontainer = {
    display: "flex",
    mt: "16px",
};

export const topSectionStyles = {
    display: "flex",
    justifyContent: "space-between",
};

export const topRowFieldsContainer = {
    display: "flex",
    flexDirection: "column",
    "& > *:not(:last-child)": {
        mb: "16px",
    },
};

export const productImageStyles = {
    display: "block",
    maxHeight: "100%",
    maxWidth: "100%",
};

export const imageContainerStyles = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "200px",
    width: "200px",
};

export const headingContainerStyles = {
    mb: "24px",
};

export const modalBoxStyles = {
    bgcolor: "background.paper",
    borderRadius: "6px",
    boxShadow: 24,
    left: "50%",
    p: "16px",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
};

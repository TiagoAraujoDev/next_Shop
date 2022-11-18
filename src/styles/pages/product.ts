import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    fontSize: "$2xl",
    color: "$green300",
    display: "block",
    marginTop: "1rem",
  },

  p: {
    color: "$gray300",
    fontSize: "$md",
    lineHeight: 1.6,
    marginTop: "2.5rem",
  },

  button: {
    backgroundColor: "$green500",
    border: "none",
    borderRadius: 8,
    marginTop: "auto",
    padding: "1.5rem 2rem",
    color: "White",
    fontSize: "$md",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "$green300",
      transition: "all 0.2s ease-in",
    },
  },
});

export const LoadingProduct = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "$green300",
  fontSize: "$2xl",
  fontWeight: "bold",
  color: "$white",
})

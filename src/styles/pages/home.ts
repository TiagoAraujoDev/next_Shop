import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2 ))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.9)",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    background: "rgba(32, 32, 36, 0.9)",

    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    borderRadius: 6,

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$white",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

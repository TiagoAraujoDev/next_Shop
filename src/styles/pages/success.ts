import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    fontWeight: "bold",
  },

  p: {
    color: "$gray300",
    fontSize: "$xl",
    maxWidth: 560,
    textAlign: "center",
    lineHeight: 1.4,
    marginTop: "2rem",
  },

  a: {
    display: "block",
    textDecoration: "none",
    marginTop: "5rem",
    color: "$green500",
    fontWeight: "bold",
    fontSize: "$lg",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  width: "100%",
  maxWidth: 127,
  height: 145,
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

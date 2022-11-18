import { globalCss } from ".";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray900",
  },

  "input, textarea, button, body": {
    fontFamily: "Roboto, san-serif",
    fontSize: "1rem",
    fontWeight: 400,
  },
});

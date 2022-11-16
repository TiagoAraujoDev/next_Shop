import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor: "$green300",
  borderRadius: 6,
  border: "none",
  padding: "4px 8px",

  "&:hover": {
    filter: 'brightness(0.8)',
  },
})

export default function Home() {
  return (
    <Button>
      Hello world!
    </Button>
  )
}

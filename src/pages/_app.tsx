import type { AppProps } from "next/app";
import Image from "next/image";

import { GlobalStyles } from "../styles/global";

import logoImg from "../../public/logo.svg";
import { Container, Header } from "../styles/pages/app";

GlobalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

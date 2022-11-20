import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  custumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ custumerName, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Success buy!</h1>
      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={130} alt="" />
      </ImageContainer>
      <p>
        Uhuul <strong>{custumerName}</strong>, sua Camiseta <strong>{product.name}</strong> já está a caminho
        da sua casa.
      </p>

      <Link href={"/"}>
        Back to home
      </Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const custumerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  console.log(product);
  return {
    props: {
      custumerName: custumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}

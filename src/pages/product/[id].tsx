import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";

import { stripe } from "../../lib/stripe";

import {
  ImageContainer,
  LoadingProduct,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    priceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const { isFallback } = useRouter();

  if (isFallback) {
    return <LoadingProduct>loading...</LoadingProduct>;
  }

  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckout(true);

      const response = await axios.post("/api/checkout-session", {
        priceId: product.priceId,
      });

      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      setIsCreatingCheckout(false);

      alert("An unexpected error occurred!");
    }
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={420} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button disabled={isCreatingCheckout} onClick={handleBuyProduct}>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { id: "prod_MoVyTY9UKL9J4j" } },
      // { params: { id: "prod_MoVxRDJCFSTzDg" } },
      // { params: { id: "prod_MoVwenSZ1m32gU" } },
      // { params: { id: "prod_MoVvPKJpQ1yPai" } },
      // { params: { id: "prod_MoVYoUwVK2DQJe" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: price.unit_amount
          ? new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
            }).format(price.unit_amount / 100)
          : "Preço não informado",
        priceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

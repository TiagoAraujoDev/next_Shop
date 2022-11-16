import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"

import { HomeContainer, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css"

import shirt from "../../public/shirts/Shirt1.png"

export default function Home() {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt} width="520" height="480" alt="" />
        <footer>
          <strong>T-Shirt</strong>
          <span>$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width="520" height="480" alt="" />
        <footer>
          <strong>T-Shirt</strong>
          <span>$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width="520" height="480" alt="" />
        <footer>
          <strong>T-Shirt</strong>
          <span>$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width="520" height="480" alt="" />
        <footer>
          <strong>T-Shirt</strong>
          <span>$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width="520" height="480" alt="" />
        <footer>
          <strong>T-Shirt</strong>
          <span>$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width="520" height="480" alt="" />
        <footer>
          <strong>T-Shirt</strong>
          <span>$ 50.00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

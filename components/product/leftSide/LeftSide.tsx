"use client";
import { productType } from "@/types/response";
import Image from "next/image";
import Link from "next/link";
import NumberInput from "./NumberInput";

interface Props {
  product: productType;
}
const LeftSide = ({ product }: Props) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col gap-y-5 w-1/2 px-14 py-6">
      <header>
        <span onClick={handleBack} className="iconHover">
          <Image src={"/icons/back.svg"} alt="back" width={22} height={22} />
        </span>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>{product.category.name}</Link>
            </li>
            <li className="text-dark_/80">{product.title}</li>
          </ul>
        </div>
      </header>
      <article className="mt-8 space-y-8">
        <h1>{product.title}</h1>
        <div className="flex justify-between p-2 mt-5">
          <span className="text-2xl text-dark_/80">{product.price}$</span>

          <div className="flex gap-x-3 items-center">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-gold_"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-gold_"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-gold_"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-gold_"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-gold_"
              />
            </div>

            <span className="">
              4.6/5.0<span className="text-dark_/80"> (511)</span>
            </span>
          </div>
        </div>

        <p>{product.description}</p>

        <div className="avatar-group space-x-2 w-full">
          <div className="avatar">
            <span className="w-5 h-5 rounded-full bg-green_ "></span>
          </div>
          <div className="avatar">
            <span className="w-5 h-5 rounded-full bg-red_"></span>
          </div>

          <div className="avatar">
            <span className="w-5 h-5 rounded-full bg-gold_"></span>
          </div>
        </div>

        <div className="flex items-center  gap-x-7">
          <NumberInput />

          <button className="btn bg-green_ px-10 text-white outline-none border-none hover:bg-green_/90 rounded-md">
            ADD TO CART
          </button>
        </div>

        <p>Free 2-5 day shipping • Tool-free assembly • 30-day trial</p>

        <div className="flex justify-between py-2">
          <span className="text-green_ text-base flex items-center gap-x-4 cursor-pointer   ">
            <Image
              src={"/icons/heart.svg"}
              alt="add to wishlist"
              width={22}
              height={22}
            />
            Add to wishlist
          </span>

          <div className="flex justify-between gap-x-3">
            <Image
              src={"/icons/twitter.svg"}
              alt="twitter"
              width={18}
              height={18}
            />

            <Image
              src={"/icons/facebook.svg"}
              alt="facebook"
              width={18}
              height={18}
            />

            <Image
              src={"/icons/instagram.svg"}
              alt="instagram"
              width={18}
              height={18}
            />

            <Image
              src={"/icons/pinterest.svg"}
              alt="pinterest"
              width={18}
              height={18}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default LeftSide;

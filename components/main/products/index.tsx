import { productType } from "@/types/response";
import React from "react";
import ProductItem from "./productItem";

interface Props {
  data: productType[];
}

const Products = ({ data }: Props) => {
  return (
    <section className="flex flex-wrap gap-y-6 md:gap-y-8 md:gap-x-8 w-full justify-center">
      {data && data.map((item) => <ProductItem key={item.id} item={item} />)}
    </section>
  );
};

export default React.memo(Products);

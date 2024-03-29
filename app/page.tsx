import Categories from "@/components/main/toolbars/SortProduct";
import Products from "@/components/main/products";
import { get_all_categories } from "@/services/cateogories/cateogories";
import { get_all_products } from "@/services/product/product";
import SortProducts from "@/components/main/toolbars/SortProduct";
import FilterProducts from "@/components/main/toolbars/filter/FilterProduct";
import Image from "next/image";
import { Metadata } from "next";

export default async function Home() {
  const productsData = get_all_products();
  const categoriesData = get_all_categories();

  const [products, categories] = await Promise.all([
    productsData,
    categoriesData,
  ]);

  return (
    <main className="flex min-h-screen mt-16">
      {/* <div className="drawer drawer-start"> */}
      {/* <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /> */}
      {/* <div className="drawer-content"> */}
      <section className="w-full flex flex-col gap-y-8 px-2 md:px-28 py-8">
        <header className="w-full flex items-center justify-center md:justify-center gap-x-3">
          <SortProducts />
          <label htmlFor="my-drawer-4">
            <button className="flex gap-x-3 m-1 bg-white rounded-lg p-2 cursor-pointer">
              Filter
              <span className="text-dark_/60">
                <Image
                  src={`/icons/filter.svg`}
                  width={25}
                  height={25}
                  alt="filter products"
                />
              </span>
            </button>
          </label>
        </header>

        <Products data={products} />
      </section>
      {/* </div> */}
      {/* <FilterProducts /> */}
      {/* </div> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "gallery shop",
  description: "we are the people and we present images",
};

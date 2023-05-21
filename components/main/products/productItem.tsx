"use client";

import { productType } from "@/types/response";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface Props {
  item: productType;
}
const ProductItem = ({ item }: Props) => {
  const router = useRouter();
  const handleItemClick = () => {
    router.push(
      `/product/${encodeURIComponent(item.title.replace(/\s+/g, "-"))}/${
        item.id
      }`
    );
  };

  return (
    <>
      <article
        onClick={handleItemClick}
        className="flex flex-col space-y-3 w-full md:w-56 rounded-lg bg-white cursor-pointer "
      >
        <div className="rounded-t-lg overflow-hidden">
          <Image
            src={item.images[0]}
            loading="lazy"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            alt={item.title}
          />
        </div>

        <div className="flex flex-col p-4">
          <header className="flex items-center gap-x-3">
            <h2
              title={item.title}
              className="text-left hover:cursor-pointer hover:underline underline-offset-2 truncate"
            >
              {item.title}
            </h2>
            {item.id % 2 === 0 ? (
              <div className="badge badge-secondary text-xs">NEW</div>
            ) : null}
          </header>

          <div className="flex justify-between items-center py-2">
            <div className="avatar-group -space-x-2">
              <div className="avatar">
                <span className="w-3 h-3 rounded-full bg-green_"></span>
              </div>
              <div className="avatar">
                <span className="w-3 h-3 rounded-full bg-red_"></span>
              </div>

              {item.id % 2 === 1 ? (
                <div className="avatar">
                  <span className="w-3 h-3 rounded-full bg-dark_"></span>
                </div>
              ) : null}
            </div>

            <h4 className="text-right">{item.price}$</h4>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductItem;

import LeftSide from "@/components/product/leftSide/LeftSide";
import RightSide from "@/components/product/rightSide/RightSide";
import { get_single_product } from "@/services/product/product";

const Product = async ({
  params,
}: {
  params: { id: number; name: string };
}) => {
  if (!params.id) {
    return null;
  }

  const product = await get_single_product(params.id);
  return (
    <main className="flex flex-col md:flex-row min-h-screen pt-16 gap-x-6 bg-white">
      <LeftSide product={product} />
      <RightSide images={product.images} />
    </main>
  );
};
export default Product;

export async function generateMetadata({
  params,
}: {
  params: { id: number; name: string };
}) {
  return {
    title: params.name.replace("-", " "),
  };
}

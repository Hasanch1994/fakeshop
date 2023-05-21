import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductItemSkeleton = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen pt-16 gap-x-6 bg-white">
      <LeftItem />
      <RightItem />
    </main>
  );
};

export default ProductItemSkeleton;

const LeftItem = () => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-5 w-full md:w-1/2 px-8 md:px-14 py-6">
      <header>
        <span className="hidden md:flex iconHover">
          <Skeleton circle={true} width={20} height={20} />
        </span>
        <div className="text-sm flex gap-x-2 items-center">
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
        </div>
      </header>
      <article className="mt-5 space-y-6">
        <Skeleton width={200} height={40} />
        <div className="flex justify-between p-2">
          <Skeleton width={70} />

          <div className="flex gap-x-3 items-center">
            <div className="rating rating-xs">
              <Skeleton />
            </div>

            <span className="">
              <Skeleton width={70} />
            </span>
          </div>
        </div>

        <Skeleton count={4} />

        <div className="avatar-group space-x-2 w-full">
          <Skeleton circle={true} width={20} height={20} />
          <Skeleton circle={true} width={20} height={20} />
          <Skeleton circle={true} width={20} height={20} />
        </div>

        <div className="flex items-center  gap-x-3 md:gap-x-7">
          <Skeleton />

          <Skeleton />
        </div>

        <Skeleton />
        <div className="flex justify-between py-2">
          <span className="text-green_ text-base flex items-center gap-x-4 cursor-pointer   ">
            <Skeleton />
          </span>

          <div className="flex justify-between gap-x-3">
            <Skeleton circle={true} width={15} height={15} />
            <Skeleton circle={true} width={15} height={15} />
            <Skeleton circle={true} width={15} height={15} />
            <Skeleton circle={true} width={15} height={15} />
          </div>
        </div>
      </article>
    </div>
  );
};

const RightItem = () => {
  return (
    <div className="flex flex-col space-y-5 w-full md:w-1/2 px-8 md:px-14 py-6 mb-9 mt-4">
      <div className="flex-col relative w-full h-[450px] sm:h-[400px]  space-y-5 cursor-pointer">
        <Skeleton width={"100%"} height={400} />
      </div>
      <div className="w-full flex gap-x-4 items-center  mt-16">
        <Skeleton width={100} height={100} />
        <Skeleton width={100} height={100} />
        <Skeleton width={100} height={100} />
      </div>
    </div>
  );
};

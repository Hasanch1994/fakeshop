import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MainSkeleton = () => {
  const itemCount = 15; // Number of times to repeat the item
  const itemArray = Array.from({ length: itemCount }, (_, index) => index);

  return (
    <main className="w-full flex flex-col gap-y-8 px-2 md:px-28 py-8 mt-16">
      <header className="flex items-center gap-x-3">
        <Skeleton width={150} height={50} />
        <label htmlFor="my-drawer-4">
          <div className="flex m-1 rounded-lg p-2">
            <Skeleton width={150} height={50} />
          </div>
        </label>
      </header>
      <section className="flex flex-wrap justify-between gap-8 w-full">
        {itemArray.map((item, index) => (
          <SkeletonItem key={index} />
        ))}
      </section>
    </main>
  );
};

export default MainSkeleton;

const SkeletonItem = () => {
  return (
    <article className="flex flex-col space-y-3 w-full md:w-56 rounded-lg bg-white p-3">
      <Skeleton height={200} />

      <Skeleton />
      <Skeleton />
    </article>
  );
};

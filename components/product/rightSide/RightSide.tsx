"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  images: string[];
}

const RightSide = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  const handleImageClick = (newImage: string) => setSelectedImage(newImage);

  return (
    <div className="flex flex-col space-y-5 w-1/2 px-14 py-6 mb-9">
      <header className="flex flex-col gap-y-4 pt-2 self-end w-28">
        <span className="text-xl font-bold text-left pl-3">
          01<sup className="text-dark_/40 text-sm"> /05</sup>
        </span>
        <div className="flex justify-between">
          <span className="iconHover">
            <Image
              src="/icons/left-arrow.svg"
              width={22}
              height={22}
              alt="left arrow"
            />
          </span>
          <span className="iconHover">
            <Image
              src="/icons/right-arrow.svg"
              width={22}
              height={22}
              alt="right arrow"
            />
          </span>
        </div>
      </header>
      <div className="flex-col relative w-full h-[450px] sm:h-[400px]  space-y-5 cursor-pointer">
        <Image
          src={selectedImage}
          priority
          layout="fill"
          objectFit="cover"
          alt="product image"
          className="aspect-square opacity-1 ease-in-out"
        />
      </div>
      <div className="w-full flex gap-x-4 items-center  mt-16">
        {images &&
          images.map((url, index) => (
            <div
              className={`relative w-[100px] h-[100px] sm:h-[100px]  cursor-pointer ${
                url === selectedImage && "border-4 border-green_ rounded-md"
              }`}
              key={index}
              onClick={() => handleImageClick(url)}
            >
              <Image
                src={url}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="aspect-square opacity-1 ease-in-out"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(RightSide);

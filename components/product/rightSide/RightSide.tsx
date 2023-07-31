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
    <div className="flex flex-col space-y-5 w-full md:w-1/2 px-8 md:px-14 py-6 mb-9 mt-4">
      <div className="flex-col relative 3xl:w-[850px] w-full 3xl:h-[650px] 2xl:h-[580px] xl:h-[550px] lg:h-[450px] sm:h-[400px]  space-y-5 cursor-pointer">
        <Image
          src={selectedImage}
          priority
          fill
          style={{objectFit:"cover"}}
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

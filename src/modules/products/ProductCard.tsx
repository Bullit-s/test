import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ProductType } from "@/common/types/product";
import { getPriceLabel } from "@/common/utils/getPriceLabel";
import { routes } from "@/common/utils/routes";
import { Rating } from "@/components/common/Rating/Rating";

type Props = {
  item: ProductType;
};

export const ProductCard = ({ item }: Props) => {
  const [image, setImage] = useState(item.images[0]);

  return (
    <Link href={routes.product(item.id)}>
      <div className="flex flex-col gap-4 h-full cursor-pointer [&_>*]:hover:opacity-70">
        <div className="relative w-full">
          <Image
            alt={item.title}
            priority
            src={image}
            sizes="100vw"
            className="h-auto w-full rounded-[20px]"
            width={500}
            height={300}
            unoptimized
            onError={() => setImage("/notfound.png")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl truncate">{item.title}</span>
          <Rating />
          <span className="text-2xl">{getPriceLabel(item.price)}</span>
        </div>
      </div>
    </Link>
  );
};

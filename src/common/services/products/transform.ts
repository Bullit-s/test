import { ProductType } from "@/common/types/product";

export const transformProduct = (product: ProductType): ProductType => ({
  ...product,
  images: product.images.map((el) => el.replace('["', "").replace('"]', "")),
});

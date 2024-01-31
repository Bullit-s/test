// region ProductId
declare const _productId: unique symbol;
export type ProductId = string & { [_productId]: "ProductId" };
// endregion

export type ProductType = {
  id: ProductId;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  images: string[];
};

// region ProductCategoryId
declare const _productCategoryId: unique symbol;
export type ProductCategoryId = string & {
  [_productCategoryId]: "ProductCategoryId";
};
// endregion

type ProductCategory = {
  id: ProductCategoryId;
  name: string;
  image: string;
};

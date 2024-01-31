import { ProductId } from "@/common/types/product";

const routeCreator = (...args: Array<string | number | undefined>) =>
  `/${args.filter((el) => !!el).join("/")}`;

export const routes = {
  home: routeCreator(),
  onSale: routeCreator("on-sale"),
  newArrivals: routeCreator("new-arrivals"),
  trousers: routeCreator("trousers"),
  shirts: routeCreator("shirts"),
  cart: routeCreator("cart"),
  profile: routeCreator("profile"),
  product: (productId: ProductId) => routeCreator("products", productId),
};

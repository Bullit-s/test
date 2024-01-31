import { Suspense } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import {
  getProductsQueryFn,
  GetProductsQueryKey,
  INITIAL_GET_PRODUCTS_PAGE_PARAMS,
  INITIAL_GET_PRODUCTS_PARAMS,
} from "@/common/services/products/getProducts";
import { Products } from "@/modules/products/Products";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["products", INITIAL_GET_PRODUCTS_PARAMS] as GetProductsQueryKey,
    initialPageParam: INITIAL_GET_PRODUCTS_PAGE_PARAMS,
    queryFn: getProductsQueryFn,
  });

  return (
    <main>
      <Suspense fallback={<p>Loading feed...</p>}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Products />
        </HydrationBoundary>
      </Suspense>
    </main>
  );
}

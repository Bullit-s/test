"use client";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import {
  getProductsQueryFn,
  GetProductsQueryKey,
  INITIAL_GET_PRODUCTS_PAGE_PARAMS,
  INITIAL_GET_PRODUCTS_PARAMS,
} from "@/common/services/products/getProducts";
import { Button } from "@/components/common/Button/Button";
import { ProductCard } from "@/modules/products/ProductCard";

export const Products = () => {
  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: ["products", INITIAL_GET_PRODUCTS_PARAMS] as GetProductsQueryKey,
    queryFn: getProductsQueryFn,
    getNextPageParam: (lastPage) =>
      lastPage?.length > 0
        ? { offset: lastPage.length + INITIAL_GET_PRODUCTS_PARAMS.limit }
        : null,
    initialPageParam: INITIAL_GET_PRODUCTS_PAGE_PARAMS,
    retry: false,
  });

  const disabled = !hasNextPage || isFetching;

  const products = useMemo(() => data?.pages.flat(), [data?.pages]);

  const getNextProducts = async () => await fetchNextPage();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-20">
        {products?.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>
      <div className="flex w-full justify-center py-9">
        <Button disabled={disabled} onClick={getNextProducts}>
          Show More
        </Button>
      </div>
    </div>
  );
};

import { stringify } from "querystring";

import { PRODUCTS_API_URL } from "@/common/services/consts";
import { transformProduct } from "@/common/services/products/transform";
import { ProductType } from "@/common/types/product";
import { QueryFn } from "@/common/types/queries";

type GetProductsResponse = ProductType[];

type GetProductsRequest = {
  offset: number;
  limit: number;
};

export const getProductsFetch = async (
  params: GetProductsRequest,
): Promise<GetProductsResponse> => {
  const queryParams = stringify(params);

  const res = await fetch(`${PRODUCTS_API_URL}?${queryParams}`, {
    cache: "no-store",
  });

  if (res.ok) {
    const data: GetProductsResponse = await res.json();
    return data.map(transformProduct);
  }

  return [];
};

export type GetProductsQueryKey = [string, Pick<GetProductsRequest, "limit">];
type GetProductsQueryFn = QueryFn<
  GetProductsResponse,
  Pick<GetProductsRequest, "limit">,
  Pick<GetProductsRequest, "offset">
>;

export const INITIAL_GET_PRODUCTS_PARAMS: Pick<GetProductsRequest, "limit"> = {
  limit: 12,
};

export const INITIAL_GET_PRODUCTS_PAGE_PARAMS: Pick<
  GetProductsRequest,
  "offset"
> = { offset: 0 };

export const getProductsQueryFn: GetProductsQueryFn = async (params) => {
  const queryParams = params.queryKey[1];
  const { pageParam } = params;
  const offset = pageParam?.offset
    ? pageParam.offset
    : INITIAL_GET_PRODUCTS_PAGE_PARAMS.offset;
  return getProductsFetch({ ...queryParams, offset });
};

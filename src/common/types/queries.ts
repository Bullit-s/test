import { QueryFunctionContext } from "@tanstack/query-core";

export type QueryParams<TQueryRequest, TQueryPageParams> = QueryFunctionContext<
  TQueryRequest extends Record<string, unknown>
    ? [string, TQueryRequest]
    : [string],
  TQueryPageParams
>;

export type QueryFn<
  TQueryResponse = unknown,
  TQueryRequest = unknown,
  TQueryPageParams = Record<string, unknown>,
> = (
  params: QueryParams<TQueryRequest, TQueryPageParams>,
) => TQueryResponse | Promise<TQueryResponse>;

export type InfiniteData<TData, TPageParams = Record<string, unknown>> = {
  pageParams: (TPageParams | undefined)[];
  pages?: TData[];
};

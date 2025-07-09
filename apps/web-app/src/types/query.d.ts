import {
  type QueryMeta,
  type QueryClient,
} from "@tanstack/react-query"

export interface QueryFunctionParams {
  client: QueryClient
  queryKey: string[]
  signal: AbortSignal
  meta: QueryMeta | undefined
  pageParam?: unknown
  direction?: unknown
}

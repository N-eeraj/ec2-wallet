import type {
  PropsWithChildren,
} from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import {
  ReactQueryDevtools,
} from "@tanstack/react-query-devtools"

import {
  QUERY_STALE_TIME,
} from "@constants/time"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: QUERY_STALE_TIME,
    },
  }
})

function AppQueryClient({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default AppQueryClient

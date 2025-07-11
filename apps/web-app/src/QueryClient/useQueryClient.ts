import {
  QueryClient,
} from "@tanstack/react-query"

import {
  QUERY_STALE_TIME,
} from "@constants/time"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: QUERY_STALE_TIME,
    },
  }
})

export default queryClient

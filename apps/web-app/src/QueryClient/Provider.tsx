import type {
  PropsWithChildren,
} from "react"
import {
  QueryClientProvider,
} from "@tanstack/react-query"
import {
  ReactQueryDevtools,
} from "@tanstack/react-query-devtools"
import queryClient from "./useQueryClient"


function AppQueryClient({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default AppQueryClient

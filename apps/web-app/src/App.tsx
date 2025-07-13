import AppRouter from "@router"
import {
  Provider as QueryClientProvider,
} from "@/QueryClient"

import "@styles/palette.css"
import "@styles/main.css"
import "@styles/utilities.css"

function App() {
  return (
    <QueryClientProvider>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App

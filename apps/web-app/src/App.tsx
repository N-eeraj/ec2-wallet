import AppRouter from "@router"
import AppQueryClient from "@/QueryClient"

import "@styles/themes.css"
import "@styles/main.css"

function App() {
  return (
    <AppQueryClient>
      <AppRouter />
    </AppQueryClient>
  )
}

export default App

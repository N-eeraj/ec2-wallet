import {
  RouterProvider,
} from "react-router"
import router from "@router"

import "@styles/themes.css"
import "@styles/main.css"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

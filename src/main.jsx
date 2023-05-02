import "./index.css"
import App from "./App.jsx"
import ReactDOM from "react-dom/client"
import theme from "./configs/mantineTheme"
import { MantineProvider } from "@mantine/core"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// pages import
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"

// define routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </MantineProvider>
)

import "./index.css"
import App from "./App.jsx"
import ReactDOM from "react-dom/client"
import theme from "./configs/mantineTheme"
import { MantineProvider } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </MantineProvider>
)

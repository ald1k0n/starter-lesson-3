import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);

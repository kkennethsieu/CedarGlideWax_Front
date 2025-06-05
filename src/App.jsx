import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import Products from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import OrderSummary from "./pages/OrderSummary";
import PageNotFound from "./components/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<HomePage />} />

          <Route element={<AppLayout />}>
            <Route path="products" element={<Products />} />
            <Route path="cedarwax" element={<ProductPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="order/:orderId" element={<OrderSummary />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

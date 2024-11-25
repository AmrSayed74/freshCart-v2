import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import ProtectedRoutes from "./ui/ProtectedRoutes.jsx";
import LoaderIndicator from "./ui/LoaderIndicator";

const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Categories = React.lazy(() => import("./pages/Categories"));
const Brands = React.lazy(() => import("./pages/Brands"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
const VerifyCode = React.lazy(() => import("./pages/VerifyCode"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails.jsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <LoaderIndicator />
            </div>
          }
        >
          <Routes>
            <Route
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route
                path="productDetails/:productId"
                element={<ProductDetails />}
              />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="categories" element={<Categories />} />
              <Route path="brands" element={<Brands />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="verify-code" element={<VerifyCode />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;

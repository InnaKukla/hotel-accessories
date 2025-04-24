import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "./shared/Loader/Loader";
import ScrollToTop from "./shared/ScrollToTop/ScrollToTop";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));

const PersonalAccountPage = lazy(() => import("./pages/PersonalAccountPage/PersonalAccountPage"));


const BasketPage = lazy(() => import("./pages/BasketPage/BasketPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/products/:id" element={<ProductPage />} />

            <Route path="/account" element={<PersonalAccountPage />} />
           
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />

          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

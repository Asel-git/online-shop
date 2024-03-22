import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import NotFound from "../pages/notFound/NotFound";
import FavotiresProducts from "../pages/favoritesProducts/FavoritesProducts";
import Layout from "../components/layout/Layout";
import Logout from "../pages/logout/Logout";
import ModalPage from "../pages/modalPage/ModalPage";
import Basket from "../pages/baskit/Basket";

const MainRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites-products" element={<FavotiresProducts />} />
          <Route path="/modalPage" element={<ModalPage />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

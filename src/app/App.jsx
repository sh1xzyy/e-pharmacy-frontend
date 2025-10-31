import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../shared/ui/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../entities/user/selectors";
import Header from "../components/Header/Header";
import { refreshUserThunk } from "../entities/user/operations";

const CreateShopPage = lazy(() =>
  import("../pages/CreateShopPage/CreateShopPage")
);
const EditShopPage = lazy(() => import("../pages/EditShopPage/EditShopPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const MedicinePage = lazy(() => import("../pages/MedicinePage/MedicinePage"));
const SharedLayout = lazy(() => import("../pages/SharedLayout/SharedLayout"));
const ShopPage = lazy(() => import("../pages/ShopPage/ShopPage"));
const StatisticsPage = lazy(() =>
  import("../pages/StatisticsPage/StatisticsPage")
);

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && <Header />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SharedLayout />} />
          <Route path="/create-shop" element={<CreateShopPage />} />
          <Route path="/edit-shop" element={<EditShopPage />} />
          <Route path="/shop" element={<MedicinePage />} />
          <Route path="/medicine" element={<ShopPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

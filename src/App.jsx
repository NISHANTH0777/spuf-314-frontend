import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import RoutesPage from "./pages/Routes";
import Recent from "./pages/Recent";
import BottomNav from "./components/BottomNav";
import Settings from "./pages/Settings";


export default function App() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const location = useLocation();

  return (
    <>
      <Routes>
        {/* LOGIN */}
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />}
        />

        {/* PROTECTED ROUTES */}
        <Route
          path="/"
          element={loggedIn ? <Search /> : <Navigate to="/login" />}
        />
        <Route
          path="/routes"
          element={loggedIn ? <RoutesPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/recent"
          element={loggedIn ? <Recent /> : <Navigate to="/login" />}
        />

        <Route
  path="/settings"
  element={loggedIn ? <Settings /> : <Navigate to="/login" />}
/>
      </Routes>

      {/* ✅ NAVBAR ALWAYS VISIBLE AFTER LOGIN */}
      {loggedIn && location.pathname !== "/login" && <BottomNav />}
    </>
  );
}

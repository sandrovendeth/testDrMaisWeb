import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Details } from "../pages/Details";
import { Route, Routes } from "react-router-dom";

export function RoutesNav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register/:idfilme?/" element={<Register />} />
      <Route path="/Details/:idfilme?/" element={<Details />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Checkout } from "./Pages/Checkout";
import Confirmation from "./Pages/Checkout/Succeed";
import NotFound from "./Pages/NotFound";
import UserManual from "./Components/UserManual";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/succeed" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/manual" element={<UserManual />} />
    </Routes>
  );
}

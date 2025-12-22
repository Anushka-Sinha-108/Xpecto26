import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Exhibition from "../pages/Exhibition";
import Events from "../pages/Events";
import Sessions from "../pages/Sessions";
import Payments from "../pages/Payment";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/payments" element={<Payments />} />
      </Route>
    </Routes>
  );
}

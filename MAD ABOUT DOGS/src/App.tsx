import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Login from "./dashboard/pages/Login";
import VerifyOtp from "./dashboard/pages/VerifyOtp";
import Dashboard from "./dashboard/pages/Dashboard";
import Appointments from "./dashboard/pages/Appointments";

import ProtectedRoute from "./dashboard/components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth */}
      <Route
        path="/admin/login"
        element={<Login />}
      />

      <Route
        path="/admin/verify-otp"
        element={<VerifyOtp />}
      />

      {/* Admin Layout */}
    <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route
    path="dashboard"
    element={<Dashboard />}
  />

  <Route
    path="appointments"
    element={<Appointments />}
  />
</Route>
      
    </Routes>
  );
}

export default App;
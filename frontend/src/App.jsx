import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Signup = lazy(() => import("./pages/Auths/Signup"));
const Login = lazy(() => import("./pages/Auths/Login"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={<div className="text-center mt-5">Loading... </div>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

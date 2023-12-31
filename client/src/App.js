import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
      <Toaster postion="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<PublicRoute>  <Login />   </PublicRoute> }/>
        <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute> } />
        <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

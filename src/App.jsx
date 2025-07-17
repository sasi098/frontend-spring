import { useState } from "react";
import React from "react";
import Try1 from "./COMPONENTS/Try1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./AUTH/LoginPage";
import Middle from "./AUTH/Middle";
import Register from "./AUTH/Register";
import { ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const PublicRoute = ({ element }) => {
    return localStorage.getItem("username") ? (
      <Navigate to="/try1" replace />
    ) : (
      element
    );
  };

  const ProtectedRoute = ({ element }) => {
    return localStorage.getItem("username") ? (
      element
    ) : (
      <Navigate to="/" replace />
    );
  };

  return (
    <div>
      <ToastContainer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute element={<LoginPage />} />} />
          <Route
            path="/register"
            element={<PublicRoute element={<Register />} />}
          />
          <Route
            path="/middle"
            element={<PublicRoute element={<Middle />} />}
          />
          <Route path="/try1" element={<ProtectedRoute element={<Try1 />} />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Try1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

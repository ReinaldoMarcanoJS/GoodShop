import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Register } from "./pages/auth/Register.jsx";
import { Login } from "./pages/auth/Login.jsx";
import { AddProduct } from "./pages/products/AddProducts.js";
import { ProtectedRoutes } from "./Components/ProtectedRoutes.js";
function App() {
 
  return (
    <>
      <BrowserRouter>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />        
            <Route path="/login" element={<Login />} />        

            <Route element={<ProtectedRoutes/>}>
              <Route path="/addproduct" element={<AddProduct/>} />
            </Route>
          </Routes>
    

      </BrowserRouter>
    </>
  );
}

export default App;

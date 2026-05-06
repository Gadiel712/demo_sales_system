import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ClienteMenu from "./pages/ClienteMenu";
import ClientePedidos from "./pages/ClientePedidos";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cliente/menu" element={<ClienteMenu />} />
      <Route path="/cliente/pedidos" element={<ClientePedidos />} />
    </Routes>
  );
}
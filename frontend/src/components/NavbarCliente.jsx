import { useNavigate, useLocation } from "react-router-dom";
import "../styles/cliente.css";

export default function NavbarCliente() {
  const navigate = useNavigate();
  const location = useLocation();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="logo">
        ☕ <span>Café Lovers</span>
      </div>

      <button
        className={location.pathname === "/cliente/menu" ? "active" : ""}
        onClick={() => navigate("/cliente/menu")}
      >
        Menú
      </button>

      <button
        className={location.pathname === "/cliente/pedidos" ? "active" : ""}
        onClick={() => navigate("/cliente/pedidos")}
      >
        Pedido
      </button>

      <button onClick={() => alert("Configuración lo hará tu compañero")}>
        Configuración
      </button>

      <button onClick={() => alert("Soporte lo hará tu compañero")}>
        Soporte
      </button>

      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
}
import { useEffect, useState } from "react";
import NavbarCliente from "../components/NavbarCliente";
import "../styles/cliente.css";

export default function ClientePedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  useEffect(() => {
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];
    setPedidos(pedidosGuardados);
  }, []);

  const eliminarPedido = (id) => {
    const nuevosPedidos = pedidos.filter((p) => p.id !== id);
    setPedidos(nuevosPedidos);
    localStorage.setItem("pedidos", JSON.stringify(nuevosPedidos));

    if (pedidoSeleccionado?.id === id) {
      setPedidoSeleccionado(null);
    }
  };

  return (
    <div>
      <NavbarCliente />

      <div className="content">
        {/* LISTA DE PEDIDOS COMO CARDS */}
        <div className="menu-area">
          <div className="header-title">Mis Pedidos</div>

          {pedidos.length === 0 ? (
            <div className="sin-pedidos">
              <p>No tienes pedidos registrados.</p>
            </div>
          ) : (
            <div className="pedido-grid">
            {pedidos.map((pedido) => (
              <div
                key={pedido.id}
                className="pedido-card-cuadrado"
                onClick={() => setPedidoSeleccionado(pedido)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                  alt="Pedido"
                />
                <div className="product-name">Pedido #{pedido.id}</div>
                <div className="product-price">Estado: {pedido.estado}</div>
                <div className="product-price">Tiempo: {pedido.tiempo}</div>
                <button
                  className="btn-enviar"
                  onClick={(e) => {
                    e.stopPropagation();
                    eliminarPedido(pedido.id);
                  }}
                >
                  Terminado
                </button>
              </div>
            ))}
          </div>
          )}
        </div>

        {/* PANEL LATERAL DE INFORMACIÓN */}
        <div className="pedido-area">
          <h3>Información</h3>

          {pedidoSeleccionado ? (
            <>
              <p><b>Pedido seleccionado:</b> #{pedidoSeleccionado.id}</p>
              <p><b>Estado:</b> {pedidoSeleccionado.estado}</p>
              <p><b>Tiempo estimado:</b> {pedidoSeleccionado.tiempo}</p>
              <p><b>Fecha:</b> {pedidoSeleccionado.fecha}</p>

              <h4>Productos</h4>
              <ul>
                {pedidoSeleccionado.productos.map((prod) => (
                  <li key={prod.id}>
                    {prod.nombre} - x{prod.cantidad}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Selecciona un pedido para ver más detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

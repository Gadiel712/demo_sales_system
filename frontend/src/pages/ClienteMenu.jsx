import { useState } from "react";
import NavbarCliente from "../components/NavbarCliente";
import "../styles/cliente.css";


export default function ClienteMenu() {
  const productosMock = [
    {
      id: 1,
      nombre: "Café Americano",
      precio: 5,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },
    {
      id: 2,
      nombre: "Capuccino",
      precio: 7,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/924/924514.png"
    },
    {
      id: 3,
      nombre: "Latte",
      precio: 6,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },
        {
      id: 4,
      nombre: "Café ",
      precio: 5,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },
    {
      id: 5,
      nombre: "jugo",
      precio: 7,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/924/924514.png"
    },
    {
      id: 6,
      nombre: "cafe frances",
      precio: 6,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },

        {
      id: 7,
      nombre: "Café Americano",
      precio: 5,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },
    {
      id: 8,
      nombre: "Capuccino",
      precio: 7,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/924/924514.png"
    },
    {
      id: 9,
      nombre: "Latte",
      precio: 6,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },
        {
      id: 10,
      nombre: "Café ",
      precio: 5,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },
    {
      id: 11,
      nombre: "jugo",
      precio: 7,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/924/924514.png"
    },
    {
      id: 12,
      nombre: "cafe frances",
      precio: 6,
      categoria: "Bebidas",
      img: "https://cdn-icons-png.flaticon.com/512/590/590749.png"
    },

    {
      id: 13,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 14,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
        {
      id: 15,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 16,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
        {
      id: 17,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 18,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
        {
      id: 19,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 20,
      nombre: "Croissant",
      precio: 6,
      categoria: "Panes",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 21,
      nombre: "Cheesecake",
      precio: 10,
      categoria: "Postres",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 22,
      nombre: "Cheesecake",
      precio: 10,
      categoria: "Postres",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 23,
      nombre: "Cheesecake",
      precio: 10,
      categoria: "Postres",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 24,
      nombre: "Cheesecake",
      precio: 10,
      categoria: "Postres",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 25,
      nombre: "Cheesecake",
      precio: 10,
      categoria: "Postres",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 26,
      nombre: "Cheesecake",
      precio: 10,
      categoria: "Postres",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 27,
      nombre: "Combo Café + Pan",
      precio: 12,
      categoria: "Combos",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 28,
      nombre: "Combo Café + Pan",
      precio: 12,
      categoria: "Combos",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 29,
      nombre: "Combo Café + Pan",
      precio: 12,
      categoria: "Combos",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
    {
      id: 30,
      nombre: "Combo Café + Pan",
      precio: 12,
      categoria: "Combos",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
    },
  ];

  const [categoria, setCategoria] = useState("Bebidas");
  const [carrito, setCarrito] = useState([]);
  const [metodoPago, setMetodoPago] = useState("");
  const [popup, setPopup] = useState(false);

  const obtenerTituloPorHora = () => {
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 11) return "Desayuno";
    if (hora >= 11 && hora < 17) return "Almuerzo";
    if (hora >= 17 && hora < 23) return "Cena";
    return "Cena";
  };

  const agregarCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarProducto = (id) => {
  setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  const subtotal = total / 1.18;
  const igv = total - subtotal;

  const enviarOrden = () => {
    if (carrito.length === 0) {
      alert("No puedes enviar una orden vacía.");
      return;
    }

    if (metodoPago === "") {
      alert("Selecciona un método de pago.");
      return;
    }

    // Guardar pedido en localStorage (prototipo)
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];

    const nuevoPedido = {
      id: Date.now(),
      productos: carrito,
      estado: "En proceso",
      tiempo: "15 min",
      fecha: new Date().toLocaleString()
    };

    pedidosGuardados.push(nuevoPedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados));

    setPopup(true);
    setCarrito([]);
    setMetodoPago("");
  };

  const productosFiltrados = productosMock.filter(
    (p) => p.categoria === categoria
  );

  return (
    <div>
      <NavbarCliente />

      <div className="content">
        {/* MENU CENTRAL */}
        <div className="menu-area">
          <div className="header-title">{obtenerTituloPorHora()}</div>

          <div className="tabs">
            <button
              className={categoria === "Bebidas" ? "active" : ""}
              onClick={() => setCategoria("Bebidas")}
            >
              Bebidas
            </button>

            <button
              className={categoria === "Panes" ? "active" : ""}
              onClick={() => setCategoria("Panes")}
            >
              Panes
            </button>

            <button
              className={categoria === "Postres" ? "active" : ""}
              onClick={() => setCategoria("Postres")}
            >
              Postres
            </button>

            <button
              className={categoria === "Combos" ? "active" : ""}
              onClick={() => setCategoria("Combos")}
            >
              Combos
            </button>
          </div>

          <div className="product-grid">
            {productosFiltrados.map((p) => (
              <div key={p.id} className="product-card">
                <img src={p.img} alt={p.nombre} />
                <div className="product-name">{p.nombre}</div>
                <div className="product-price">S/ {p.precio.toFixed(2)}</div>

                <button className="btn-plus" onClick={() => agregarCarrito(p)}>
                  +
                </button>
              </div>
            ))}
          </div>
        </div>


        {/* DETALLE PEDIDO (SIEMPRE VISIBLE COMO EN LA IMAGEN) */}
        <div className="pedido-area">
          <h3>Detalle del pedido</h3>

          {carrito.length === 0 ? (
            <p>No hay productos agregados.</p>
          ) : (
            carrito.map((item) => (
            <div key={item.id} className="detalle-item">

              {/* Nombre */}
              <div style={{ flex: 2 }}>
                <b>{item.nombre}</b>
              </div>

              {/* Cantidad centrada */}
              <div style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
                x{item.cantidad}
              </div>

              {/* Precio */}
              <div style={{ flex: 1, textAlign: "right" }}>
                S/ {(item.precio * item.cantidad).toFixed(2)}
              </div>

              {/* X eliminar */}
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarProducto(item.id)}
                >
                  X
                </button>
            </div>
            ))
          )}

          <div className="totales">
            <div>
              <span>Subtotal</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>

            <div>
              <span>IGV (18%)</span>
              <span>S/ {igv.toFixed(2)}</span>
            </div>

            <div className="total-final">
              <span>Total</span>
              <span>S/ {total.toFixed(2)}</span>
            </div>
          </div>

          <h4>Método de pago</h4>
          <select
            className="select-pago"
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            <option value="">Seleccione...</option>
            <option value="EFECTIVO">Efectivo</option>
            <option value="TARJETA">Tarjeta</option>
          </select>

          <button className="btn-enviar" onClick={enviarOrden}>
            Enviar a cocina
          </button>
        </div>
      </div>

      {/* POPUP */}
      {popup && (
        <div className="popup">
          <div className="popup-box">
            <h2>Pedido enviado</h2>
            <p>Tu pedido fue enviado correctamente a cocina.</p>

            <button onClick={() => setPopup(false)}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
}
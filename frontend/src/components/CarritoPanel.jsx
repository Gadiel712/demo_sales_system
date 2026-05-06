export default function CarritoPanel({
  carrito,
  setCarrito,
  metodoPago,
  setMetodoPago,
  enviarOrden,
  cerrarCarrito
}) {
  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const aumentarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div className="panel-carrito">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Carrito</h3>
        <button className="btn-cafe" onClick={cerrarCarrito}>
          X
        </button>
      </div>

      {carrito.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        carrito.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <b>{item.nombre}</b>
            <br />
            S/ {item.precio} c/u
            <br />

            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              <button className="btn-cafe" onClick={() => disminuirCantidad(item.id)}>
                -
              </button>

              <span style={{ fontWeight: "bold" }}>x{item.cantidad}</span>

              <button className="btn-cafe" onClick={() => aumentarCantidad(item.id)}>
                +
              </button>
            </div>
          </div>
        ))
      )}

      <hr />
      <h4>Total: S/ {total}</h4>

      <h4>Método de Pago</h4>
      <select
        value={metodoPago}
        onChange={(e) => setMetodoPago(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      >
        <option value="">Seleccione...</option>
        <option value="EFECTIVO">Efectivo</option>
        <option value="TARJETA">Tarjeta</option>
      </select>

      <br />
      <br />

      <button className="btn-cafe" style={{ width: "100%" }} onClick={enviarOrden}>
        Enviar Orden
      </button>
    </div>
  );
}
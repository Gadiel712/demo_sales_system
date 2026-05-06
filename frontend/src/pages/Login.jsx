import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const ingresar = () => {
    localStorage.setItem("token", "token_prueba");
    localStorage.setItem("rol", "CLIENTE");
    navigate("/cliente/menu");
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login (Temporal)</h2>
      <button onClick={ingresar}>Ingresar como Cliente</button>
    </div>
  );
}
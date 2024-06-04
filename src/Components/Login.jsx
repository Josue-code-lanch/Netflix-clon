import "../Styles/Login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <select name="idioma" id="idioma">
          <option value="español">Español</option>
          <option value="english">English</option>
        </select>
        <a
          className="login-a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar sesión
        </a>
      </div>
    </>
  );
}

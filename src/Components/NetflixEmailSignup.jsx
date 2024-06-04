import "../Styles/NetflixEmailSignup.css";

export default function NetflixEmailSignup() {
  const icon = ">";
  return (
    <div className="email-signup">
      <p>
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </p>
      <form action="#">
        <input type="email" placeholder="Email" />
        <button type="submit">Comenzar {icon} </button>
      </form>
    </div>
  );
}

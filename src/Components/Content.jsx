import NetflixEmailSignup from "./NetflixEmailSignup";
import "../Styles/Content.css";

export default function Content() {
  return (
    <div className="container-1">
      <h1 className="content-h1">Películas y series ilimitadas y mucho más</h1>
      <p className="content-p">
        Disfruta donde quieras. Cancela cuando quieras.
      </p>
      <div className="signup">
        <NetflixEmailSignup />
      </div>
    </div>
  );
}

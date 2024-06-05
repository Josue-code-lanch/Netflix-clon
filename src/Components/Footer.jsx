import LinkFooter from "./LinkFooter";
import Lenguaje from "./Lenguaje";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="atention-client">
        ¿Preguntas? Llama al{" "}
        <a href="tel:0800 345 1593" rel="noopener noreferrer">
          0800 345 1593
        </a>
      </p>
      <div className="links">
        <div>
          <LinkFooter
            url={"https://help.netflix.com/es/node/412"}
            linkName={"Preguntas frecuentes"}
          />
          <LinkFooter
            url={"https://ir.netflix.net/ir-overview/profile/default.aspx"}
            linkName={"Relaciones con inversionistas"}
          />
          <LinkFooter
            url={"https://help.netflix.com/legal/privacy"}
            linkName={"Privacidad"}
          />
          <LinkFooter
            url={"https://fast.com/es/"}
            linkName={"Prueba de velocidad"}
          />
        </div>
        <div>
          <LinkFooter
            url={"https://help.netflix.com/es"}
            linkName={"Centro de ayuda"}
          />
          <LinkFooter url={"https://jobs.netflix.com/"} linkName={"Empleo"} />
          <LinkFooter url={"#"} linkName={"Preferencias de cookies"} />
          <LinkFooter
            url={"https://help.netflix.com/legal/notices"}
            linkName={"Avisos legales"}
          />
        </div>
        <div>
          <LinkFooter
            url={
              "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount"
            }
            linkName={"Cuenta"}
          />
          <LinkFooter
            url={"https://help.netflix.com/es/node/14361"}
            linkName={"Formas de ver"}
          />
          <LinkFooter
            url={"https://help.netflix.com/es/node/134094"}
            linkName={"Información corporativa"}
          />
          <LinkFooter
            url={"https://www.netflix.com/ar/browse/genre/839338"}
            linkName={"Solo en Netflix"}
          />
        </div>
        <div>
          <LinkFooter
            url={"https://media.netflix.com/es/"}
            linkName={"Prensa"}
          />
          <LinkFooter
            url={"https://help.netflix.com/legal/termsofuse"}
            linkName={"Términos de uso"}
          />
          <LinkFooter
            url={"https://help.netflix.com/es/contactus"}
            linkName={"Contáctanos"}
          />
        </div>
      </div>
      <Lenguaje />
    </footer>
  );
}

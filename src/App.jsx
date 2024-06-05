import Header from "./Components/Header";
import Content from "./Components/Content";
import SectionInfo from "./Components/SectionInfo";
import SectionReverseInfo from "./Components/SectionReverseInfo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <SectionInfo
        title={"Disfruta en tu TV"}
        text={
          "Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
        }
        img={"tv.png"}
      />
      <SectionReverseInfo
        title={"Descarga tus series para verlas offline"}
        text={"Guarda tu contenido favorito y tendrás siempre algo para ver."}
        img={"mobile.jpg"}
      />
      <SectionInfo
        title={"Disfruta donde quieras"}
        text={
          "Películas y series ilimitadas en tu teléfono, tablet, laptop y TV."
        }
        img={"device.png"}
      />
      <SectionReverseInfo
        title={"Crea perfiles para niños"}
        text={
          "Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía."
        }
        img={"kids.png"}
      />
    </div>
  );
}

export default App;

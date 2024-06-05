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
      />
      <SectionReverseInfo
        title={"Descarga tus series para verlas offline"}
        text={"Guarda tu contenido favorito y tendrás siempre algo para ver."}
      />
    </div>
  );
}

export default App;

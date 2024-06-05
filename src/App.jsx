import Header from "./Components/Header";
import Content from "./Components/Content";
import SectionInfo from "./Components/SectionInfo";
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
    </div>
  );
}

export default App;

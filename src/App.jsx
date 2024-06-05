import Header from "./Components/Header";
import Content from "./Components/Content";
import SectionInfo from "./Components/SectionInfo";
import SectionReverseInfo from "./Components/SectionReverseInfo";
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes";
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
      <div className="questions">
        <h2 className="questions-title">Preguntas frecuentes</h2>
        <PreguntasFrecuentes
          pregunta={"¿Qué es Netflix?"}
          respuesta={
            "Netflix es un servicio que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
          }
        />
        <PreguntasFrecuentes
          pregunta={"¿Cuánto cuesta Netflix?"}
          respuesta={
            "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 4.299 hasta $ 9.699 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos."
          }
        />
        <PreguntasFrecuentes
          pregunta={"¿Dónde puedo ver Netflix?"}
          respuesta={
            "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.Además, puedes descargar tus series favoritas con la app para iOS o Android. Con la función de descarga, puedes ver contenido donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
          }
        />
        <PreguntasFrecuentes
          pregunta={"¿Cómo cancelo?"}
          respuesta={
            "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
          }
        />
        <PreguntasFrecuentes
          pregunta={"¿Qué puedo ver en Netflix?"}
          respuesta={
            "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."
          }
        />
        <PreguntasFrecuentes
          pregunta={"¿Es bueno Netflix para los niños?"}
          respuesta={
            "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio. Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."
          }
        />
      </div>
    </div>
  );
}

export default App;

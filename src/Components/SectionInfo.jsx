import "../Styles/SectionInfo.css";

export default function SectionInfo({ title, text, img }) {
  return (
    <>
      <section className="section-info">
        <div className="section-content">
          <div className="section-description">
            <h2 className="section-title">{title}</h2>
            <p className="section-text">{text}</p>
          </div>
          <div>
            <img
              className="section-image"
              src={img}
              alt="Plataforma de visualizacion"
            />
          </div>
        </div>
      </section>
    </>
  );
}

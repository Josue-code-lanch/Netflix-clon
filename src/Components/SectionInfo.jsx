import PlataformsImage from "./PlataformsImage";
import "../Styles/SectionInfo.css";

export default function SectionInfo({ title, text }) {
  return (
    <>
      <section className="section-info">
        <div className="section-content">
          <div className="section-description">
            <h2 className="section-title">{title}</h2>
            <p className="section-text">{text}</p>
          </div>
          <div className="section-image">
            <PlataformsImage img={"tv.png"} />
          </div>
        </div>
      </section>
    </>
  );
}

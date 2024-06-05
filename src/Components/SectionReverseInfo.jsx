import PlataformsImage from "./PlataformsImage";
import "../Styles/SectionReverseInfo.css";

export default function SectionReverseInfo({ title, text }) {
  return (
    <>
      <section className="section-info-1">
        <div className="section-content-1">
          <div className="section-description-1">
            <h2 className="section-title-1">{title}</h2>
            <p className="section-text-1">{text}</p>
          </div>
          <div className="section-image-1">
            <PlataformsImage img={"mobile.jpg"} />
          </div>
        </div>
      </section>
    </>
  );
}

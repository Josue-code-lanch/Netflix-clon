import "../Styles/PlataformsImage.css";

export default function PlataformsImage({ img }) {
  return (
    <>
      <img
        className="section-image"
        src={img}
        alt="Plataforma de visualizacion"
      />
    </>
  );
}

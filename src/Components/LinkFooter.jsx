import "../Styles/LinkFooter.css";

export default function LinkFooter({ url, linkName }) {
  return (
    <>
      <a
        className="footer-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkName}
      </a>
    </>
  );
}

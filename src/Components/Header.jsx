import Logo from "./Logo";
import Login from "./Login";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Login />
    </div>
  );
}

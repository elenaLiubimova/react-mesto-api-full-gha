import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ currentPath, setLoggedIn, userEmail, setUserEmail }) => {
  const navigate = useNavigate();
  let onClickCallback;

  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserEmail("");
    navigate("/sign-in", { replace: true });
  }

  function navigateToSignIn() {
    navigate("/sign-in", { replace: true });
  }

  function navigateToRegister() {
    navigate("/sign-up", { replace: true });
  }

  function navigateToPaths() {
    if (currentPath === "/") {
      onClickCallback = signOut;
      return "Выйти";
    } else if (currentPath === "/sign-up") {
      onClickCallback = navigateToSignIn;
      return "Войти";
    } else if (currentPath === "/sign-in") {
      onClickCallback = navigateToRegister;
      return "Регистрация";
    }
  }

  const headerNavigation = navigateToPaths();

  return (
    <header className="header header-container">
      <img className="logo" src={logo} alt="Лого сервиса Mesto" />
      <div className="header__email-and-navigate">
        <p className="header__user-email">{userEmail}</p>
        <button className="header__navigate-button" onClick={onClickCallback}>
          {headerNavigation}
        </button>
      </div>
    </header>
  );
};

export default Header;

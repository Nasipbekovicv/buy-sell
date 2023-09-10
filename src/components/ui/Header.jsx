import "../../styles/Logo.css";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerChild">
        <div className="logCateg">
          <h1 className="categoriesIcons">&#9776;</h1>
          <h1 className="logo">Logo</h1>
        </div>
        <div className="LginZay">
          <h1 className="h1use"> + подать объявление</h1>
          <svg className="icons-login" width="48" height="48" viewBox="0 0 24 24" fill="#25314C" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12a10.5 10.5 0 1 0-16.859 8.336.431.431 0 0 0 .059.044 10.421 10.421 0 0 0 12.6 0 .431.431 0 0 0 .059-.044A10.479 10.479 0 0 0 22.5 12Zm-16 7.734a3.493 3.493 0 0 1 3.79-3.664h3.42a3.493 3.493 0 0 1 3.79 3.664 9.438 9.438 0 0 1-10.994 0Zm11.926-.76a4.405 4.405 0 0 0-4.719-3.9H10.29a4.405 4.405 0 0 0-4.719 3.9 9.5 9.5 0 1 1 12.858 0ZM12.008 6.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm0 6a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z"></path></svg>
          <h1 className="h1use">Signup</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

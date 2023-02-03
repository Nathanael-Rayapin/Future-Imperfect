import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar-container d-flex justify-content-between bg-white py-0">
      <div className="brand d-flex align-items-center p-4">
        <h1 className="mb-0">Future Imperfect</h1>
      </div>
      <div className="icons d-flex align-items-center">
        <div className="search-icon py-3 px-4">
          <i className="bi bi-search"></i>
        </div>
        <div className="burger-menu-icon py-3 px-4">
          <i className="bi bi-power"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

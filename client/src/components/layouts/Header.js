import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";

function Header() {
  const [auth, setAuth] = useAuth();
  function handleLogout() {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  }

  // console.log(auth.user[0].role," Checking Role" );
  return (
    <>
      <nav className="navbar navbar-expand-lg " id="nav">
        <div className="container-fluid">
          <NavLink className="navbar-brand">
            <img
              src="./images/logo.png"
              alt="Logo"
              width="80px"
              height="80px"
              className="d-inline-block align-text-top"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* 
                                <li>
                                      <NavLink>Logo</NavLink>
                                </li> */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Products" className="nav-link text-white">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Category" className="nav-link text-white">
                  Category
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/Register"
                      className="nav-link text-white"
                   
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Login"
                      className="nav-link text-white"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown my-0 text-white">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth.user[0].username}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user[0].role === "1" ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/Login"
                          className="dropdown-item "
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink to="/Cart" className="nav-link text-white" href="/">
                  Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

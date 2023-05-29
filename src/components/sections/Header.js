import { Link } from "react-router-dom";
import { useState } from "react";

// Material-ui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const logout = () => {
    sessionStorage.removeItem("userSesion");
    setShow(false);
  };

  const obtenerRecusros = () => {
    const datoslocalStorage = localStorage.getItem("registros");
    if (datoslocalStorage) {
      return JSON.parse(datoslocalStorage);
    } else {
      return false;
    }
  };
  const [show, setShow] = useState(obtenerRecusros());

  return (
    <AppBar position="static" color="inherit" elevation={3}>
      <div className="container mx-auto">
        <Toolbar>
          <div className="flex gap-2">
            <Link to="/recordlist">
              <IconButton color="inherit" aria-label="inicio">
                <DescriptionIcon />
                ver registros
              </IconButton>
            </Link>

            <Link to="/registerform">
              <IconButton color="inherit" aria-label="perfil">
                <CreateIcon />
                ingresar registro
              </IconButton>
            </Link>
            <Link to="/signinform">
              <IconButton color="inherit" aria-label="perfil">
                <AccountCircleOutlinedIcon />
                iniciar de sesion
              </IconButton>
            </Link>
            <Link to="/user">
              <IconButton color="inherit" aria-label="perfil">
                <AccountCircleIcon />
                usuario
              </IconButton>
            </Link>
            {show ? (
              <Link>
                <IconButton
                  color="inherit"
                  aria-label="perfil"
                  onClick={logout}
                >
                  cerrar sesion
                </IconButton>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;

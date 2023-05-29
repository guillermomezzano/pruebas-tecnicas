// React
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Material-ui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ThemeProvider } from "@mui/material/styles";

// Components
import StyleMaterialUi from "../components/modules/ui/StyleMaterialUi";
import Header from "../components/sections/Header";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();
    const registros = JSON.parse(localStorage.getItem("registros"));
    const objetoEncontrado = registros.find((objeto) => {
      if (objeto.username === username && objeto.password === password) {
        return objeto;
      } else {
        return undefined;
      }
    });

    if (objetoEncontrado) {
      alert("bienvenido");
      setUser(objetoEncontrado);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  useEffect(() => {
    sessionStorage.setItem("userSesion", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <Header />
      <div className="col-span-2 py-6 px-40">
        <h2 className="text-2xl mb-2 text-center">Login</h2>
        <form className="mt-8 m-80" onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="mb-4">
              <TextField
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                id="username"
                label="Username"
                variant="outlined"
                required={true}
                fullWidth
              />
            </div>
          </div>
          <div className="mb-6">
            <TextField
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="******************"
              id="password"
              label="Password"
              variant="outlined"
              required={true}
              fullWidth
            />
          </div>
          <div className="mb-4">
            <ThemeProvider theme={StyleMaterialUi()}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Ingresar
              </Button>
            </ThemeProvider>
          </div>
          <div className="flex items-center justify-center">
            <Typography variant="body2">
              <span className="mr-1">¿Eres nuevo?</span>
            </Typography>
            <Link
              to="/signupform"
              variant="body2"
              style={{
                color: "#ff0000",
                fontWeight: "500",
              }}
            >
              Regístrate aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignInForm;

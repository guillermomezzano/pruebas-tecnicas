// React
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Material-ui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import Filter1Icon from "@mui/icons-material/Filter1";
import { ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

// Components
import StyleMaterialUi from "../components/modules/ui/StyleMaterialUi";
import Header from "../components/sections/Header";

const RegisterForm = () => {
  const [registro, setregistro] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    text: "",
    number: null,
    age: "",
    slider: 0,
  });
  const [checked, setChecked] = useState(true);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const handleInputChange = (event) => {
    setregistro({ ...registro, [event.target.name]: event.target.value });
  };

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };

  const handleMapClick = (event) => {
    setSelectedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const obtenerRecusros = () => {
    const datosLocalStorage = localStorage.getItem("registros");
    if (datosLocalStorage) {
      return JSON.parse(datosLocalStorage);
    } else {
      return [];
    }
  };
  const [registros, setRegistros] = useState(obtenerRecusros());

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRegistros([...registros, registro]);
    setregistro({
      username: "",
      password: "",
      password_confirmation: "",
      text: "",
      number: null,
      age: "",
      slider: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);

  return (
    <div>
      <Header />
      <div className="col-span-2 py-6 px-8">
        <h2 className="text-2xl mb-2 text-center">Registro</h2>
        <form className="mt-8 m-80" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <TextField
              name="username"
              type="text"
              onChange={handleInputChange}
              value={registro.username}
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
          <div className="mb-6">
            <TextField
              name="password"
              type="password"
              onChange={handleInputChange}
              value={registro.password}
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
          <div className="mb-6">
            <TextField
              name="password_confirmation"
              type="password"
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="******************"
              id="password_confirmation"
              label="Confirmar"
              variant="outlined"
              required={true}
              value={registro.password_confirmation}
              error={
                !!(
                  registro.password_confirmation &&
                  registro.password_confirmation !== registro.password
                )
              }
              helperText={
                registro.password_confirmation &&
                registro.password_confirmation !== registro.password
                  ? "Las contraseñas no coinciden"
                  : ""
              }
              fullWidth
            />
          </div>
          <div className="mb-4">
            <TextField
              name="text"
              type="text"
              onChange={handleInputChange}
              value={registro.text}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormatColorTextIcon />
                  </InputAdornment>
                ),
              }}
              id="text"
              label="text"
              variant="outlined"
              required={true}
              fullWidth
            />
          </div>
          <div className="mb-4">
            <TextField
              name="number"
              type="number"
              onChange={handleInputChange}
              value={registro.number}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Filter1Icon />
                  </InputAdornment>
                ),
              }}
              id="number"
              label="Input numérico "
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel>Seleccionable</InputLabel>
              <Select
                label="Seleccionable"
                name="age"
                onChange={handleInputChange}
                value={registro.age}
                id="age"
                variant="outlined"
                fullWidth
              >
                <MenuItem value={10}>Diez</MenuItem>
                <MenuItem value={20}>Veinte</MenuItem>
                <MenuItem value={30}>Treinta</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Checkbox Uno" />
              <FormControlLabel control={<Checkbox />} label="Checkbox Dos" />
              <FormControlLabel control={<Checkbox />} label="Checkbox Tres" />
              <FormControlLabel
                control={<Checkbox />}
                label="Checkbox Cuatro"
              />
            </FormGroup>
          </div>
          <div className="mb-4">
            <Switch
              checked={checked}
              onChange={handleChangeSwitch}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="mb-4 pl-40 pr-40">
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <VolumeDown />
              <Slider
                aria-label="Volumen"
                name="slider"
                value={registro.slider}
                onChange={handleInputChange}
              />
              <VolumeUp />
            </Stack>
          </div>
          <div className="mb-4">
            <h1>Selecciona una coordenada en el mapa:</h1>
            <LoadScript googleMapsApiKey="AIzaSyD50QPyN_MwRG958y39wuwahRbcNgbva9E">
              <GoogleMap
                mapContainerStyle={{
                  height: "400px",
                }}
                center={{
                  lat: -3.745,
                  lng: -38.523,
                }}
                zoom={10}
                onClick={handleMapClick}
              >
                {selectedPosition && <Marker position={selectedPosition} />}
              </GoogleMap>
            </LoadScript>
            <p>Latitud: {selectedPosition?.lat}</p>
            <p>Longitud: {selectedPosition?.lng}</p>
          </div>
          <div className="mb-4">
            <ThemeProvider theme={StyleMaterialUi()}>
              <Button
                size="large"
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Registrarse
              </Button>
            </ThemeProvider>
          </div>
          <div className="flex items-center justify-center">
            <Typography variant="body2">
              <span className="mr-1">¿Ya tienes una cuenta?</span>
            </Typography>
            <Link
              to="/signinform"
              variant="body2"
              style={{
                color: "#ff0000",
                fontWeight: "500",
              }}
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

import { createTheme } from "@mui/material/styles";

const StyleMaterialUi = () => {
  const ButtonStyle = createTheme({
    palette: {
      primary: {
        main: "#ff0000", // Color rojo personalizado
      },
    },
  });

  return ButtonStyle;
};

export default StyleMaterialUi;

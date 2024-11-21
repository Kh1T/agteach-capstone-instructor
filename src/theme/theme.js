import { createTheme } from "@mui/material";
import color from "./colors";
import typography from "./typographys";
import components from "./components";

const theme = createTheme({
    palette: color,
    typography: typography,
    components: components
})

export default theme;


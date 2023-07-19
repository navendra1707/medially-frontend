import {Routes, BrowserRouter, Route} from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);  // change this theme when the mode changes
  // const isAuth = useSelector(state => state.token);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme = {theme} >
          <Routes>
            <Route element={<Login />} path='/login' />
            <Route element={<Login />} path='/register' />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode === "dark" ? mode : "colored"}
      />
    </div>
  );
}

export default App;

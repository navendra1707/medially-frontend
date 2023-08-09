import {Routes, BrowserRouter, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BookAppointment from "./pages/BookAppointment";
import SearchPage from "./pages/SearchPage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);  // change this theme when the mode changes
  const isAuth = useSelector(state => state.token);

  return (
    <div
      style={{
        backgroundColor: theme?.palette?.background?.default
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme = {theme} >
          <Routes>
            <Route element={isAuth ? <Navigate to='/' /> : <Login />} path='/login' />
            <Route element={isAuth ? <Navigate to='/' /> : <Login />} path='/register' />
            <Route element={isAuth ? <Home /> : <Navigate to='/login' />} path='/' />
            <Route element={isAuth ? <Profile /> : <Navigate to='/login' />} path='/profile' />
            <Route element={isAuth ? <BookAppointment /> : <Navigate to='/login' />} path='/book' />
            <Route element={isAuth ? <SearchPage /> : <Navigate to='/login' />} path='/search' />
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

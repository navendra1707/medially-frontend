import { lazy } from "react";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuspenseWrapper from "./styled/SuspenseWrapper";
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const DoctorProfile = lazy(() => import('./pages/DoctorProfile'));

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // change this theme when the mode changes
  const isAuth = useSelector((state) => state.token);

  useEffect(() => {
    const startServer = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/start-server`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log(data?.message);
      }
    };

    startServer();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme?.palette?.background?.default,
        minHeight: '100vh'
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              element=<SuspenseWrapper>{isAuth ? <Navigate to="/" /> : <Login />}</SuspenseWrapper>
              path="/login"
            />
            <Route
              element=<SuspenseWrapper>{isAuth ? <Navigate to="/" /> : <Login />}</SuspenseWrapper>
              path="/register"
            />
            <Route
              element=<SuspenseWrapper>{isAuth ? <Home /> : <Navigate to="/login" />}</SuspenseWrapper>
              path="/"
            />
            <Route
              element=<SuspenseWrapper>{isAuth ? <Profile /> : <Navigate to="/login" />}</SuspenseWrapper>
              path="/profile"
            />
            <Route
              element=<SuspenseWrapper>{isAuth ? <BookAppointment /> : <Navigate to="/login" />}</SuspenseWrapper>
              path="/book"
            />
            <Route
              element=<SuspenseWrapper>{isAuth ? <SearchPage /> : <Navigate to="/login" />}</SuspenseWrapper>
              path="/search"
            />
            <Route
              element=<SuspenseWrapper>{isAuth ? <DoctorProfile /> : <Navigate to="/login" />}</SuspenseWrapper>
              path="/doctor/:id"
            />
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

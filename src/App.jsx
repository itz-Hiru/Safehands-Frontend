import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserProvider from "./context/userContext.context";
import LandingPage from "./pages/LandingPage.page";
import Dashboard from "./pages/admin/Dashboard.page";
import PrivateRoute from "./routes/PrivateRoute.route";

const App = () => {
  return (
    <UserProvider>
      <div className="">
        <Router>
          <Routes>
            {/* Default Routes */}
            <Route path="/" element={<LandingPage />} />

            {/* User Routes */}

            {/* Admin Routes */}
            <Route element={<PrivateRoute allowedRoles={["Admin"]} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </UserProvider>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Dashboard/Home";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import BasicTables from "./pages/Tables/BasicTables";
import AdvancedTable from "./pages/Tables/AdvancedTable";
import UserProfiles from "./pages/UserProfile";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import Login from "./pages/AuthPage/SignIn";
import { AuthProvider } from "./context/AuthContext";
import ProtectRoute from "./components/auth/ProtectRoute";
import AuthRoute from "./components/auth/AuthRoute";
import RequireAuth from "./components/auth/RequireAuth";



function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            {/** Authentication route */}
            <Route element={<AuthRoute />}>
              <Route path="/sign-in" element={<Login />} />
            </Route>

            <Route element={<ProtectRoute />}>
              {/** Dashboard Layout */}
              <Route element={<AppLayout />} >
                <Route path="/" element={<Home />} />

                {/* Role-specific routes */}
                <Route path="/student-dashboard" element={
                  <RequireAuth role="STUDENT">
                    <StudentDashboard />
                  </RequireAuth>
                } />
                <Route path="/admin-dashboard" element={
                  <RequireAuth role="ADMIN">
                    <AdminDashboard />
                  </RequireAuth>
                } />

                {/* Others Page */}
                <Route path="/profile" element={<UserProfiles />} />
                {/* <Route path="/calendar" element={<Calendar />} />
                <Route path="/blank" element={<Blank />} /> */}

                {/* Tables */}
                <Route path="/basic-tables" element={<BasicTables />} />
                <Route path="/advanced-tables" element={<AdvancedTable />} />

              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
};


export default App

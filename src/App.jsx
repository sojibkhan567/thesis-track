import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Dashboard/Home";
import BasicTables from "./pages/Tables/BasicTables";
import AdvancedTable from "./pages/Tables/AdvancedTable";
import UserProfiles from "./pages/UserProfile";



function App() {

  return (
    <>
      <Router>
        <Routes>
          {/** Dashboard Layout */}
          <Route element={<AppLayout />} >
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            {/* <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} /> */}

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/advanced-tables" element={<AdvancedTable />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

import React from "react";
import "./App.css";
// import Loginpage from './page/Loginpage';
import Homepage from "./route";
import Leaveform from "./section/leaveform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./page/Loginpage";
import { UserProvider } from "./hooks/UserContext";
import PrivateRoute from "./route/privateRoute";
import Holidays from "./page/Holidays";
import Leavepage from "./page/Leavepage";
import Summary from "./page/Summary";
import WorktimeGrid from "./section/Worktime";
import Dashboard from "./page/Dashboard";
import Homelayout from "./layout/Homelayout";
import ProtectedRoute from "./route/protectedRoute";
import User from "./page/User";
import User_Leavepage from "./page/User_LeavePage";

function App() {

  return (
    <>
      {/* <Loginpage/> */}
      {/*  <Homepage/>   */}
      {/* <Leaveform/> */}
      <UserProvider>
        <Routes>
          <Route path="/" element={<Loginpage />} />

          <Route element={<Homelayout />}>
            <Route
              path="/dashboard"
              element={<PrivateRoute roles={['USER','ADMIN']} Component={Dashboard} />}
            />
            <Route
              path="/worktimereport"
              element={<PrivateRoute roles={'USER'} Component={WorktimeGrid} />}
            />
            <Route
              path="/holidaylist"
              element={<PrivateRoute roles={'USER'} Component={Holidays} />}
            />
            <Route
              path="/leavepage"
              element={<PrivateRoute roles={'ADMIN'} Component={Leavepage} />}
            />
            <Route
              path="/userleavepage"
              element={<PrivateRoute roles={'USER'} Component={User_Leavepage} />}
            />
            <Route
              path="/summarypage"
              element={<PrivateRoute roles={'USER'} Component={Summary} />}
            />
            <Route path="/user" element={<PrivateRoute roles={'USER'} Component={User} />} />
          </Route>

          <Route path="*" component={() => "404 Page Not Found"} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;

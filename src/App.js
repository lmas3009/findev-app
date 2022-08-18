import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAuth from "./Pages/Auth";
import DeveloperInfo from "./Pages/Auth/developerInfo";
import Dashboard from "./Pages/Dashboard";
import DeveloperProfile from "./Pages/Dashboard/developerProfile";
import Profile from "./Pages/Dashboard/profile";
import LandingPage from "./Pages/Landing";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<GoogleAuth />} />
        <Route path="/auth/:id/developerinfo" element={<DeveloperInfo />} />
        <Route path="/home/:id" element={<Dashboard />} />
        <Route path="/home/:id/userprofile" element={<Profile />} />
        <Route path="/home/:id/:uid/Devprofile" element={<DeveloperProfile />} />
      </Routes>
    </Router>
  )
}

export default App;
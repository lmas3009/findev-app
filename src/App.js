import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAuth from "./Pages/Auth";
import LandingPage from "./Pages/Landing";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<GoogleAuth />} />
      </Routes>
    </Router>
  )
}

export default App;
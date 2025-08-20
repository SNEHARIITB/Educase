import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AccountPage from "./Pages/AccountPage";


function App() {

  const appstyles = {
    margin : "0 auto",
    maxWidth: "430px", 
      
    minWidth: "320px", 
    
    backgroundColor: "hsl(210, 20%, 98%)",
    textAlign: "left",
    border: "1px solid hsl(220, 13%, 91%)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  }


  return (
    <div style={appstyles}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

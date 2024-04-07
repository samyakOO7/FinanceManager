import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CreateScrapbookButton from "./components/CreateScrapBook/CreateScrapbookButton";
import ConfirmationScreen from "./components/ForgotPassword/Confirmation";
//import Registration from "./components/Registration/Registration"

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/login" element={<SignIn />} />
             <Route path="/registration" element={<SignUp />} /> 
             <Route path = "/forgot-password" element= {<ForgotPassword/>} />
             <Route path ="/scrap-book" element = {<CreateScrapbookButton/>}/>
             <Route path = "/confirmation-screen"  element = {<ConfirmationScreen/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Route, Routes, BrowserRouter } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm";
import RecodList from "./pages/RecordList";
import SignInForm from "./pages/SignInForm";
import User from "./pages/User";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/signinform" element={<SignInForm />} />
          <Route path="/recordlist" element={<RecodList />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

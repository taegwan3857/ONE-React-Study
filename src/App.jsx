import { Link, Route, Routes } from "react-router-dom";
import GoodBye from "./components/GoodBye";
import Hello from "./components/Hello";
import Introduce from "./components/introduce";
import Login from "./components/Login";
import SignUp from "./components/Signup";


export default function App(){
  return(
    <div>
      <h1>메인 페이지</h1>
      <ul>
        <Link to={'/login'}>
          <li>로그인</li>
        </Link>        
        <Link to={'/signup'}>
          <li>회원가입</li>
        </Link>
      </ul>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/i" element={<Introduce />} />
      </Routes>
    </div>
  )
}

// react-router-dom
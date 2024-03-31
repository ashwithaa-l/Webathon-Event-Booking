// import Eventpage from "./components/Eventpage"
// import Registration from "./components/Registration"
// // import Login from "./components/Login"
// import Aboutus from "./components/Aboutus"
// import Profile from "./components/Profile"
// import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

const App=()=>{
  return (<>
 <Navbar/>
 <Outlet/>
 
  </>)
}

export default App
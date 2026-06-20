 
 
import { Routes,Route,Navigate } from "react-router-dom"
import Main from "./pages/main"
import LoginAndSignUp from "./pages/LoginAndSignup"
import { useAuthContext } from "./context/AuthContext"
 
 const App = () => {
  const {authUser,loading}=useAuthContext();
  if(loading){
    return <div>Login...</div>
  }
  return (
     <>
     <Routes>
      <Route path="/" element={<LoginAndSignUp/>}/>
      <Route path="/content" element={authUser?<Main/>: <Navigate to="/home"/>}/>
     </Routes>
     </>
   )
 }
 
 export default App
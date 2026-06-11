 
 
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../lib/axios";
import { useAuthContext } from "../context/AuthContext";


const Main = () => {
    const navigate=useNavigate();
     const { setAuthUser } = useAuthContext();
    const nav=async()=>{
        try{
            const res= await axiosInstance.post("/auth/logout");
            console.log(res);
            setAuthUser(null);
             navigate("/home")
        }
        catch(error){
            console.log(error)
        }
        
    }
  return (
    <div className="min-h-screen w-screen bg-black"> 
    <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 bg-black">
    <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
       SUCCESFULLY LOGED IN
    </h1>
    <div className="h-px w-80 rounded bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
    <p className="md:text-xl text-gray-400 max-w-lg text-center">
        CLICK BELOW TO LOGOUT
    </p>
    <button  onClick={nav} className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
       LOGOUT
        <svg className="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
</div>
</div>
  )
}

export default Main
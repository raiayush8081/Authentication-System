import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
  const [authUser,setAuthUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const checkAuth = async()=>{
    try{
      const res=await axiosInstance.get("/auth/check");
      setAuthUser(res.data);
    }catch(error){
      console.error("Error checking auth:",error);
      setAuthUser(null);
    }finally{
      setLoading(false);
    }
  }


useEffect(()=>{
  checkAuth();
},[]);


return (
  <AuthContext.Provider
  value={{
    authUser,
    setAuthUser,
    loading
  }}>{children}</AuthContext.Provider>

)
}
export const useAuthContext=()=>{
  return useContext(AuthContext);
}
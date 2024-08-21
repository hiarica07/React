import React, { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextKai = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Registered Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message); // error.message ile daha iyi bir hata mesajı elde edebilirsiniz
    }
  };


  const signIn = async (email,password) => 
    
    {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toastSuccess("Login Successfully");
        navigate("/");
      } catch (error) {
        toastError(error.message); // error.message ile daha iyi bir hata mesajı elde edebilirsiniz
      }
    };

  return (
    <AuthContextKai.Provider value={{ createUser , signIn}}>
      {children}
    </AuthContextKai.Provider>
  );
};

export default AuthContext;

import { useEffect, useState } from "react";
import {  getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/Firebase.int";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignInUse = () =>{
return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            
            }
          });
    },[])
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    return {
        user,
        googleSignInUse,
        logOut
    }
}
export default useFirebase;
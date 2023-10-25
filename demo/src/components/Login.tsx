import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button } from "./ui/button"
import { auth} from "@/lib/firebase" 
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const navigate= useNavigate();
  const provider = new GoogleAuthProvider()
  const [isError  , setIsError  ] = useState(false)
  const singinWithGoogle = async () => {
   
    try {
      const result = await signInWithPopup(auth,provider);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      // console.log(result.user)
      localStorage.setItem("demoName", name || "");
      localStorage.setItem("demoEmail", email || "");
      localStorage.setItem("demoProfilePic", profilePic || "");
      navigate("/");
    } catch (error) {
      setIsError(true);
      console.log(error)
    }
    
  }
  return (
    <div>
        <Button onClick={singinWithGoogle}>
            login with google
        </Button>
        {isError? <div>Somethis went wrong </div>:""}
    </div>
  )
}

export default Login
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [isError, setIsError] = useState(false);
  const singinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("demoName", name || "");
      localStorage.setItem("demoEmail", email || "");
      localStorage.setItem("demoProfilePic", profilePic || "");
      navigate("/");
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Button onClick={singinWithGoogle}>Login with Google</Button>
      {isError ? <div>Something went wrong</div> : ""}
    </div>
  );
};

export default Login;

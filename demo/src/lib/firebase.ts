
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8r4CFL7aLwUf5ULfPXrAu_A7o3cG20Hg",
  authDomain: "fir-49c0d.firebaseapp.com",
  projectId: "fir-49c0d",
  storageBucket: "fir-49c0d.appspot.com",
  messagingSenderId: "259053590778",
  appId: "1:259053590778:web:a503f20f1ff43ceccd1143"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export const singinWithGoogle = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const navigate= useNavigate();
//   signInWithPopup(auth, provider).then((result: UserCredential) => {
//     const name = result.user.displayName;
//     const email = result.user.email;
//     const profilePic = result.user.photoURL;
//     console.log(result.user)
//     localStorage.setItem("demoName", name || "");
//     localStorage.setItem("demoEmail", email || "");
//     localStorage.setItem("demoProfilePic", profilePic || "");
//     navigate("/");
//   }).catch((error) => {
//     console.log(error)
//   })
// }
export { app };
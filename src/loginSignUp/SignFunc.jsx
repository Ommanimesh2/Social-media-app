
import {createUserWithEmailAndPassword } from "firebase/auth";


export default function Sign({auth,email,password}) {
    console.log("object")
    console.log(email);
    {createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 

        const user = userCredential.user;
        alert("logedd isn!!!")
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });}
  }
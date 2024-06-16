"use client";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
} from "firebase/auth";
import app from "../firebaseConfig";
import { text } from "stream/consumers";
import { Fragment, useEffect, useState } from "react";
import "flowbite";
import { Button } from "flowbite-react";
interface ButtonPropsin {
  text: string; // Button label text
}
//const provider = new GoogleAuthProvider();
//const auth = getAuth(app);
//auth.useDeviceLanguage();

const GoogleSSO: React.FC<ButtonPropsin> = ({ text }) => {
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    const authInstance = getAuth(app);
    authInstance.useDeviceLanguage();
    setAuth(authInstance); // Set the auth object state after it's initialized
  }, []);

  const handleLogin = () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          window.location.reload()
        } else {
          console.log("credential is empty");

        }

        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <Fragment>
    <Button pill color="dark"onClick={handleLogin}>
      {text}
      </Button>
      </Fragment>
  );
};

export default GoogleSSO;

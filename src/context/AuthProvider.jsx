import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, displayName, photoURL) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = result.user;

      // Update the user's profile with displayName and photoURL
      await updateProfile(newUser, {
        displayName: displayName,
        photoURL: photoURL,
      });

      return newUser;
    } catch (error) {
      console.error("Error creating user or updating profile:", error.message);
    }
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signWithGoogle = () => {
    return signInWithPopup(auth, provider); // Use the signInWithPopup method
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(
            "https://historical-artifacts-server-side.vercel.app/jwt",
            user,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("Login Token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://historical-artifacts-server-side.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log("logout", res.data));
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

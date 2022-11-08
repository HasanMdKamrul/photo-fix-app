import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ** Email pass signin

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ** Email and pass signin

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ** Google signIn   //   ** Github signin
  const socialSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   ** observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    // ** cleanup
    return () => unsubscribe();
  }, []);
  //   ** signout

  const logOut = () => {
    setLoading(true);
    // localStorage.removeItem("token");
    return signOut(auth);
  };

  //   ** update profile

  const profileUpdater = (profileInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profileInfo);
  };

  // ** verification email

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //   ** forget password

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUser,
    userLogin,
    loading,
    setLoading,
    user,
    socialSignIn,
    logOut,
    profileUpdater,
    verifyEmail,
    passwordReset,
  };

  return authInfo;
};

export default useFirebase;

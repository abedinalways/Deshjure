import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //Sign up new users
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Sign in existing users
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  //google sign in Users
  const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }
  //signOut users
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
  }
  //for tracking user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])
  const userInfo = { user, createUser, loading, signInUser, googleSignIn, signOutUser };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
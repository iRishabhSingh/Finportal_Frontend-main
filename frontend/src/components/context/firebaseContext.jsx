import React from "react";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// context api
const firebaseContext = createContext(null);

// Firebase API
const firebaseConfig = {
  apiKey: "AIzaSyDbF8gyfgZYANqyWAB72QRireh8ma7GE3A",
  authDomain: "finportal-37d63.firebaseapp.com",
  databaseURL: "https://finportal-37d63-default-rtdb.firebaseio.com",
  projectId: "finportal-37d63",
  storageBucket: "finportal-37d63.appspot.com",
  messagingSenderId: "688216393507",
  appId: "1:688216393507:web:02c884cc0601f328c02e96",
};

//Firebase Instances
export const useFirebase = () => useContext(firebaseContext);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export const FirebaseApp = (props) => {
  // realtime Database for user info..
  const storeInfo = async (userCredential, data) => {
    const user = await set(ref(db, "users/" + userCredential.user.uid), data);
    return user;
  };
  // registeration of user..
  const createUser = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  };
  // login user..
  const signInUser = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };

  return (
    <firebaseContext.Provider value={{ signInUser, createUser, storeInfo }}>
      {props.children}
    </firebaseContext.Provider>
  );
};

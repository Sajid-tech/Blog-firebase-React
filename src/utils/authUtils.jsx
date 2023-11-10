import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

// Function to check if a user is logged in
export const isUserLoggedIn = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    const isLoggedIn = !!user;
    callback(isLoggedIn);
  });

  // Unsubscribe from the auth state listener when not needed
  return () => unsubscribe();
};

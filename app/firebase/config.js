import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYtHOGAh73OBje0zbhcRICYyMow6Ci5xo",
  authDomain: "next-js-459e0.firebaseapp.com",
  projectId: "next-js-459e0",
  storageBucket: "next-js-459e0.appspot.com",
  messagingSenderId: "940637024695",
  appId: "1:940637024695:web:669d92a0bf44da5b263832"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
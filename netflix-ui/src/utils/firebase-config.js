import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCyVDIcbBjYdleRGMT1uOKeXxIdIwpoG6k",
  authDomain: "react-netflix-clone-4ecd8.firebaseapp.com",
  projectId: "react-netflix-clone-4ecd8",
  storageBucket: "react-netflix-clone-4ecd8.appspot.com",
  messagingSenderId: "735025710199",
  appId: "1:735025710199:web:d0db1d6394d3b9771e3272",
  measurementId: "G-9LDGFWGEPQ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
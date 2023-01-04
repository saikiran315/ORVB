import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  /*apiKey: "AIzaSyAkufXeg2rbk11gjtQT5GwkBqjfiSAZGRI",
  authDomain: "nextjs-701fb.firebaseapp.com",
  projectId: "nextjs-701fb",
  storageBucket: "nextjs-701fb.appspot.com",
  messagingSenderId: "634650806361",
  appId: "1:634650806361:web:de496b003743839cfc8948",
  measurementId: "G-R2277YPQZY",*/
  apiKey: "AIzaSyDCf2xk1pWFr810f5HaaO4KYqdGu_NHxTI",
  authDomain: "on-road315-project.firebaseapp.com",
  databaseURL: "https://on-road315-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "on-road315-project",
  storageBucket: "on-road315-project.appspot.com",
  messagingSenderId: "150914448461",
  appId: "1:150914448461:web:5af786039a135eb69a7004",
  measurementId: "G-KYJD3DL2NR"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

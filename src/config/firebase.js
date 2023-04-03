
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl0LV0B0lNDF6O7DCsU8qYeVgspRwDFPs",
  authDomain: "tiktok---jornada-6f4f7.firebaseapp.com",
  projectId: "tiktok---jornada-6f4f7",
  storageBucket: "tiktok---jornada-6f4f7.appspot.com",
  messagingSenderId: "612036465434",
  appId: "1:612036465434:web:75ec0404323709800712a3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
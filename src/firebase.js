import { initializeApp } from "firebase/app";
import { getFirestore, getDoc,doc ,updateDoc,deleteDoc,setDoc} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB4UZaHZhILX4moyOyaI7PoND4TCKqAcsk",
authDomain:"node-js-b14f6.firebaseapp.com",
databaseURL: "https://node-js-b14f6-default-rtdb.firebaseio.com",
projectId: "node-js-b14f6",
storageBucket: "node-js-b14f6.appspot.com",
messagingSenderId: "595139727657",
appId: "1:595139727657:web:d9fae99491c90f8e8d6738",
measurementId: "G-1QS632QHN8"
};


  const firebase = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebase);
  const auth = getAuth(firebase);
  const realtime = getDatabase(firebase);

  export { auth, firestore,realtime };

 



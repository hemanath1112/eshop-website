// 
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBl3W-FBeL_fZdmbc4JiQ_1Bce8UD_3D3Q",
  authDomain: "eshop-1b843.firebaseapp.com",
  projectId: "eshop-1b843",
  storageBucket: "eshop-1b843.appspot.com",
  messagingSenderId: "153333019357",
  appId: "1:153333019357:web:e68472e0e2564dccf6e134",
  measurementId: "G-ED10LWFDX6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
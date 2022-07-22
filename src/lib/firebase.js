import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const FirebaseConfig = {
  apiKey: "AIzaSyADadKQqmT761ZPpGsVY8CsH-CR3MFu5K4",
  authDomain: "prepro-quiz.firebaseapp.com",
  projectId: "prepro-quiz",
  storageBucket: "prepro-quiz.appspot.com",
  messagingSenderId: "919138798035",
  appId: "1:919138798035:web:c41704ee2ea3e910cc0726"
};

const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app);

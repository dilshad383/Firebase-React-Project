import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBGORIwDFMBHiktCsTLTOpP8L-haf5dKcc",
  authDomain: "reactapp-f3f73.firebaseapp.com",
  projectId: "reactapp-f3f73",
  storageBucket: "reactapp-f3f73.firebasestorage.app",
  messagingSenderId: "249865318500",
  appId: "1:249865318500:web:6f8192e1427714c6bfaf71",
  databaseURL: 'https://reactapp-f3f73-default-rtdb.firebaseio.com/'
};

export const app = initializeApp(firebaseConfig)
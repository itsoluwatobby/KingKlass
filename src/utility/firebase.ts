import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCGlnUkIdyr0GhS1wUv0nH9qHLBneLEfZo",
  authDomain: "king-klass.firebaseapp.com",
  projectId: "king-klass",
  storageBucket: "king-klass.appspot.com",
  messagingSenderId: "631227080136",
  appId: "1:631227080136:web:99313fd924b6a953f834fd",
  measurementId: "G-1LZ86VZ1J0"
};

export const app = initializeApp(firebaseConfig);
export const imageStorage = getStorage();
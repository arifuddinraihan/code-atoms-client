// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOqusfBxGGXki4nopn488cAqShcoLI2dY",
    authDomain: "code-atoms-site.firebaseapp.com",
    projectId: "code-atoms-site",
    storageBucket: "code-atoms-site.appspot.com",
    messagingSenderId: "393242268336",
    appId: "1:393242268336:web:f9d7f6f0613828601a6175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
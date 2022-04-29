// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjniHx3pwQQYlXVIgTp8nwV1mFNSlFi4A",
    authDomain: "warehouse-books.firebaseapp.com",
    projectId: "warehouse-books",
    storageBucket: "warehouse-books.appspot.com",
    messagingSenderId: "925095132541",
    appId: "1:925095132541:web:c74fb2419b50ef23062014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
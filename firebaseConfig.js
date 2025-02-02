import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBY041Q6pMUqo1huHNC9Q8J1lP6zxQ51VQ",
    authDomain: "todoapp-e3d81.firebaseapp.com",
    projectId: "todoapp-e3d81",
    storageBucket: "todoapp-e3d81.firebasestorage.app",
    messagingSenderId: "508487957378",
    appId: "1:508487957378:web:2008025393742bbe842d9b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

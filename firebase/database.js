import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALetI4RrSWgX4fZHI0jR12Dhk3h7zIQd8",
  authDomain: "todo-list-3a8ab.firebaseapp.com",
  projectId: "todo-list-3a8ab",
  storageBucket: "todo-list-3a8ab.firebasestorage.app",
  messagingSenderId: "474616470822",
  appId: "1:474616470822:web:0811e9b9d630383a27b5e7",
  measurementId: "G-H96Z8MDKKD"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Tu configuración real de Firebase obtenida de la consola
const firebaseConfig = {
  apiKey: "AIzaSyDoFKtIPG7_sBlbUNyRaybzOC87VYrlm1I",
  authDomain: "alerta-vial-d81b1.firebaseapp.com",
  projectId: "alerta-vial-d81b1",
  storageBucket: "alerta-vial-d81b1.firebasestorage.app",
  messagingSenderId: "393739426046",
  appId: "1:393739426046:web:3caa2a37d342a060d5edaf",
  measurementId: "G-KQB26FYSM2"
};

// Initialize Firebase y exportar Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




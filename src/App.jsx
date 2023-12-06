import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Detail from "./pages/Detail";
import  {CarritoProvider}  from "./Helper/Carrito";
import Type from "./pages/Type";
import Home from "./pages/Home";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxqJFfx7MNL7Zc8Wav8JiSjzngIsbhcvQ",
    authDomain: "proyecto-react-a68f8.firebaseapp.com",
    projectId: "proyecto-react-a68f8",
    storageBucket: "proyecto-react-a68f8.appspot.com",
    messagingSenderId: "265330567722",
    appId: "1:265330567722:web:104a7ea5ac0daf29f63153",
    measurementId: "G-TCEJWX4R6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:type/:nombre" element={<Detail />} />
          <Route path="/productos/:type" element={<Type />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export {db};
export  default App;


import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const getCompra = async() => {
    const db = getFirestore();
    const collref = collection(db, "compra");
    const snapshot = await getDocs(collref);
    return snapshot.docs.map((elem) => ({ id: elem.id, ...elem }));
};

const createCompra = async(data) => {
    const db = getFirestore();

    const collref = collection(db, "compras");

    await addDoc(collref, data);
};

export const carritoServices = { getCompra, createCompra };
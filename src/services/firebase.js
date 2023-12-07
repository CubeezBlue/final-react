import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../App";

export const obtenerProductosDesdeFirebase = async() => {
    const productosRef = collection(db, "productos");
    try {
        const querySnapshot = await getDocs(productosRef);
        return querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }));
    } catch (error) {
        console.error("Error al obtener productos desde Firebase:", error);
        return [];
    }
};


export const obtenerProductosPorTipoDesdeFirebase = async(tipo) => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("type", "==", tipo));

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }));
    } catch (error) {
        console.error("Error al obtener productos desde Firebase por tipo:", error);
        return [];
    }
};

export const obtenerDetallesProductoDesdeFirebase = async(nombre) => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("nombre", "==", nombre));

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Si hay resultados, asumimos que hay un solo producto con ese nombre
            const docData = querySnapshot.docs[0].data();
            return {...docData, id: querySnapshot.docs[0].id };
        } else {
            console.error("Producto no encontrado en Firebase.");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener detalles de producto desde Firebase:", error);
        return null;
    }
};
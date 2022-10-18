import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    
    return getDocs(collectionReference)
    .then(snapshot => {
        const list = snapshot
        .docs
        .map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    return getDoc(itemReference)
    .then(snapshot => {
        if(snapshot.exists()) {
        const item = {
            id: snapshot.id,
            ...snapshot.data()
        };
        return item;
        }
    })
    
};

export const getProductsByCategory = (categoryId) => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where('category', '==', categoryId))
    return getDocs(collectionQuery)
    .then(snapshot => {
        const list = snapshot
        .docs
        .map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return list;
    })
    .catch(error => console.warn(error))
};





const products = [
    { name: "Teclado Red Dragon", pictureUrl:"https://redragon.es/content/uploads/2021/04/Harpe-Pro-K503-Desktop1356x890-7.jpg", category: "teclados", detail: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", price: 100, stock: 10},
    { name: "Teclado Logitech", pictureUrl:"https://i.ytimg.com/vi/bEOVVD7pW2I/maxresdefault.jpg", category: "teclados", detail: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", price: 100, stock: 10},
    { name: "MOUSE CORSAIR GAMING SCIMITAR RGB ELITE", pictureUrl:"https://culturageek.com.ar/wp-content/uploads/2020/06/Culturageek.com_.ar-Mouse-Corsair-MOBA-MMO-SCIMITAR-RGB-ELITE-00.jpg", category: "mouse", detail: "MOUSE CORSAIR GAMING SCIMITAR RGB ELITE", price: 100, stock: 10},
    { name: "Mouse Razer Viper", pictureUrl:"https://i.ytimg.com/vi/NZCSLME8KtI/maxresdefault.jpg", category: "mouse", detail: "Mouse Razer Viper", price: 100, stock: 10},
    { name: "VIDEO GEFORCE RTX 3090 TI 24GB MSI SUPRIM X", pictureUrl:"https://guiagame.com/wp-content/uploads/2022/01/MSI-RTX-3090-Ti.jpg", category: "placasVideo", detail: "Core Clocks Extreme Performance: 1965 MHz (MSI Center) / Boost: 1950 MHz (GAMING & SILENT Mode).", price: 100, stock: 10},
    { name: "VIDEO GEFORCE RTX 3090 24GB INNO3D ICHILL X4", pictureUrl:"https://www.phucanh.vn/media/news/0411_3dDSC07508.jpg", category: "placasVideo", detail: "Lighting module Programmable RGB: Aura Sync, Mystic Light, RGB Fusion", price: 100, stock: 10},
    { name: "MONITOR GAMER 32 LG 32GP850-B IPS QHD 165HZ 1MS HDMI DP", pictureUrl:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-32-lg-32gp850b-ips-qhd-165hz-1ms-hdmi-dp-0.jpg", category: "monitores", detail: "Tecnología Atenuación Retroiluminación Global Dimming", price: 100, stock: 10},
    { name: "MONITOR 27 GIGABYTE AORUS FI27Q-SA QUAL HD 165HZ 1MS IPS", pictureUrl:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-27-gigabyte-aorus-fi27qsa-qual-hd-165hz-1ms-ips-1.jpg", category: "monitores", detail: "AORUS Exclusivo Active Noise Cancellation, OSD Sidekick Diseño de soporte ergonómico con giro ajustable, pivote, inclinación y altura.", price: 100, stock: 10},
    { name: "PC INTEL I7 11400+H510+8GB+240GB SSD", pictureUrl:"https://culturagamer.mx/wp-content/uploads/2021/02/Computadora-gamer-alta-tecnologia-monitor-gabinete-teclado-mouse-gamer.jpg", category: "pcArmadas", detail: "1 | MICRO INTEL CORE I5 11400 1 | MOTHER H510  1 | MEMORIA 8GB DDR4 2666MHZ 1 | DISCO HDD 1TB SATA III 1 | GABINETE KIT * INCLUYE KIT: PARLANTE - TECLADO - MOUSE * NO INCLUYE SISTEMA OPERATIVO", price: 1880, stock: 13},
    { name: "PC ASUS RYZEN 3 3200G - 2X4GB - SSD - 1TB - WIFI", pictureUrl:"https://media.biobiochile.cl/wp-content/uploads/2022/03/armado-pc-gamers-sp-digital.jpg", category: "pcArmadas", detail: "1 | MICRO INTEL CORE I5 11400 1 | MOTHER H510  1 | MEMORIA 8GB DDR4 2666MHZ 1 | DISCO HDD 1TB SATA III 1 | GABINETE KIT * INCLUYE KIT: PARLANTE - TECLADO - MOUSE * NO INCLUYE SISTEMA OPERATIVO", price: 1220, stock: 25}
    ]

export const createAllProducts = async () => { 
    try {
        // obtenemos la basedatos
        const database = getFirestore();

        // obtenemos la referencia a la collecion
        const collectionReference = collection(database, 'items'); 

        for(let i = 0; i < products.length; i++) {
            const snapshot = await addDoc(collectionReference, products[i]);
        }
    } catch (error) { 
        console.warn(error)
    }
}
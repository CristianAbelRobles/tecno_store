export const products = [
    {id: 1, nombre: "Teclado Corsair", url:"https://www.muycomputer.com/wp-content/uploads/2020/10/Corsair-1.jpg", category: "teclados", detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", price: 100, stock: 10},
    {id: 2, nombre: "Teclado Red Dragon", url:"https://redragon.es/content/uploads/2021/04/Harpe-Pro-K503-Desktop1356x890-7.jpg", category: "teclados", detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", price: 100, stock: 10},
    {id: 3, nombre: "Teclado Logitech", url:"https://i.ytimg.com/vi/bEOVVD7pW2I/maxresdefault.jpg", category: "teclados", detalle: "El K60 RGB PRO, equipado con las nuevas teclas CHERRY VIOLA, ofrece a los jugadores la precisión, el tacto y la fiabilidad que solo ofrecen los teclados mecánicos.", price: 100, stock: 10},
    {id: 4, nombre: "Mouse Logitech G Pro Hero", url:"https://i.ytimg.com/vi/HkLx_d7KP-U/maxresdefault.jpg", category: "mouse", detalle: "El mouse para juegos PRO Gaming Mouse se creó con un objetivo: ayudarte a triunfar en el entorno extremadamente competitivo y acelerado de los deportes electrónicos. Se ha optimizado con sensor HERO para darle la portentosa velocidad y precisión necesarias para ganar.", price: 100, stock: 10},
    {id: 5, nombre: "MOUSE CORSAIR GAMING SCIMITAR RGB ELITE", url:"https://culturageek.com.ar/wp-content/uploads/2020/06/Culturageek.com_.ar-Mouse-Corsair-MOBA-MMO-SCIMITAR-RGB-ELITE-00.jpg", category: "mouse", detalle: "MOUSE CORSAIR GAMING SCIMITAR RGB ELITE", price: 100, stock: 10},
    {id: 6, nombre: "Mouse Razer Viper", url:"https://i.ytimg.com/vi/NZCSLME8KtI/maxresdefault.jpg", category: "mouse", detalle: "Mouse Razer Viper", price: 100, stock: 10},
    {id: 7, nombre: "VIDEO GEFORCE RTX 3090 TI 24GB ASUS TUF GAMING", url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3090-ti-24gb-asus-tuf-gaming-0.jpg", category: "placasVideo", detalle: "TUF Gaming GeForce RTX™ 3090 TI 24GB GDDR6X ofrece un diseño mejorado que ofrece un rendimiento térmico superior.", price: 100, stock: 10},
    {id: 8, nombre: "VIDEO GEFORCE RTX 3090 TI 24GB MSI SUPRIM X", url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3090-ti-24gb-msi-suprim-x-0.jpg", category: "placasVideo", detalle: "Core Clocks Extreme Performance: 1965 MHz (MSI Center) / Boost: 1950 MHz (GAMING & SILENT Mode).", price: 100, stock: 10},
    {id: 9, nombre: "VIDEO GEFORCE RTX 3090 24GB INNO3D ICHILL X4", url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3090-24gb-inno3d-ichill-x4-0.jpg", category: "placasVideo", detalle: "Lighting module Programmable RGB: Aura Sync, Mystic Light, RGB Fusion", price: 100, stock: 10},
    {id: 10, nombre: "MONITOR GAMER 27 BENQ ZOWIE XL2746K DARK GREY", url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-27-benq-zowie-xl2746k-dark-grey-0.jpg", category: "monitores", detalle: "Marca: Zowie Modelo: 9H.LKJLB.QBL Tamaño(pulgadas): 27 Tasa de refresco: 240Hz", price: 100, stock: 10},
    {id: 11, nombre: "MONITOR GAMER 32 LG 32GP850-B IPS QHD 165HZ 1MS HDMI DP", url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-32-lg-32gp850b-ips-qhd-165hz-1ms-hdmi-dp-0.jpg", category: "monitores", detalle: "Tecnología Atenuación Retroiluminación Global Dimming", price: 100, stock: 10},
    {id: 12, nombre: "MONITOR 27 GIGABYTE AORUS FI27Q-SA QUAL HD 165HZ 1MS IPS", url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-27-gigabyte-aorus-fi27qsa-qual-hd-165hz-1ms-ips-1.jpg", category: "monitores", detalle: "AORUS Exclusivo Active Noise Cancellation, OSD Sidekick Diseño de soporte ergonómico con giro ajustable, pivote, inclinación y altura.", price: 100, stock: 10}
    ]

export const getAllProducts = () => {
        const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    })

    return promise
};

export const getProduct = (id) => {
        const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000)
    })

    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
        return resolve(results);
    }, 2000)
})

    return promise
};
import React, { useEffect, useState } from 'react';

import FirebaseApp from '../credentials';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import ListadoProductos from './Firebase/ListadoProductos';
const auth = getAuth(FirebaseApp);
const firestore = getFirestore(FirebaseApp);

const Home = () => {
    // const [arrayProductos, setArrayProductos] = useState(null);

    // const faker = [{
    //     name: 'producto 1',
    //     type: 'tipo 1',
    //     description: 'description 1',
    // }];



    // async function searchOrCreateDoc(idDoc) {
    //     // referencia al doc
    //     const docRef = doc(firestore, `products/${idDoc}`);
    //     // search doc
    //     const query = await getDoc(docRef);
    //     //check if exists
    //     if (query.exists()) {
    //         //existe
    //         const docInfo = query.data();
    //         return docInfo.name;

    //     } else {
    //         // no existe
    //         await setDoc(docRef, { fakeData: [...faker] });
    //         const query = await getDoc(docRef);
    //         const docInfo = query.data();
    //         return docInfo.name;
    //     }

    // }

    // useEffect(() => {
    //     async function fetchProducts() {
    //         searchOrCreateDoc()
    //     }
    // }, []);

    return (
        <div className='text-white'>
            <h1>Home</h1>
            <hr />
            <div className='sign-out-div'>
                <button onClick={() => signOut(auth)}>Sign Out</button>
            </div>
            <hr />
        </div>
    )
}

export default Home
import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";

const ItemList = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        const urls = [];
        const URL = 'https://pokeapi.co/api/v2/pokemon/';
        for (let index = 1; index < 152; index++) {
            urls.push(URL + index);
        }
        //console.log(urls);
        Promise.all(urls.map(url => fetch(url)))
            .then(function (responses) {
                return Promise.all(responses.map(resp => resp.json()))
            }).then((data) => {
                Promise.all(data.map(e => fetch(e.species.url)))
                    .then(function (responses) {
                        return Promise.all(responses.map(resp => resp.json()))
                    }).then((species) => {
                        let finalData = [];
                        for (var key in data) {
                            let collection = [];
                            collection.push(data[key]);
                            collection.push(species[key]);
                            finalData.push(collection);
                        }
                        setPokemons(finalData);
                    })
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className='h-screen w-screen py-6 flex items-center justify-center flex-wrap'>
                {pokemons.map(p => <Pokemon key={p[0].id} props={p}>{p[0].name}</Pokemon>)}
            </div>
        </>
    );
}

export default ItemList;
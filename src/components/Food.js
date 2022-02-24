/*import { useState, useEffect } from "react";

const Food = () => {

    const [dishes, setDishes] = useState([])

    useEffect(() => {
        getDishes();
    }, []);

    const getDishes = () => {
        const url = "https://api.spoonacular.com/recipes/";
        const pass = "55701ea391a34d61bf10cd496a0fe203";
        const randomIds = [];

        for (let index = 0; index < 10; index++) {
            randomIds[index] = url
                + Math.floor(Math.random() * (2500 - 1) + 1)
                + '/information?apiKey='
                + pass
                + '&includeNutrition=false';
        }
        const dishes = [];
        randomIds.forEach(e => {
            fetch(e).then((resp) => resp.json())
                .then((resp) => {
                    console.log(resp);
                    let aDish = {
                        id: resp.id,
                        img: resp.image,
                        title: resp.title,
                        summary: resp.summary
                    }
                    dishes.push(aDish);

                })
                .finally(() => {
                    setDishes(dishes);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
    }

    //console.log(dishes);

    return (
        <>

            <div className="text-amber-200">Food</div>
            {dishes.map(d => <li key={d.id} className='text-amber-100'>{d.title}</li>)}

        </>

    );
}

export default Food;*/
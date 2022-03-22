import { useEffect, useState } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

const ComponenteEstado = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        promesa()
        console.log('ejecución del efecto')

        const task = new Promise((resolve, reject) => {
            const random = Math.random();
            console.log(random);
            if (random < 0.5) {
                resolve('la promesa se resolvió');
            }
            reject('la promesa se rechazó');
        });

        task.then((resolve) => {
            console.log(resolve);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            console.log('finalmente!');
        });

        return () => {
            console.log('limpieza')
        }
    }, []);

    const promesa = () => {
        console.log('inicia componente');
    }

    const contadorHandler = (e) => {
        if (e === 1) {
            setContador(contador + 1)
        } else if (e === -1 && contador > 0) {
            setContador(contador - 1)
        }
    };
    return (
        <>
            <div className='text-white'>ComponenteEstado</div>
            <span className='text-amber-200'> Total: {contador}</span>

            <div className='flex flex-row'>
                <button className='text-xl text-white block p-3'
                    onClick={() => { contadorHandler(1) }}>
                    <AiOutlinePlusCircle className='h-9 w-9' />
                </button>
                <button className='text-xl text-white block p-3'
                    onClick={() => { contadorHandler(-1) }}>
                    <AiOutlineMinusCircle className='h-9 w-9' />
                </button>
            </div>
        </>
    )
}

export default ComponenteEstado
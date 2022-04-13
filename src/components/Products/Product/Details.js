import React from 'react'

const Details = (props) => {
   const { data } = props;
   return (
      <div className='details-card'>
         <div className='details-description rounded bg-slate-500 text-white p-2'>
            <p>{data.description}</p>
         </div>
         <div className='details-props'>
            <p className='bg-red-200'>Base Exp: {data.baseExp}</p>
            <p className='bg-blue-300'>Height: {data.height}</p>
            <p className='bg-green-200'>Health Points: {data.hp}</p>
            <p className='bg-red-200'>Attack: {data.attack}</p>
            <p className='bg-blue-300'>Defense: {data.defense}</p>
            <p className='bg-green-200'>Special Attack: {data.specialAttack}</p>
            <p className='bg-red-200'>Special Defense: {data.specialDefense}</p>
            <p className='bg-blue-300'>Speed: {data.speed}</p>
            <p className='bg-green-200'>Weight: {data.weight}</p>
         </div>
      </div>
   )
}

export default Details
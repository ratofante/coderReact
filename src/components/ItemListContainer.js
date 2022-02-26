import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className='text-3xl text-white mt-8 text-center'>
                {props.saludos}
            </h2>
            <hr></hr>
            <ItemList></ItemList>
        </div>

    )
}

export default ItemListContainer
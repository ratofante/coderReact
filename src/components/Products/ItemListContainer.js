import React from 'react'
import { Outlet } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
        <>
            <Outlet />
            <div className='flex relative'>
                <ItemList />
            </div>
        </>

    )
}

export default ItemListContainer
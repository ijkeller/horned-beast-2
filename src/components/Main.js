import React from 'react';
import HornedBeast from './HornedBeast'

function Main() {


    return (
        <div className='main'>
            <HornedBeast
                title='Horned Beast 1'
                imageUrl='https://via.placeholder.com/300x150'
                description='cute horned beast' />
            <HornedBeast
                title='Horned Beast 2'
                imageUrl='https://via.placeholder.com/450x200'
                description='cute horned beast' />
            <HornedBeast
                title='Horned Beast 3'
                imageUrl='https://via.placeholder.com/325'
                description='cute horned beast' />
        </div>
    )
}

export default Main;
import React from 'react';
import HornedBeast from './HornedBeast';
import BeastsArray from '../data.json';

function Main() {

    return (
        <div className='main'>
            {
                BeastsArray.map(beast => {
                    return <HornedBeast
                        key={beast._id}
                        title={beast.title}
                        image={beast.image_url}
                        description={beast.description}
                    />
                })
            }
        </div>
    )
}

export default Main;
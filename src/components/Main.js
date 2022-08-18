import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'


class Main extends React.Component {

    
    // {
    //     "_id": 1,
    //     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    //     "title": "UniWhal",
    //     "description": "A unicorn and a narwhal nuzzling their horns",
    //     "keyword": "narwhal",
    //     "horns": 1
    //   }


    render() {
        return (
            <div className='main'>
                {
                    this.props.BeastsArray.map(beast => {
                        return <HornedBeast
                            key={beast._id}
                            beast={beast}
                            handleOpen={() => this.props.handleOpen(beast)}
                        />
                    })
                }
            </div>
        )
    }
}

export default Main;
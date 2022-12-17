import React from 'react';
import '../location/Location.css';
// import  from '../../assets/photos/';

const Brands = () => {
    return (
        <div className='location'>
            <div className="container_big_right">
                <div className="location_div">
                    <div className="location_div_left">
                        <h2 className="location_div_left_1">Где мы?</h2>
                        <br />
                        <p className="location_div_left_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <br />
                        <p className="location_div_left_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <br />
                        <p className="location_div_left_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <br />
                    </div>

                    <div className="location_div_right">
                        <iframe src="https://goo.gl/maps/4a1J34J1ffPSaSRH6" className='location_div_right_map' frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
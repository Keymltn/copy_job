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
                        <iframe className='location_div_right_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11033746.619350502!2d56.343583436253425!3d47.533033156461435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91007ecfca947%3A0x5f7b842fe4b30e1b!2z0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2s!4v1671285372542!5m2!1sru!2s" style={{border: "none"}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
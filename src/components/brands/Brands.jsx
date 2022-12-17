import React from 'react';
import '../brands/Brands.css';
import volvo from '../../assets/photos/Ресурс1.svg';
import scaniya from '../../assets/photos/Ресурс2.svg';
import daf from '../../assets/photos/Ресурс3.svg';
import man from '../../assets/photos/Ресурс4.svg';
import renault from '../../assets/photos/RenaultVectorLogo.svg';

const Brands = () => {
    return (
        <div className='brands'>
            <div className="container_big">
                <div className="brands_div">
                    <div className="brands_div_left">
                        <h2 className="brands_div_left_1">У вас вопрос кто мы а кто мы блин</h2>
                        <br />
                        <p className="brands_div_left_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <br />
                        <p className="brands_div_left_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <br />
                        <p className="brands_div_left_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <br />
                    </div>

                    <div className="brands_div_right">
                        <div className="brands_div_right_unmobile">
                            <div className="brands_div_right_top"><img className='brands_div_right_img' src={scaniya} alt="" /><img className='brands_div_right_img' src={volvo} alt="" /></div>
                            <div className="brands_div_right_center"><img className='brands_div_right_img' src={man} alt="" /></div>
                            <div className="brands_div_right_bottom"><img className='brands_div_right_img' src={daf} alt="" /><img className='brands_div_right_img' src={renault} alt="" /></div>
                        </div>
                        <div className="brands_div_right_mobile">
                            <img className='brands_div_right_img' src={scaniya} alt="" />
                            <img className='brands_div_right_img' src={volvo} alt="" />
                            <img className='brands_div_right_img' src={man} alt="" />
                            <img className='brands_div_right_img' src={daf} alt="" />
                            <img className='brands_div_right_img' src={renault} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
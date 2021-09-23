import React from 'react';
import image from './images/image.jpg';
import './Main.css'

const Main = () => {
    return (
        <div className="row m-5">
            <div className="col col-lg-7 col-md-12 col-sm-12 mb-5 d-flex justify-content-center">
                <img className="" src={image} alt="" />
                <img className="img2 " src={image} alt="" />
                <img className="img3" src={image} alt="" />

            </div>
            <div className="col col-lg-5 col-md-12 col-sm-12 mb-5 about-us">
                <div>
                    <h1 className="mb-5 pb-5 mt-5 pt-5">About US</h1>
                    <h5 className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quae, maiores distinctio quos odio accusantium magni amet aspernatur reiciendis laborum numquam delectus iusto reprehenderit. Quidem autem quo earum ex aperiam?</h5>
                </div>
            </div>

        </div>
    );
};

export default Main;
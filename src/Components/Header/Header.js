import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="bg-img">
            
            <div>
            <div className="overlay">
            </div>
                <ul className="d-flex justify-content-end text-none menu">
                    <li><a href="./">Home</a></li>
                    <li><a href="./">About</a></li>
                    <li><a href="./">Service & Package</a></li>
                    <li><a href="./">Gallery</a></li>
                    <li><a href="./">Package</a></li>
                    <li><a href="./">FAQ</a></li>
                    <li><a href="./">Contact</a></li>
                </ul>
            </div>
            <div className="carousel">
                <Carousel className="d-flex align-items-center">
                    <Carousel.Item >
                        <div className="m-5 p-5">
                            <div className="m-5 p-5">
                                <h1 className="text-start text-white">A picture is worth a thousand words.</h1>
                                <p className="text-start text-white">It clearly snd beautifully captures your emontions - the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                                <button className="d-flex px-5 py-2 border-0 rounded-pill">View gellery</button>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="m-5 p-5">
                            <div className="m-5 p-5">
                                <h1 className="text-start text-white">A picture is worth a thousand words.</h1>
                                <p className="text-start text-white">It clearly snd beautifully captures your emontions - the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                                <button className="d-flex px-5 py-2 border-0 rounded-pill">View gellery</button>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="m-5 p-5">
                            <div className="m-5 p-5">
                                <h1 className="text-start text-white">A picture is worth a thousand words.</h1>
                                <p className="text-start text-white">It clearly snd beautifully captures your emontions - the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                                <button className="d-flex px-5 py-2 border-0 rounded-pill">View gellery</button>
                            </div>
                        </div>

                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
};

export default Header;
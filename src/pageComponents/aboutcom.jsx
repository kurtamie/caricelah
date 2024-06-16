import React from "react";
import line from '../asset/line.svg';
import ell from '../asset/ell.svg';

const Aboutcom = () => {
    return (
        <div>
                <div className="absolute left-8 top-0 bottom-0 flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4" draggable="false">
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                </div>
                <div className="absolute right-8 top-0 bottom-0 flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4" draggable="false">
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                    <img src={line} alt="" className="w-8 h-8 md:w-72 md:h-80" draggable="false"/>
                </div>
                <div className="absolute right-8 top-1/4 flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4">
                    <img data-aos="fade-up" src={ell} alt="" className="w-8 h-8 md:w-12 md:h-12" />
                    <img data-aos="fade-up" src={ell} alt="" className="w-8 h-8 md:w-12 md:h-12" />
                    <img data-aos="fade-up" src={ell} alt="" className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                </div>
    );
}

export default Aboutcom;
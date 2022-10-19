import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" bg-gray-200 lg:px-[10%] md:px-14">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
                <div className="imgtxt-text  w-[calc( 50% - 10px)] lg:mt-10 lg:p-10 ">
                    <div className="imgtxt-headline width6 regular-heading lg:p-0 p-5">
                        <p className="text-2xl  text-[#0A40CE]">
                            <span className="text-[#0A40CE] uppercase font-normal" >Operations managers</span>
                        </p>
                        <h1 className='text-2xl  md:text-4xl md:my-7  text-[#001b5a] mt-3  font-bold'>
                        Give Wings to <br /> Your Career By Learning Today's Most-Demanded Skills    
                        </h1>

                        <Link to='/quiz' className="mt-3 lg:mt-5 btn w-full text-xl p-3 h-16 ">
                        I'm ready now
                            <span className='ml-5 rounded-full  caret-lime-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 bg-[#191d24] h-10  ">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                                </svg>

                            </span>
                        </Link>
                    </div>
                </div>
                <div className="mt-10 p-10 text-center w-[calc( 50% - 10px)]">
                    <img className='w-full' src={'https://www.backgroundchecks.com/hubfs/images/persona/operations/hero-banner.svg'} alt="hero-banner" width="481" />
                </div>
            </div>
        </div>
    );
};

export default Header;
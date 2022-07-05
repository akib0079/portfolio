import React from 'react';
import './page404.css';
import image404 from '../../images/404l.gif'

const Page404 = () => {
    return (
        <section className='Page404'>
            <div className="container mx-auto">
                <div className="pageInfo flex flex-col items-center">
                    <img src={image404} alt="" />
                    <h2 className='text-4xl mono '>404 Nothing Here...</h2>
                </div>
            </div>
        </section>
    );
};

export default Page404;
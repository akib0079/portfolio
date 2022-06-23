import React from 'react';
import helloImage from '../../images/goodbye.png'

const Contact = () => {
    return (
        <section className='contactSec' id='contact'>
            <div className="container mx-auto">
                <div className="ContactSecHeader mb-16" data-aos="fade-up">
                    <i class='bx bxs-envelope globalIcn mb-4' ></i>
                    <h1 className="mb-4">Have a project or question in mind?
                        <i class='bx bx-planet codeIcn' ></i>
                    </h1>
                </div>
                <div className="contactInner flex flex-col md:flex-row gap-0 lg:gap-12 items-center" data-aos="fade-up">
                    <div className="contactInfo w-full md:w-5/12 shadow-xl mb-10 md:mb-0">
                        <h1 className="mb-4">Contact info.
                            <i class='bx bx-paper-plane codeIcn' ></i>
                        </h1>
                        <p className='mb-5'>Regarding custom proposal,Please feel free to contact me. Thanks For Visiting, Hoping that you will have a Great Day.</p>
                        <div className="icnBox flex items-center">
                            <i class='bx bx-phone-call contactIcn shadow-xl' ></i>
                            <div className="icnInfo">
                                <p>Call me now</p>
                                <h3><a href="tel:01904187508">+(880)1904187508</a></h3>
                            </div>
                        </div>

                        <div className="icnBox flex items-center ">
                            <i class='bx bx-mail-send contactIcn shadow-xl' ></i>
                            <div className="icnInfo">
                                <p>Chat with me</p>
                                <h3><a href="mailto:akibzawayed0079@gmail.com">akibzawayed0079@gmail.com</a></h3>
                            </div>
                        </div>
                        <div className="icnBox flex items-center ">
                            <i class='bx bxl-whatsapp contactIcn shadow-xl' ></i>
                            <div className="icnInfo">
                                <p>Whatsapp</p>
                                <h3><a target={'blank'} href="https://wa.link/qnz6kb">01904187508-Send a message</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm w-full md:w-7/12 p-0 md:pl-12">
                        <h3 className='text-3xl mt-2'>Just Say
                            &#128075;
                            Hi.
                        </h3>
                        <p className='mb-10'>Hoping that you will have a Great Day. Waiting for your message.</p>
                        <form action="">
                            <div className="flex gap-4">
                                <input type="text" placeholder="Full Name" class="input input-bordered w-1/2" />
                                <input type="text" placeholder="Email Address" class="input input-bordered w-1/2" />
                            </div>
                            <input type="text" placeholder="Subject" class="input input-bordered w-full mt-4" />
                            <div className="flex gap-4 mt-4">
                                <select class="select select-bordered w-1/2">
                                    <option disabled selected>Price Plans</option>
                                    <option>Basic $100-$500</option>
                                    <option>Standard $500-$1000</option>
                                    <option>Premium $1000+</option>
                                </select>
                                <input type="date" class="input input-bordered w-1/2" />
                            </div>
                            <textarea rows={4} class="textarea textarea-bordered mt-4 w-full" placeholder="Write a message"></textarea>

                            <button type='submit' className='submitBtn mt-4'>Submit <i class='bx bxs-paper-plane ml-1'></i></button>
                        </form>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Contact;
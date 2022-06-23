import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mdb7ata', 'template_c1hglaw', form.current, '5YdCu8I45lC1wNNEv')
            .then((result) => {
                console.log(result.text);
                toast.success("Your Email Was Sent!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <section className='contactSec' id='contact'>
            <div className="container mx-auto">
                <div className="ContactSecHeader mb-16" data-aos="fade-up">
                    <i className='bx bxs-envelope globalIcn mb-4' ></i>
                    <h1 className="mb-4">Have a project or question in mind?
                        <i className='bx bx-planet codeIcn' ></i>
                    </h1>
                </div>
                <div className="contactInner flex flex-col md:flex-row gap-0 lg:gap-12 items-center" data-aos="fade-up">
                    <div className="contactInfo w-full md:w-5/12 shadow-xl mb-10 md:mb-0">
                        <h1 className="mb-4">Contact info.
                            <i className='bx bx-paper-plane codeIcn' ></i>
                        </h1>
                        <p className='mb-5'>Regarding custom proposal,Please feel free to contact me. Thanks For Visiting, Hoping that you will have a Great Day.</p>
                        <div className="icnBox flex items-center">
                            <i className='bx bx-phone-call contactIcn shadow-xl' ></i>
                            <div className="icnInfo">
                                <p>Call me now</p>
                                <h3><a href="tel:01904187508">+(880)1904187508</a></h3>
                            </div>
                        </div>

                        <div className="icnBox flex items-center ">
                            <i className='bx bx-mail-send contactIcn shadow-xl' ></i>
                            <div className="icnInfo">
                                <p>Chat with me</p>
                                <h3><a className='email' href="mailto:akibzawayed0079@gmail.com">akibzawayed0079@gmail.com</a></h3>
                            </div>
                        </div>
                        <div className="icnBox flex items-center ">
                            <i className='bx bxl-whatsapp contactIcn shadow-xl' ></i>
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

                        {/* Contact form */}

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex gap-4">
                                <input type="text" required name='name' placeholder="Full Name" className="input input-bordered w-1/2" />
                                <input type="text" required name='s_email' placeholder="Email Address" className="input input-bordered w-1/2" />
                            </div>
                            <input name='subject' required type="text" placeholder="Subject" className="input input-bordered w-full mt-4" />
                            <div className="flex gap-4 mt-4">
                                <select name='plan' required className="select select-bordered w-1/2">
                                    <option disabled selected>Price Plans</option>
                                    <option>Basic $100-$500</option>
                                    <option>Standard $500-$1000</option>
                                    <option>Premium $1000+</option>
                                </select>
                                <input name='date' required type="date" className="input input-bordered w-1/2" />
                            </div>
                            <textarea rows={4} required name='message' className="textarea textarea-bordered mt-4 w-full" placeholder="Write a message"></textarea>

                            <button type='submit' className='submitBtn mt-4'>Submit <i className='bx bxs-paper-plane ml-1'></i></button>
                        </form>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Contact;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'Home',
        path: '/home',
    },
    {
        name: 'About us',
        path: '/about',
    },
    {
        name: `FAQ's`,
        path: '/faq',
    },
    {
        name: 'Contact us',
        path: '/contact',
    },
];

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log('Email submitted:', email);
            setEmail('');
        }
    };

    return (
        <div className="bg-green-700 text-white mt-20 pt-40 pb-12">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
                        {/* Logo and Description */}
                        <div className="lg:col-span-4">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    <span className="text-yellow-400">L</span>OGO
                                </h2>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus eius magnam! Fugiat illo impedit distinctio soluta, dolorum rerum asperiores totam dolore libero sapiente? Eum possimus doloremque ea excepturi. Similique?
                                </p>
                            </div>
                            <div>
                                <Link to="" className="text-white">
                                    <div>
                                        <i></i>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Important Links */}
                        <div className="col-span-1 lg:col-span-2">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Important Links</h3>
                                {links.map((item, index) => (
                                    <Link 
                                        to={item.path} 
                                        key={index} 
                                        className="text-white no-underline"
                                    >
                                        <div className="my-4">
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="col-span-1 lg:col-span-2">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                                {links.map((item, index) => (
                                    <Link 
                                        to={item.path} 
                                        key={index}
                                        className="text-white no-underline"
                                    >
                                        <div className="my-4">
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Get in Touch */}
                        <div className="col-span-1 lg:col-span-4">
                            <div>
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                                    <p>We don't send spam so don't worry</p>
                                </div>
                                <form 
                                    onSubmit={handleSubmit}
                                    className="flex gap-0.5"
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        required
                                        className="w-full px-4 py-2 bg-white text-gray-900 rounded-l focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="px-12 py-2 bg-yellow-400 text-gray-900 rounded-r hover:bg-yellow-500 focus:outline-none"
                                    >
                                        Send
                                    </button>
                                </form>
                                <div className="mt-8">
                                    <p>Phone: +8801569179743</p>
                                    <p>Email: mail@lelinchakma.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-20 text-center">
                        <p>Copyright 2024. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
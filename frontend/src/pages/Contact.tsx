import React from 'react';
import Image from '../assets/Background/Bredicombs.png';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Collapse from '../components/contact/Collapse';

const Contact = () => {
    return (
        <div>
            <div 
                className="min-h-[15vh] bg-center bg-repeat"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="container mx-auto px-4 max-w-screen-xl">
                    <Breadcrumbs page="Contact" />
                </div>
            </div>

            <Collapse />
        </div>
    );
};

export default Contact;
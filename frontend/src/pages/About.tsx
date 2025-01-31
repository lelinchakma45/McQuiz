import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Image from '../assets/Background/Bredicombs.png';
import Main from '../components/about/Main';
import Rules from '../components/about/Rules';
import Count from '../components/about/Count';
import Testimonial from '../components/about/Testimonial';

const About = () => {
    return (
        <div>
            <div 
                className="min-h-[15vh] bg-center bg-repeat"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="container mx-auto px-4 max-w-screen-xl">
                    <Breadcrumbs page="About" />
                </div>
            </div>

            <Main />
            <Rules />
            <Count />
            <Testimonial />
        </div>
    );
};

export default About;
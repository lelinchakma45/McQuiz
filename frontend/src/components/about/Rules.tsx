import React from 'react';
import { Link } from "react-router-dom";
import Image from '../../assets/cover/students.jpg';

const data = [
    {
        title: 'Track your progress and earn badges for completing quizzes and achieving high scores'
    },
    {
        title: 'Track your progress and earn badges for completing quizzes and achieving high scores'
    },
    {
        title: 'See your leaderboard ranking and complete with other students'
    },
    {
        title: 'Learn at your own pace and review your result for improvement.'
    }
];

const Rules = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="font-bold text-3xl mb-4">This Platform for Everyone</h2>
                    <p className="mb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et excepturi corrupti sapiente doloribus nihil blanditiis voluptate expedita minima veniam vitae porro, molestias unde, sed praesentium mollitia dolor. Impedit, sint alias!
                    </p>
                    <div className="flex justify-center gap-10 mt-12">
                        <Link to="" className="text-gray-800 hover:text-blue-600">
                            <div>
                                <p>I am Student</p>
                            </div>
                        </Link>
                        <Link to="" className="text-gray-800 hover:text-blue-600">
                            <div>
                                <p>I am Teacher</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* First Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                    <div className="flex items-center justify-center">
                        <img
                            src={Image}
                            alt="Student"
                            className="w-[50vh] h-[50vh] my-20 rounded-full object-cover"
                        />
                    </div>
                    <div className="flex items-center">
                        <div>
                            {data.map((item, index) => (
                                <div key={index} className="py-12">
                                    <p className="text-lg font-medium">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Vision */}
                    <div className="flex items-center">
                        <div>
                            <p className="font-semibold text-lg text-blue-600">Our Vision</p>
                            <h3 className="font-bold text-2xl md:text-4xl text-blue-600">
                                Where Engagement and Empowerment Meet
                            </h3>
                            <p className="mt-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium reiciendis ipsa recusandae voluptatem eius, tempora adipisci.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={Image}
                            alt="Student"
                            className="w-[40vh] h-[60vh] my-20 rounded-full object-cover"
                        />
                    </div>

                    {/* Mission */}
                    <div className="flex items-center">
                        <div>
                            <p className="font-semibold text-lg text-blue-600">Our Mission</p>
                            <h3 className="font-bold text-2xl md:text-4xl text-blue-600">
                                Engaging Quizzes for Everyone
                            </h3>
                            <p className="mt-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium reiciendis ipsa recusandae voluptatem eius, tempora adipisci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
import React from 'react';
import Image from '../../assets/cover/students.jpg';

const Count = () => {
    return (
        <div className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-8">
                        <div>
                            <h2 className="font-semibold text-2xl md:text-4xl">
                                Our Success in Numbers
                            </h2>
                            <p className="text-lg">
                                At Quizzess, we're proud of our successs in empowering teachers and students to create and share engaging quizzes on any topic. Here are just a few of our numbers:
                            </p>
                            <div className="mt-20">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="mb-8">
                                        <div>
                                            <p className="font-semibold text-4xl text-yellow-400">
                                                +30K
                                            </p>
                                            <p>Teachers, Exams and Quizzes</p>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <div>
                                            <p className="font-semibold text-4xl text-red-500">
                                                +15.43K
                                            </p>
                                            <p>Student use McQuiz</p>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <div>
                                            <p className="font-semibold text-4xl text-white">
                                                +8.4K
                                            </p>
                                            <p>Quizzes Created</p>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <div>
                                            <p className="font-semibold text-4xl text-yellow-400">
                                                +5K
                                            </p>
                                            <p>Exams Created</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <div className="flex justify-center items-center">
                            <img
                                src={Image}
                                alt="Students"
                                className="w-[40vh] h-[40vh] my-20 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;
import React from 'react';
import Student from '../../assets/cover/students.jpg';
import Light from '../../assets/Components/light.png';
import Emc2 from '../../assets/Components/emc2.png';
import Clock from '../../assets/Components/clock.png';
import Cell from '../../assets/Components/cell.png';
import Compass from '../../assets/Components/compas.png';
import Arrow from '../../assets/Components/arrowdraw.png';
import Ber from '../../assets/Components/barchart.png';
import Graph from '../../assets/Components/graph.png';
import Global from '../../assets/Components/global.png';

const Main = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Left Content */}
                    <div className="flex items-center">
                        <div>
                            <h1 className="font-bold text-5xl text-blue-600 mb-8">
                                McQuiz: Your Giveway to Learning Through Quizzes
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, possimus consequuntur reprehenderit aut rerum quae soluta voluptas ut aperiam commodi debitis totam expedita obcaecati distinctio. Modi asperiores iure debitis eos.
                            </p>
                        </div>
                    </div>

                    {/* Right Content with Images */}
                    <div className="relative">
                        <div className="flex justify-center items-center">
                            {/* Main Student Image */}
                            <img
                                src={Student}
                                alt="About Student Cover"
                                className="w-[60vh] h-[50vh] rounded-[100px_100px_100px_0] z-10"
                            />

                            {/* Floating Elements */}
                            <img
                                src={Light}
                                alt=""
                                className="absolute h-8 right-0"
                            />
                            <img
                                src={Global}
                                alt=""
                                className="absolute h-12 top-[20%] right-16"
                            />
                            <img
                                src={Ber}
                                alt=""
                                className="absolute h-8 right-20 top-[60%]"
                            />
                            <img
                                src={Arrow}
                                alt=""
                                className="absolute h-10 left-24 bottom-[50%]"
                            />
                            <img
                                src={Graph}
                                alt=""
                                className="absolute h-12 right-24 bottom-0"
                            />
                            <img
                                src={Clock}
                                alt=""
                                className="absolute h-16 top-0 right-0"
                            />
                            <img
                                src={Compass}
                                alt=""
                                className="absolute h-16 left-6"
                            />
                            <img
                                src={Cell}
                                alt=""
                                className="absolute h-16 left-24 bottom-0"
                            />
                            <img
                                src={Emc2}
                                alt=""
                                className="absolute h-10 left-40 top-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
import { Link } from 'react-router-dom';
import Image2 from '../../assets/cover/hero-cover-1.png';

const HomeMain = () => {
    return (
        <div className="min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Content Section */}
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold text-green-600">
                                    Test Your Skills and knowledge with Expert Quizzes
                                </h1>
                                <p className="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam quidem corrupti maxime officiis minus voluptates debitis, repellat numquam eius odit fuga a necessitatibus et voluptatem. Odit nobis sint ut.
                                </p>
                            </div>
                            <div className="flex items-center gap-12 mt-20">
                                <Link to="" className="no-underline">
                                    <div className="py-4 px-8 border border-green-600 rounded-full bg-green-600">
                                        <p className="text-white font-medium">Sign up for Free</p>
                                    </div>
                                </Link>
                                <Link to="" className="no-underline">
                                    <div className="py-4 px-8">
                                        <p className="text-black font-medium">Are you a Teacher?</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            <div className="flex justify-center">
                                <img
                                    src={Image2}
                                    alt="Hero"
                                    className="max-h-[50vh] absolute bottom-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;
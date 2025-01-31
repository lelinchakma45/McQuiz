import { Link } from 'react-router-dom';
import Image from '../../assets/cover/students.jpg';

const Contacts = () => {
    return (
        <div className="pb-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="flex items-center justify-center">
                        <img
                            src={Image}
                            alt="Students"
                            className="w-[50vh] h-[50vh] my-20 rounded-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                                Discover the Story Behind Our Quizzes
                            </h2>
                            <p className="mt-8 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium reiciendis ipsa recusandae voluptatem eius, tempora adipisci.
                            </p>
                            <div className="flex items-center gap-12 mt-20">
                                <Link to="" className="no-underline">
                                    <div className="py-4 px-8 border border-blue-600 rounded-full bg-blue-600">
                                        <p className="text-white font-medium">Learn More</p>
                                    </div>
                                </Link>
                                <Link to="" className="no-underline">
                                    <div className="py-4 px-8 border border-blue-600 rounded-full">
                                        <p className="text-black font-medium">Read FAQ's</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
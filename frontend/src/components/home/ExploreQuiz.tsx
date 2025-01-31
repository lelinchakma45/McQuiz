import { Link } from 'react-router-dom';
import DNA from '../../assets/Thumbnail/bacteria.png';
import Math from '../../assets/Thumbnail/abacus.png';
import Chemistry from '../../assets/Thumbnail/lab-equipment.png';
import Physics from '../../assets/Thumbnail/atomic.png';
import Arrow from '../../assets/Components/arrow.png';

const data = [
    {
        id: 1,
        name: 'Biology',
        items: 45,
        image: DNA
    },
    {
        id: 2,
        name: 'Chemistry',
        items: 45,
        image: Chemistry
    },
    {
        id: 3,
        name: 'Mathematics',
        items: 45,
        image: Math
    },
    {
        id: 4,
        name: 'Physics',
        items: 45,
        image: Physics
    },
];

const ExploreQuiz = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    {/* Header Section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-green-600">
                            Explore <span className="text-yellow-400">3498+</span> Quizzes
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta ipsam perspiciatis eum repellendus ipsum rem.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {/* Left Side Text - Hidden on Mobile */}
                            <div className="hidden md:block md:col-span-2">
                                <div className="flex items-center h-full">
                                    <div>
                                        <h3 className="text-4xl font-medium leading-tight">
                                            <span className="bg-yellow-400">Explore</span>
                                            <br />
                                            Quizzes
                                        </h3>
                                        <img
                                            src={Arrow}
                                            alt="Arrow"
                                            className="w-4/5 rotate-180"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Quiz Grid */}
                            <div className="md:col-span-10">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {data.map((item, index) => (
                                        <Link to="" key={index} className="no-underline">
                                            <div className="border border-gray-200 rounded-lg p-12">
                                                <div className="flex justify-center w-full">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-24 object-cover"
                                                    />
                                                </div>
                                                <div className="text-center mt-12">
                                                    <h4 className="text-xl font-semibold text-gray-800">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        {item.items} Quizzes
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* See More Link */}
                        <div className="flex justify-center mt-12">
                            <Link to="" className="no-underline">
                                <div className="flex items-center gap-8 text-black">
                                    <span className="font-semibold">See More Quizzes</span>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreQuiz;
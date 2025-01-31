import Image from '../../assets/cover/students.jpg';

const Discover = () => {
    return (
        <div className="mt-10 pb-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Content Section */}
                    <div className="flex items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                                Discover the Story Behind Our Quizzes
                            </h2>
                            <p className="mt-8 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium reiciendis ipsa recusandae voluptatem eius, tempora adipisci.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex items-center justify-center">
                        <img
                            src={Image}
                            alt="Students"
                            className="w-[50vh] h-[50vh] my-20 rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
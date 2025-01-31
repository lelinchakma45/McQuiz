import { Link } from 'react-router-dom';
import DNA from '../../assets/Thumbnail/bacteria.png';
import Math from '../../assets/Thumbnail/abacus.png';
import Chemistry from '../../assets/Thumbnail/lab-equipment.png';
import Physics from '../../assets/Thumbnail/atomic.png';

const services = [
    {
        title: 'Design',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: DNA,
        iconBgColor: '#EDE7F6',
        color: '#673AB7',
        item:23
    },
    {
        title: 'Development',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Chemistry,
        iconBgColor: '#FFF3E0',
        color: '#FF9800',
        item:23
    },
    {
        title: 'IT & Software',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Physics,
        iconBgColor: '#E1F5FE',
        color: '#03A9F4',
        item:23
    },
    {
        title: 'Business',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Math,
        iconBgColor: '#E8F5E9',
        color: '#4CAF50',
        item:23
    },
    {
        title: 'Marketing',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Chemistry,
        iconBgColor: '#E8F5E9',
        color: '#4CAF50',
        item:23
    },
    {
        title: 'Photography',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: DNA,
        iconBgColor: '#E1F5FE',
        color: '#03A9F4',
        item:23
    },
    {
        title: 'Health & Care',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Math,
        iconBgColor: '#FFF3E0',
        color: '#FF9800',
        item:23
    },
    {
        title: 'Technology',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Physics,
        iconBgColor: '#EDE7F6',
        color: '#673AB7',
        item:23
    },
];
const PopularCategory = () => {
    return (
        <div className="mt-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    {/* Header Section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">
                            <span className="text-blue-600">Most</span>{' '}
                            <span className="text-yellow-400">Popular</span>{' '}
                            <span className="text-blue-600">Categories</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta ipsam perspiciatis eum repellendus ipsum rem.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {services.map((item, index) => (
                                <Link to="" key={index} className="no-underline">
                                    <div 
                                        className="p-12 rounded-lg"
                                        style={{ 
                                            borderWidth: '1px',
                                            borderColor: item.color
                                        }}
                                    >
                                        <div className="flex justify-center w-full">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-24 object-cover"
                                            />
                                        </div>
                                        <div className="text-center mt-12">
                                            <h3 
                                                className="text-xl font-semibold"
                                                style={{ color: item.color }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p 
                                                className="mt-2"
                                                style={{ color: item.color }}
                                            >
                                                {item.item} Questions
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* See More Link */}
                        <div className="flex justify-center mt-12">
                            <Link to="" className="no-underline">
                                <div className="flex items-center gap-6 text-black">
                                    <span className="font-semibold">See More Categories</span>
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

export default PopularCategory;
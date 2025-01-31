import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
    <div>
        <div className="flex justify-center">
            <div className="w-16 h-16 flex justify-center items-center border border-blue-600 rounded-full bg-blue-50">
                <i className={`bi ${icon} text-2xl text-blue-600`}></i>
            </div>
        </div>
        <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-blue-600">
                {title}
            </h3>
            <p className="mt-4 text-gray-600 text-justify">
                {description}
            </p>
        </div>
    </div>
);

const WhyMcQuiz = () => {
    const features = [
        {
            icon: 'bi-heart-fill',
            title: 'We CARE about you !',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia dolorem corporis nostrum ullam obcaecati quaerat maxime. Explicabo, necessitatibus facere. Quibusdam nulla omnis quasi sint sequi impedit odio odit praesentium.'
        },
        {
            icon: 'bi-heart-fill',
            title: 'We CARE about you !',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia dolorem corporis nostrum ullam obcaecati quaerat maxime. Explicabo, necessitatibus facere. Quibusdam nulla omnis quasi sint sequi impedit odio odit praesentium.'
        },
        {
            icon: 'bi-heart-fill',
            title: 'We CARE about you !',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia dolorem corporis nostrum ullam obcaecati quaerat maxime. Explicabo, necessitatibus facere. Quibusdam nulla omnis quasi sint sequi impedit odio odit praesentium.'
        }
    ];

    return (
        <div className="mt-10 pb-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold">
                            Why McQuiz?
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, velit veniam voluptas omnis nemo soluta.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMcQuiz;
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-8 text-left focus:outline-none"
            >
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className="transform transition-transform duration-200">
                    <i className={`bi bi-plus text-2xl ${isOpen ? 'rotate-45' : ''}`}></i>
                </span>
            </button>
            <div
                className={`transition-all duration-200 overflow-hidden ${
                    isOpen ? 'max-h-40 pb-12' : 'max-h-0'
                }`}
            >
                <p className="text-gray-600">{content}</p>
            </div>
        </div>
    );
};

const Collapse = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            title: "What is Quizify?",
            content: "Quizify is a powerful online quiz creation and management platform designed for educators and trainers."
        },
        {
            title: "What are the benefits of using Quizify?",
            content: "Quizify offers easy quiz creation, real-time tracking, detailed analytics, and seamless sharing capabilities."
        },
        {
            title: "How do I create a Quizify account?",
            content: "Simply click the 'Sign Up' button and follow the registration process using your email or Google account."
        },
        {
            title: "How do I create a quiz?",
            content: "Click the 'Create Quiz' button, add your questions, set answers, and customize settings as needed."
        },
        {
            title: "How do I share a quiz?",
            content: "Use the 'Share' button to get a unique link or code that you can send to your students."
        },
        {
            title: "How do I track my students's quiz results?",
            content: "Access the 'Results' dashboard to view detailed performance analytics and individual student progress."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto max-w-4xl py-24 px-4">
            {/* Header Section */}
            <div className="flex items-center gap-8 mb-24">
                <i className="bi bi-question-circle text-5xl text-blue-600"></i>
                <h1 className="text-4xl font-bold">
                    How Can We Help You?
                </h1>
            </div>

            {/* FAQ Items */}
            <div>
                {faqItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Collapse;
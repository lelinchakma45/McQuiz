import React, { useEffect, useRef, useState } from 'react';

const stats = [
    {
        count: '1,300',
        text: 'Teachers Trust Our Quizzes'
    },
    {
        count: '5,800',
        text: 'Student use our quizzes'
    },
    {
        count: '21',
        text: 'Use Our Quizzes to Assess Grades'
    }
];

const TextSlider = () => {
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        if (!container || !content) return;

        const totalWidth = content.offsetWidth / 3; // Divide by 3 since we're showing 3 copies

        const animate = () => {
            setTranslateX(prev => {
                const newPosition = prev - 1;
                // Reset when one full set has scrolled
                return newPosition <= -totalWidth ? 0 : newPosition;
            });
        };

        const animationInterval = setInterval(animate, 20);

        return () => clearInterval(animationInterval);
    }, []);

    const StatItem = ({ count, text }) => (
        <div className="flex items-center gap-4">
            <span className="text-4xl font-bold leading-none">
                +{count}
            </span>
            <span className="text-lg font-medium">
                {text}
            </span>
        </div>
    );

    return (
        <div className="h-[20vh] flex items-center bg-red-500">
            <div className="w-full h-[10vh] bg-green-600 text-white overflow-hidden flex items-center">
                <div className="relative flex items-center" ref={containerRef}>
                    <div 
                        className="absolute left-0 flex items-center whitespace-nowrap"
                        ref={contentRef}
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {/* First Set */}
                        <div className="flex">
                            {stats.map((stat, index) => (
                                <div key={`set1-${index}`} className="mr-20">
                                    <StatItem count={stat.count} text={stat.text} />
                                </div>
                            ))}
                        </div>

                        {/* Second Set */}
                        <div className="flex">
                            {stats.map((stat, index) => (
                                <div key={`set2-${index}`} className="mr-20">
                                    <StatItem count={stat.count} text={stat.text} />
                                </div>
                            ))}
                        </div>

                        {/* Third Set */}
                        <div className="flex">
                            {stats.map((stat, index) => (
                                <div key={`set3-${index}`} className="mr-20">
                                    <StatItem count={stat.count} text={stat.text} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextSlider;
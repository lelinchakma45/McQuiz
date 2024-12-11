import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TickerContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    overflow: 'hidden',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
}));

const TickerContent = styled(Box)({
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
});

const ScrollingContent = styled(Box)({
    whiteSpace: 'nowrap',
    position: 'absolute',
    left: 0,
    display: 'flex',
    alignItems: 'center'
});

const NewsItem = styled(Box)({
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center'
});

const TextSlider = () => {
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

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

    // Format stats items with large numbers
    const formattedStats = stats.map(stat => ({
        content: (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                    component="span"
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        lineHeight: 1
                    }}
                >
                    +{stat.count}
                </Typography>
                <Typography
                    component="span"
                    sx={{
                        fontSize: '1.125rem',
                        fontWeight: 500
                    }}
                >
                    {stat.text}
                </Typography>
            </Box>
        )
    }));

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

    return (
        <Box
        height={'20vh'}
        display={'flex'}
        alignItems={'center'}
        sx={{
            background:'red'
        }}
        >
            <TickerContainer>
                <TickerContent ref={containerRef}>
                    <ScrollingContent
                        ref={contentRef}
                        sx={{
                            transform: `translateX(${translateX}px)`
                        }}
                    >
                        {/* Show three copies of the content to ensure no gaps */}
                        <Box sx={{ display: 'flex' }}>
                            {formattedStats.map((item, index) => (
                                <NewsItem key={`set1-${index}`}>
                                    {item.content}
                                </NewsItem>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            {formattedStats.map((item, index) => (
                                <NewsItem key={`set2-${index}`}>
                                    {item.content}
                                </NewsItem>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            {formattedStats.map((item, index) => (
                                <NewsItem key={`set3-${index}`}>
                                    {item.content}
                                </NewsItem>
                            ))}
                        </Box>
                    </ScrollingContent>
                </TickerContent>
            </TickerContainer>
        </Box>
    );
};

export default TextSlider;
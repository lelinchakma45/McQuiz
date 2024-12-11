import { Box } from '@mui/material'
import React from 'react'
import HomeMain from '../components/home/Main'
import TextSlider from '../components/home/TextSlider'
import ExploreQuiz from '../components/home/ExploreQuiz'
import PopularCategory from '../components/home/PopularCategory'

const Home = () => {
    return (
        <Box>
            <HomeMain />
            <TextSlider />
            <ExploreQuiz />
            <PopularCategory />
        </Box>
    )
}

export default Home
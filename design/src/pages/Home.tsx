import { Box } from '@mui/material'
import React from 'react'
import HomeMain from '../components/home/Main'
import TextSlider from '../components/home/TextSlider'
import ExploreQuiz from '../components/home/ExploreQuiz'
import PopularCategory from '../components/home/PopularCategory'
import BestTeacher from '../components/home/BestTeacher'
import WhymcQuiz from '../components/home/WhymcQuiz'
import Discover from '../components/home/Discover'
import Contacts from '../components/home/Contacts'

const Home = () => {
    return (
        <Box>
            <HomeMain />
            <TextSlider />
            <ExploreQuiz />
            <PopularCategory />
            <BestTeacher />
            <WhymcQuiz />
            <Discover />
            <Contacts />
        </Box>
    )
}

export default Home
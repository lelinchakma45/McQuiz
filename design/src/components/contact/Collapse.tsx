import React from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    styled
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// Custom styled components
const StyledAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
    '& .MuiAccordionSummary-root': {
        padding: theme.spacing(2, 0),
    },
    '& .MuiAccordionSummary-content': {
        margin: 0,
    },
    '& .MuiAccordionDetails-root': {
        padding: theme.spacing(1, 0, 3, 0),
    },
}));

const Collapse = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6 }}>
                <HelpOutlineIcon
                    sx={{
                        fontSize: 48,
                        color: 'primary.main'
                    }}
                />
                <Typography variant="h3" component="h1" fontWeight="bold">
                    How Can We Help You?
                </Typography>
            </Box>

            {/* FAQ Items */}
            <Box sx={{ maxWidth: 'lg' }}>
                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">What is Quizify?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">
                            Quizify is a powerful online quiz creation and management platform designed for educators and trainers.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">What are the benefits of using Quizify?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">
                            Quizify offers easy quiz creation, real-time tracking, detailed analytics, and seamless sharing capabilities.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography variant="h6">How do I create a Quizify account?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">
                            Simply click the "Sign Up" button and follow the registration process using your email or Google account.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography variant="h6">How do I create a quiz?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">
                            Click the "Create Quiz" button, add your questions, set answers, and customize settings as needed.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography variant="h6">How do I share a quiz?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">
                            Use the "Share" button to get a unique link or code that you can send to your students.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                        <Typography variant="h6">How do I track my students's quiz results?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">
                            Access the "Results" dashboard to view detailed performance analytics and individual student progress.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>
            </Box>
        </Container>
    );

}

export default Collapse;
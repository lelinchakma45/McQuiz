import { Box, Button, Card, Grid, IconButton, List, ListItem, ListItemText, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const StudentDashboard = () => {
    const weeklyData = [
        { week: 'Week 1', value: 15 },
        { week: 'Week 2', value: 20 },
        { week: 'Week 3', value: 8 },
        { week: 'Week 4', value: 15 }
    ];
    const data = [
        { name: "Programming", value: 35, color: '#FFD700' },  // Yellow
        { name: "Web Design", value: 25, color: '#9370DB' },   // Purple
        { name: "Algorithms", value: 20, color: '#0000FF' },   // Blue
        { name: "Networks", value: 15, color: '#FF0000' },     // Red
        { name: "Physics", value: 5, color: '#008000' }        // Green
    ];

    const totalQuizzes = 1381;
    const failedQuizzes = 92;
    return (
        <Box sx={{ flex: 1, p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Good morning, <Typography component="span" color="primary" variant="h4">Ezzat</Typography>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
                Let's get started on engaging with interactive and informative quizzes!
            </Typography>

            <Grid container spacing={3}>
                {/* Recent Quiz Results */}
                <Grid item xs={12} md={8}>
                    <Box border={'1px solid'} p={2} borderRadius={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={7}>
                                <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie
                                                data={data}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={100}
                                                paddingAngle={0}
                                                dataKey="value"
                                                nameKey="name"
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={entry.color}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>

                                    {/* Center Statistics */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Typography variant="h4" color="primary" fontWeight="bold">
                                            {totalQuizzes}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Quizzes taken
                                        </Typography>
                                    </Box>

                                    {/* Failed Quizzes Count */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            textAlign: 'center',
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: 4
                                        }}
                                    >
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography variant="h5" color="primary">
                                                {totalQuizzes}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Quizzes taken
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography variant="h5" color="error">
                                                {failedQuizzes}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Failed quizzes
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Programming 220 quizzes"
                                            secondary="60% of them passed with A grade"
                                            primaryTypographyProps={{ color: 'primary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Web design 220 quizzes"
                                            secondary="40% of them passed with B grade"
                                            primaryTypographyProps={{ color: 'secondary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Programming 220 quizzes"
                                            secondary="60% of them passed with A grade"
                                            primaryTypographyProps={{ color: 'primary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Web design 220 quizzes"
                                            secondary="40% of them passed with B grade"
                                            primaryTypographyProps={{ color: 'secondary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Programming 220 quizzes"
                                            secondary="60% of them passed with A grade"
                                            primaryTypographyProps={{ color: 'primary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Programming 220 quizzes"
                                            secondary="60% of them passed with A grade"
                                            primaryTypographyProps={{ color: 'primary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Programming 220 quizzes"
                                            secondary="60% of them passed with A grade"
                                            primaryTypographyProps={{ color: 'primary' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Programming 220 quizzes"
                                            secondary="60% of them passed with A grade"
                                            primaryTypographyProps={{ color: 'primary' }}
                                        />
                                    </ListItem>
                                    {/* Add other quiz categories similarly */}
                                </List>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>

                {/* Weekly Performance */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Weekly performance</Typography>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={weeklyData}>
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Line type="monotone" dataKey="value" stroke="#1976d2" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>

                {/* Scheduled Test */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6">Scheduled test</Typography>
                            <IconButton size="small"><i className='bi bi-facebook' /></IconButton>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <Typography variant="h4">00</Typography>
                            <Typography variant="h4">:</Typography>
                            <Typography variant="h4">42</Typography>
                            <Typography variant="h4">:</Typography>
                            <Typography variant="h4">10</Typography>
                        </Box>

                        <Typography variant="subtitle1" sx={{ mb: 2 }}>Programming quiz</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Created on: 12 May 2023
                        </Typography>

                        <Button variant="contained" fullWidth>Set another</Button>
                    </Card>
                </Grid>

                {/* Overall Performance */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 3 }}>Overall performance</Typography>

                        <List>
                            <ListItem sx={{ justifyContent: 'space-between' }}>
                                <Typography>Weekly tests</Typography>
                                <Typography color="primary">80%</Typography>
                            </ListItem>
                            <ListItem sx={{ justifyContent: 'space-between' }}>
                                <Typography>Practice tests</Typography>
                                <Typography color="primary">40%</Typography>
                            </ListItem>
                            <ListItem sx={{ justifyContent: 'space-between' }}>
                                <Typography>Questionnairs</Typography>
                                <Typography color="primary">64%</Typography>
                            </ListItem>
                            <ListItem sx={{ justifyContent: 'space-between' }}>
                                <Typography>Monthly tests</Typography>
                                <Typography color="primary">29%</Typography>
                            </ListItem>
                        </List>

                        <Button variant="contained" fullWidth>See overall results</Button>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default StudentDashboard
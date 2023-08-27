import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Grid, Input, InputLabel, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Icon1 from '../../assets/Allocatted_Assessment_DetailImages/icon1.svg'
import Icon2 from '../../assets/Allocatted_Assessment_DetailImages/icon2.svg'
import Icon3 from '../../assets/Allocatted_Assessment_DetailImages/icon3.svg'
import Icon5 from '../../assets/Allocatted_Assessment_DetailImages/icon5.svg'
import Icon4 from '../../assets/Allocatted_Assessment_DetailImages/icon4.svg'
import Icon6 from '../../assets/Allocatted_Assessment_DetailImages/icon6.svg'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect } from 'react';
function Allocated_Assessment() {
    const [userData, setUserData] = useState({
        empId: '',
        empName: '',
        department: '',
        designation: '',
        level: '',
    });
    const [assessmentData1, setAssessmentData1] = useState({
        assessment_ID: 0,
        assessment_Requested_Date: '',
        assessment_SelectedLevel: '',
        assessment_SelectedTopic: "",
    });
    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        const userApiUrl = `https://localhost:7198/api/Users/GetByEmail?userEmail=${encodeURIComponent(userEmail)}`;
        fetch(userApiUrl)
            .then(response => response.json())
            .then(data => {
                const user = data[0];
                console.log(user);
                setUserData({
                    empId: user.user_ID,
                    empName: `${user.user_FirstName} ${user.user_LastName}`,
                    department: user.user_Departmenr,
                    designation: user.user_Designation,
                    level: user.user_EduLevel,
                });
                const assessmentApiUrl = `https://localhost:7198/api/Assessments/max-assessment/${user.user_ID}`;
                fetch(assessmentApiUrl)
                    .then(assessmentResponse => assessmentResponse.json())
                    .then(assessmentData => {
                        setAssessmentData1({
                            assessment_ID: assessmentData.assessment_ID,
                            assessment_Requested_Date: assessmentData.assessment_Requested_Date,
                            assessment_SelectedLevel: assessmentData.assessment_SelectedLevel,
                            assessment_SelectedTopic: assessmentData.assessment_SelectedTopic,
                            assessment_TimeDuration: assessmentData.assessment_TimeDuration,
                            assessment_DateOfCompletion: assessmentData.assessment_DateOfCompletion,
                            assessment_Points: assessmentData.assessment_Points,
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching assessment data:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Allocated');
    };
    const handleBackClick = () => {
        navigate('/Alloted');
    };
    const getButtonClassName = (path) => {
        return 'activeButton';
    };
    return (
        <section style={{ display: 'flex' }}>

            <Sidebar></Sidebar>
            
            <div>
            <Navbar></Navbar>
                <Box>

                    <sidebar />
                    <Box sx={{ width: '90%' }}>
                        <Box>
                        </Box>
                        <Typography sx={{ fontSize: '20px', fontWeight: '500',marginRight:'85%' }}>Employee Details</Typography>
                        <Box sx={{ marginTop: '2%',marginLeft:'-3%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5} >
                                            <InputLabel htmlFor="textbox1">Emp Id </InputLabel>
                                        </Grid>
                                        <Grid item xs={6}sx={{ marginLeft:'8%' }}>
                                            <TextField
                                                disabled
                                                fullWidth
                                                variant="outlined"
                                                label=""
                                                value={userData.empId}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5}>
                                            <InputLabel htmlFor="textbox2">Emp Name</InputLabel>
                                        </Grid>
                                        <Grid item xs={6} sx={{ marginRight: '5%' }}>
                                            <TextField
                                                disabled
                                                id="textbox2"
                                                fullWidth
                                                variant="outlined"
                                                value={userData.empName}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5}>
                                            <InputLabel htmlFor="textbox3">Department</InputLabel>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                disabled
                                                id="textbox3"
                                                fullWidth
                                                variant="outlined"
                                                value={userData.department}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ marginTop: '2%',marginLeft:'-3%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5} >
                                            <InputLabel htmlFor="textbox4"sx={{ marginTop: '2%',marginLeft:'20%' }}>Designation</InputLabel>
                                        </Grid>
                                        <Grid item xs={6} sx={{ marginLeft:'8%' }}>
                                            <TextField
                                                disabled
                                                id="textbox4"
                                                fullWidth
                                                variant="outlined"
                                                value={userData.designation}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5}>
                                            <InputLabel htmlFor="textbox5" sx={{ marginRight: '22%' }}>Level</InputLabel>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                disabled
                                                id="textbox5"
                                                fullWidth
                                                variant="outlined"
                                                value={userData.level}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography sx={{ fontSize: '20px', fontWeight: '500', marginTop: '5%',marginRight:'84%' }}>Assessment details</Typography>
                        <Box sx={{ marginTop: '1%' }}>
                            <Grid container >
                                <Grid item xs={12} sm={8}>
                                    <Box sx={{ width: '100%' }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container alignItems="center">
                                                    <Grid item xs={5}>
                                                        <InputLabel htmlFor="textbox6" sx={{ marginLeft:'-3%' }}>Assessment ID</InputLabel>
                                                    </Grid>
                                                    <Grid item xs={6 } sx={{ marginLeft:'2%' }}>
                                                        <TextField
                                                            disabled
                                                            id="textbox6"
                                                            fullWidth
                                                            variant="outlined"
                                                            value={assessmentData1.assessment_ID}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container alignItems="center">
                                                    <Grid item xs={5}>
                                                        <InputLabel htmlFor="textbox7">Requested Date</InputLabel>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            disabled
                                                            id="textbox7"
                                                            fullWidth
                                                            variant="outlined"
                                                            value={assessmentData1.assessment_Requested_Date}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ width: '120%', marginLeft: '-30%%' }}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={4}>
                                                <InputLabel htmlFor="textbox8" sx={{ marginRight: '10%' }}>Topics</InputLabel>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <TextField
                                                    multiline
                                                    rows={4}
                                                    disabled
                                                    id="textbox8"
                                                    fullWidth
                                                    variant="outlined"
                                                    value={assessmentData1.assessment_SelectedTopic}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5}>
                                            <InputLabel htmlFor="textbox9" sx={{ marginLeft:'-9%' }}>Time Alloted</InputLabel>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                disabled
                                                id="textbox9"
                                                fullWidth
                                                variant="outlined"
                                                value={assessmentData1.assessment_TimeDuration}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5}>
                                            <InputLabel htmlFor="textbox10">Assessment Date</InputLabel>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                disabled
                                                id="textbox10"
                                                fullWidth
                                                variant="outlined"
                                                value={assessmentData1.assessment_DateOfCompletion}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ marginTop: '2%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={5}>
                                            <InputLabel htmlFor="textbox11"  sx={{ marginLeft:'2%' }}>Assessment Points</InputLabel>
                                        </Grid>
                                        <Grid item xs={6}sx={{ marginLeft:'2%' }}>
                                            <TextField disabled id="textbox11"
                                                fullWidth
                                                variant="outlined"
                                                value={assessmentData1.assessment_Points}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Box>
                        <Box>
                            <Box sx={{ marginTop: '2%' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={5}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '500', marginTop: '5%',marginRight:'15%' }}>Assessment </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={5}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '300', marginTop: '5%' }}>Before you start </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <IconButton style={{      position: 'absolute',width: '18.81px',height: '5.81px',marginRight: '9%',marginLeft: '15px ',top: '780.1px',  backgroundImage: Icon1,
                                        }}>
                                            <Icon>
                                                <img src={Icon1} alt="" />
                                            </Icon>
                                        </IconButton>
                                        <Typography sx={{ fontStyle: 'normal', marginLeft: 'auto', marginTop: '2%', marginLeft: '-40%' }}>15 Multiple choice questions</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <IconButton style={{position: 'absolute',width: '18.81px',height: '5.81px',marginRight: '20%',marginLeft: '-25% ',top: '820.1px',backgroundImage: Icon2,
                                        }}>
                                            <Icon>
                                                <img src={Icon2} alt="" />
                                            </Icon>
                                        </IconButton>
                                        <Typography sx={{ fontStyle: 'normal', marginLeft: 'auto', marginTop: '2%', marginLeft: '3%' }}>You must complete this assessment in one session-make sure your internet is reliable</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <IconButton style={{
                                            position: 'absolute',   width: '12.81px',height: '12.81px',   left: '15.48%',top: '855px', backgroundImage: Icon3,  }}>
                                            <Icon>
                                                <img src={Icon3} alt="" />
                                            </Icon>
                                        </IconButton>
                                        <Typography sx={{ fontStyle: 'normal', marginLeft: 'auto', marginTop: '2%', marginLeft: '-45%' }}>1.5 Minutes per question</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <IconButton style={{ position: 'absolute',width: '12.81px',height: '12.81px',left: '40.70%',top: '84%',backgroundImage: Icon4,
                                        }}>
                                            <Icon>
                                                <img src={Icon4} alt="" />
                                            </Icon>
                                        </IconButton>
                                        <Typography sx={{ fontStyle: 'normal', marginLeft: 'auto', marginTop: '2%', marginLeft: '3%' }}>You can retake this assessment once if you don't earn a badge</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <IconButton style={{  position: 'absolute',width: '15.81px',height: '16.81px',  left: '40.70%', top: '88.30%', backgroundImage: Icon5,
                                        }}>
                                            <Icon>
                                                <img src={Icon5} alt="" />
                                            </Icon>
                                        </IconButton>
                                        <Typography sx={{ fontStyle: 'normal', marginLeft: 'auto', marginTop: '2%', marginLeft: '-30%' }}>Score in top 50% to earn a badge</Typography>

                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <IconButton style={{   position: 'absolute',width: '12.81px',height: '12.81px',left: '530px',top: '725px',backgroundImage: Icon6,
                                        }}>
                                            <Icon>
                                                <img src={Icon6} alt="" />
                                            </Icon>
                                        </IconButton>
                                        <Typography sx={{ fontStyle: 'normal', marginLeft: 'auto', marginTop: '2%', marginLeft: '3%' }}>We wont show your results to anyone without your permission.</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <div className="btn">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#7BCCED', borderColor: '#7BCCED', marginLeft:"700%" }}
                                onClick={handleBackClick}
                            >
                                Back
                            </Button>
                        </div>
                        <div className="btn" style={{ marginLeft: '10px' }}>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#7BCCED', borderColor: '#7BCCED' ,marginLeft:"480%" }}
                                onClick={handleClick}
                            >
                                Confirm
                            </Button>
                        </div>
                    </Box>
                </Box>
            </div>
        </section>
    )
}
export default Allocated_Assessment

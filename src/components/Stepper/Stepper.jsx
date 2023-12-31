import React from 'react';
import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FeelingToday from '../FeelingToday/FeelingToday';
import UnderstandingContent from '../UnderstandingContent/UnderstandingContent';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';


function HorizontalStepper() {
    const steps = ['How do you feel?', 'Comprehension', 'Do you feel supported?', 'Comments'];
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const history = useHistory();

    // function to get number of steps
    const totalSteps = () => {
        return steps.length;
    };

    // function to keep track of how many steps have been completed
    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    // function to check if the active step is the last one
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    // function to check if comloeted steps and total steps are equal
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    // function when next button is clicked
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    // function when back button is clicked
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // makes the step that was clicked on the active step
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    // records the step as complete when someone submits an entry, also navigates to next step
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    // resets the completed and navigates to first step
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    // navigates to the review page when submit entries is clicked
    const handleReview = () => {
        history.push('/review');
    }

    const forms = [
        <FeelingToday handleComplete={handleComplete} />,
        <UnderstandingContent handleComplete={handleComplete} />,
        <Supported handleComplete={handleComplete} />,
        <Comments handleComplete={handleComplete} />
    ]

    return (
        <Box sx={{ width: '70%', border: 1, margin: 'auto', padding: 4 }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                <>
                    {forms[activeStep]}
                </>
                {allStepsCompleted() ? (
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, p: 2}}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Stack direction='row' spacing={2}> 
                                <Button
                                onClick={handleBack}
                                variant='outlined'
                                startIcon={<EditIcon />}
                            >
                                Edit your feedback
                            </Button>
                            {completedSteps() === totalSteps() &&
                                <Button
                                    onClick={handleReview}
                                    variant='outlined'
                                    startIcon={<AddIcon />}
                                >
                                    Submit Feedback
                                </Button>
                            }
                            </Stack>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>

                        </Box>
                    </>
                )}
            </div>
        </Box>
    );
}

export default withRouter(HorizontalStepper)
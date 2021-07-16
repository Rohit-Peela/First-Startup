import React from 'react'
import Footer from '../components/Footer';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MuiPhoneNumber from "material-ui-phone-number";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {animateScroll as scroll} from 'react-scroll'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#01BF71',
        },
        secondary: {
            main: '#010606',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
        marginBottom: "10px",
        marginLeft: "5px"
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




const SignUp = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [selectedDate, setSelectedDate] = React.useState();
    const [workcheck, setWorkcheck] = React.useState(false);
    const [loanType, setLoanType] = React.useState('');
    const [info, setInfo] = React.useState('');
    const [intake, setIntake] = React.useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleNext = () => {
        scroll.scrollToTop();
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        scroll.scrollToTop();
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleWorkChange = (event) => {
        setWorkcheck(event.target.checked);
    };

    const handleLoanType = (event) => {
        //console.log("the loan type is", event.target.c)
        setLoanType(event.target.value);
    };

    const handleInfo = (event) => {
        //console.log("the loan type is", event.target.c)
        setInfo(event.target.value);
    };

    const handleIntake = (event) => {
        //console.log("the loan type is", event.target.c)
        setIntake(event.target.value);
    };

    function getSteps() {
        return ['Applicant Deatils', 'Co-Applicant Details', 'Additional Details', 'Documents Upload'];
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return primaryDeatils();
            case 1:
                return coApplicantDetails();
            case 2:
                return additionalDetails();
            case 3:
                return 'This is the bit I really care about!';
            default:
                return 'Error and Unknown stepIndex';
        }
    }

    function primaryDeatils() {
        return (


            <div class='some-page-wrapper'>
                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="First Name" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Last Name" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Mail Id" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Referal Code(Optional)" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <MuiPhoneNumber
                            name="phone"
                            label="Phone Number"
                            data-cy="user-phone"
                            defaultCountry={"in"}

                        />
                    </div>
                    <div class='column' style={{ marginTop: "30px" }}>
                        <Button variant="contained" color="primary">Generate Otp</Button>
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="OTP" />
                    </div>
                    <div class='column'>
                    </div>
                </div>
            </div>
        )
    }

    function coApplicantDetails() {
        return (
            <div class='some-page-wrapper'>
                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Co-Applicant First Name" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Co-Applicant Last Name" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Co-Applicant Relation" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Co-Applicant Occupation" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        {/* <TextField id="standard-basic" label="Co-Applicant Date of Birth(mm/dd/yy)" /> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-dialog"
                                label="Co-Applicant Date of Birth"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div class='column'>
                    </div>
                </div>
            </div>
        );
    }

    function additionalDetails() {
        return (
            <div class='some-page-wrapper'>
                <h3 style={{ textAlign: "center", padding: "20px" }}>University Details</h3>
                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="University Name" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="University Country" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Course" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Course Duration(yrs)" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Degree Name" />
                    </div>
                    <div class='column'>
                    </div>
                </div>
                <br /><br />
                <Divider />
                <h3 style={{ textAlign: "center", padding: "20px" }}>Personal Details</h3>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Age" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Year passed out" />
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Checkbox
                        checked={workcheck}
                        onChange={handleWorkChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> Are you currently working?
                </div>


                {workcheck ? <>
                    <div class='row'>
                        <div class='column'>
                            <TextField id="standard-basic" label="No.Years of Work Experience" />
                        </div>
                        <div class='column'>
                            {/* <TextField id="standard-basic" label="No.Years of Work Experience" /> */}
                        </div>
                    </div>



                    <div class='row'>
                        <div class='column'>
                            <TextField id="standard-basic" label="Company Name" />
                        </div>
                        <div class='column'>
                            <CurrencyTextField
                                label="Annual Income"
                                variant="standard"
                                currencySymbol="&#x20b9;"
                                //minimumValue="0"
                                outputFormat="string"
                                decimalCharacter="."
                                digitGroupSeparator=","
                            />
                        </div>
                    </div>
                </> : <></>}

                <br /><br />
                <Divider />
                <h3 style={{ textAlign: "center", padding: "20px" }}>Loan Details</h3>

                <div class='row'>
                    <div class='column' style={{ marginTop: "28px" }}>
                        <CurrencyTextField
                            label="Required Loan Amount"
                            variant="standard"
                            currencySymbol="&#x20b9;"
                            //minimumValue="0"
                            outputFormat="string"
                            decimalCharacter="."
                            digitGroupSeparator=","
                        />
                    </div>
                    <div class='column'>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Loan Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={loanType}
                                onChange={handleLoanType}
                            >
                                <MenuItem value={"Collateral"}>Collateral</MenuItem>
                                <MenuItem value={"Non-Collateral"}>Non-Collateral</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-dialog"
                                label="By when you need loan sanction?"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div class='column' style={{ marginTop: "28px" }}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Just Filling for Info?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={info}
                                onChange={handleInfo}
                            >
                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Prefered Intake</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={intake}
                                onChange={handleIntake}
                            >
                                <MenuItem value={"Spring"}>Spring</MenuItem>
                                <MenuItem value={"Fall"}>Fall</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class='column'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                margin="normal"
                                openTo="year"
                                id="date-picker-dialog"
                                views={["year"]}
                                label="Prefered Year"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>

                <br /><br />
                <Divider />
                <h3 style={{ textAlign: "center", padding: "20px" }}>Address Details</h3>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="Home street number and name" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="City" />
                    </div>
                </div>

                <div class='row'>
                    <div class='column'>
                        <TextField id="standard-basic" label="State" />
                    </div>
                    <div class='column'>
                        <TextField id="standard-basic" label="Zip" />
                    </div>
                </div>

            </div>

        );
    }

    return (
        <MuiThemeProvider theme={theme}>

            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel style={{ color: "red" }}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

            </div>
            <Container maxWidth="md" style={{ marginTop: "20px", marginBottom: "200px" }}>
                <Box
                    boxShadow={10}
                    bgcolor="background.paper"
                >
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed, Please sign in to continue!</Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div style={{padding:"20px"}}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button style={{ float: "right" }} variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>


                            </div>
                        )}
                    </div>
                </Box>
            </Container>
            <Footer />
        </MuiThemeProvider>
    )
}

export default SignUp;
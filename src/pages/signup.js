import React, { useRef, useEffect } from 'react'
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
import { animateScroll as scroll } from 'react-scroll'
import Documents from '../components/Documents';
import { register } from 'react-scroll/modules/mixins/scroller';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import firebase from '../../src/firebase';
import { first } from 'lodash';

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
    const [otp, setOtp] = React.useState();
    const formRef = useRef();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleNext = () => {
        scroll.scrollToTop();
        console.log(initialValues);
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
                return <div><Documents /></div>;
            default:
                return 'Error and Unknown stepIndex';
        }
    }

    // useEffect(() => {
    //     setUpRecaptcha();
    // }, [])

    const initialValues = {
        //firstName:'',
        applicant_data: {
            firstName: '',
            lastName: '',
            mailId: '',
            referalCode: '',
            phoneNumber: '',
            otp: ''
        }
    }

    const validationSchema = Yup.object().shape({
        applicant_data: Yup.object().shape({
            firstName: Yup.string().typeError("Enter valid First Name").min(2, "Too Short!").required("*First Name is Required"),
            lastName: Yup.string().typeError("Enter valid Last Name").min(2, "Too Short!").required("*Last Name is Required"),
            mailId: Yup.string().email("Please Enter a valid email").required("*E-mail is Required"),
            phoneNumber: Yup.number().typeError("Enter valid Phone number").min(10, "Phone number too short!").required("*Phone number is required"),
            otp: Yup.number().typeError("Enter valid OTP").required("*OTP is required"),
        })
    })

    const onSubmit = (value, props,event) => {
        event.preventDefault();
        if (activeStep == 0) {
            console.log('zero active step');
            const code = formRef.current.values.applicant_data.otp;
            console.log("otp is", code);
            window.confirmationResult.confirm(697475).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log("user signed in!!!", JSON.stringify(user));
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log('user not signed');
                return;
            });
        }
        console.log(value);
        const sendToFirebase = firebase.database().ref("users");
        // const todo = {
        //     complete: true,
        //     date: new Date(),
        // }
        sendToFirebase.push(value.applicant_data);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
                console.log('re-captcha verified');
            },
            defaultCountry: "IN"
        });
    }



    const onSignInSubmit = (event) => {
        event.preventDefault();
        console.log(formRef);
        setUpRecaptcha();
        const phoneNumber = formRef.current.values.applicant_data.phoneNumber;
        const appVerifier = window.recaptchaVerifier;
        console.log("phone number given", phoneNumber);
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                console.log("Sent otp");
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;

                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    }

    function primaryDeatils() {
        return (
            <Formik initialValues={initialValues} innerRef={formRef} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                    <Form>
                        {console.log(props)}
                        <div id="recaptcha-container"></div>
                        <div class='some-page-wrapper'>
                            <div class='row'>
                                <div class='column'>
                                    {props.values.firstName}
                                    <Field as={TextField} id="standard-basic" name="applicant_data.firstName" label="First Name"
                                        value={props.values.applicant_data.firstName}
                                        onChange={props.handleChange}
                                        error={(props.errors.applicant_data ? (props.errors.applicant_data.firstName ? true : false) : false)}
                                        helperText={<ErrorMessage name="applicant_data.firstName">{msg => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>} />
                                </div>
                                <div class='column'>
                                    <Field as={TextField} id="standard-basic" name="applicant_data.lastName" label="Last Name"
                                        value={props.values.applicant_data.lastName}
                                        onChange={props.handleChange}
                                        // error={props.errors.applicant_data.lastName && props.touched.applicant_data.lastName}
                                        helperText={<ErrorMessage name="applicant_data.lastName">{msg => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>} />
                                </div>
                            </div>

                            <div class='row'>
                                <div class='column'>
                                    <Field as={TextField} id="standard-basic" type="Email" name="applicant_data.mailId" label="Mail Id"
                                        value={props.values.applicant_data.mailId}
                                        onChange={props.handleChange}
                                        // error={props.errors.applicant_data.mailId && props.touched.applicant_data.mailId}
                                        helperText={<ErrorMessage name="applicant_data.mailId">{msg => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>} />
                                </div>
                                <div class='column'>
                                    <Field as={TextField} id="standard-basic" name="applicant_data.referalCode" label="Referal Code(Optional)"
                                        value={props.values.applicant_data.referalCode}
                                        onChange={props.handleChange} />
                                </div>
                            </div>

                            <div class='row'>
                                <div class='column'>
                                    <MuiPhoneNumber
                                        name="applicant_data.phoneNumber"
                                        label="Phone Number"
                                        data-cy="user-phone"
                                        autoFormat={false}
                                        value={props.values.applicant_data.phoneNumber}
                                        onChange={e => props.setFieldValue("applicant_data.phoneNumber", e)}
                                        // error={props.errors.applicant_data.phoneNumber && props.touched.applicant_data.phoneNumber}
                                        defaultCountry={"in"}
                                        helperText={<ErrorMessage name="applicant_data.phoneNumber">{msg => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}

                                    />
                                </div>
                                <div class='column' style={{ marginTop: "30px" }}>
                                    <Button id="" onClick={onSignInSubmit} variant="contained" color="primary">Generate Otp</Button>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='column'>
                                    <Field as={TextField} value={props.values.applicant_data.otp}
                                        onChange={props.handleChange}
                                        helperText={<ErrorMessage name="applicant_data.otp">{msg => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
                                        name="applicant_data.otp"
                                        //  error={props.errors.applicant_data.otp && props.touched.applicant_data.otp}
                                        id="standard-basic" label="OTP" />
                                </div>
                                <div class='column'>
                                </div>
                            </div>

                            <div style={{ padding: "20px" }}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button type="submit" style={{ float: "right" }} variant="contained" color="primary" >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
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
                                {/* <div style={{ padding: "20px" }}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit" style={{ float: "right" }} variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div> */}


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
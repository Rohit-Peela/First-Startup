import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { animateScroll as scroll } from 'react-scroll';
import Checkbox from '@material-ui/core/Checkbox';
import NoteDialog from '../Dialogs';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Documents = () => {
    const classes = useStyles();
    const [inputFileName, setInputFileName] = useState({
        applicant_pan: '',
        applicant_passport_photo: '',
        applicant_aadhar_card: '',
        applicant_passport: '',
        applicant_10th_12th: '',
        applicant_bachelors_certificates: '',
        applicant_admission_letter: '',
        applicant_experience_letter: '',
        applicant_gre: '',
        applicant_ielts: '',
        applicant_toefl: '',
        applicant_pte: '',
        applicant_gmat: '',
        applicant_sat: '',
        applicant_act: '',
        applicant_dulingo: '',
        co_applicant_passport_photo:'',
        co_applicant_pan: '',
        co_applicant_aadhar_card: '',
        co_applicant_salaried_bankstatement:'',
        co_applicant_salary_slips:'',
        co_applicant_salaried_itr:'',
        co_applicant_savings_bankstatement:'',
        co_applicant_self_employed_proof:'',
        co_applicant_self_employed_itr:'',
        father_passport_photo:'',
        father_pan_card:'',
        father_aadhar_card:'',
        mother_passport_photo:'',
        mother_pan_card:'',
        mother_aadhar_card:''
    });

    const [fileNote, setFileNote] = useState({
        applicant_pan:'',
        applicant_pan: '',
        applicant_passport_photo: '',
        applicant_aadhar_card: '',
        applicant_passport: '',
        applicant_10th_12th: '',
        applicant_bachelors_certificates: '',
        applicant_admission_letter: '',
        applicant_experience_letter: '',
        applicant_gre: '',
        applicant_ielts: '',
        applicant_toefl: '',
        applicant_pte: '',
        applicant_gmat: '',
        applicant_sat: '',
        applicant_act: '',
        applicant_dulingo: '',
        co_applicant_passport_photo:'',
        co_applicant_pan: '',
        co_applicant_aadhar_card: '',
        co_applicant_salaried_bankstatement:'',
        co_applicant_salary_slips:'',
        co_applicant_salaried_itr:'',
        co_applicant_savings_bankstatement:'',
        co_applicant_self_employed_proof:'',
        co_applicant_self_employed_itr:'',
        father_passport_photo:'',
        father_pan_card:'',
        father_aadhar_card:'',
        mother_passport_photo:'',
        mother_pan_card:'',
        mother_aadhar_card:''

    });
    const [expanded, setExpanded] = React.useState('panel1');
    const [entranceTestcheck, setEntranceTestcheck] = React.useState(false);
    const [englishTestcheck, setEnglishTestcheck] = React.useState(false);
    const [nonselfEmployeecheck, setNonSelfEmployeecheck] = React.useState(false);
    const [selfEmployeecheck, setSelfEmployeecheck] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [noteName, setNoteName] = React.useState('');
    const [noteId, setNoteId] = React.useState('');

    const handleClickOpen = (name,id) => {
        setNoteName(name);
        setNoteId(id);
        setOpen(true);
    };

    // const temp = (name,id) => {
    //     setNoteName(name);
    //     setNoteId(id);
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    function handleChange(event) {
        const name = event.target.name;
        let fileName = event.target.files[0].name;
        setInputFileName(prevState => ({
            ...prevState,
            [name]: fileName
        }))
        console.log(inputFileName);
    }

    const handleEntranceTestChange = (event) => {
        setEntranceTestcheck(event.target.checked);
    };

    const handleEnglishTestChange = (event) => {
        setEnglishTestcheck(event.target.checked);
    };

    const handleNonSelfEmployeeTestChange = (event) => {
        setNonSelfEmployeecheck(event.target.checked);
    };

    const handleSelfEmployeeTestChange = (event) => {
        setSelfEmployeecheck(event.target.checked);
    };

    const panelChange = (panel) => (event, newExpanded) => {

        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={panelChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Applicant Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='some-page-wrapper' style={{ width: "100%" }}>

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>PAN Card</b>
                                    {inputFileName.applicant_pan ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_pan}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_pan"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("PAN Card", "applicant_pan")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_pan? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_pan}</span>
                                        </div> : <></>}
                                </div>
                                <NoteDialog open={open} handleClose={handleClose} fileNote={fileNote} setFileNote={setFileNote} name={noteName} id={noteId} />
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Passport Photo</b>
                                    {inputFileName.applicant_passport_photo ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_passport_photo}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_passport_photo"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Passport Photo", "applicant_passport_photo")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_passport_photo? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_passport_photo}</span>
                                        </div> : <></>}
                                </div>
                               
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Aadhar Card Photo</b>
                                    {inputFileName.applicant_aadhar_card ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_aadhar_card}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_aadhar_card"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Aadhar Card Photo", "applicant_aadhar_card")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_aadhar_card? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_aadhar_card}</span>
                                        </div> : <></>}
                                </div>
                                
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Passport</b>
                                    {inputFileName.applicant_passport ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_passport}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_passport"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Passport", "applicant_passport")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_passport? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_passport}</span>
                                        </div> : <></>}
                                </div>
                                
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <Tooltip title="Please include 10th and 12th grade certificates in single file"><b style={{ textAlign: "center" }}>10th and 12th Certificates <i class="fa fa-info-circle" aria-hidden="true" /></b></Tooltip>
                                    {inputFileName.applicant_10th_12th ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_10th_12th}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_10th_12th"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("10th and 12th Certificates", "applicant_10th_12th")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_10th_12th? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_10th_12th}</span>
                                        </div> : <></>}
                                </div>
                                
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <Tooltip title="Please include all semester grade cards, PCMG, Degree accredited certificates in single pdf file"><b style={{ textAlign: "center" }}>Bachelor's certificates <i class="fa fa-info-circle" aria-hidden="true" /></b></Tooltip>
                                    {inputFileName.applicant_bachelors_certificates ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_bachelors_certificates}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_bachelors_certificates"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Bachelor's certificates", "applicant_bachelors_certificates")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_bachelors_certificates? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_bachelors_certificates}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>University Admission Letter</b>
                                    {inputFileName.applicant_admission_letter ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_admission_letter}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_admission_letter"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("University Admission Letter", "applicant_admission_letter")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_admission_letter? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_admission_letter}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Experience Letter</b>
                                    {inputFileName.applicant_experience_letter ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_experience_letter}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="applicant_experience_letter"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Experience Letter", "applicant_experience_letter")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.applicant_experience_letter? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_experience_letter}</span>
                                        </div> : <></>}
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <br />
                <Accordion expanded={expanded === 'panel2'} onChange={panelChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Exam Score Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='some-page-wrapper' style={{ width: "100%" }}>

                            <div style={{ marginTop: "20px" }}>
                                <Checkbox
                                    checked={entranceTestcheck}
                                    onChange={handleEntranceTestChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Have you written any Entrance test examination?
                            </div>

                            {entranceTestcheck ? <>
                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>GRE Score Card</b>
                                        {inputFileName.applicant_gre ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_gre}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_gre"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("GRE Score Card", "applicant_gre")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_gre? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_gre}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>GMAT Score Card</b>
                                        {inputFileName.applicant_gmat ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_gmat}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_gmat"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("GMAT Score Card", "applicant_gmat")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_gmat? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_gmat}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>SAT Score Card</b>
                                        {inputFileName.applicant_sat ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_sat}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_sat"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("SAT Score Card", "applicant_sat")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_sat? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_sat}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>ACT Score Card</b>
                                        {inputFileName.applicant_act ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_act}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_act"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("ACT Score Card", "applicant_act")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_act? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_act}</span>
                                        </div> : <></>}
                                    </div>
                                </div>


                            </> : <></>}
                            <hr style={{ borderTop: "1px dashed", marginTop: "20px" }} />

                            <div style={{ marginTop: "20px" }}>
                                <Checkbox
                                    checked={englishTestcheck}
                                    onChange={handleEnglishTestChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Have you written any English Proficiency Test?
                            </div>

                            {englishTestcheck ? <>
                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>TOEFL Score Card</b>
                                        {inputFileName.applicant_toefl ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_toefl}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_toefl"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("TOEFL Score Card", "applicant_toefl")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_toefl? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_toefl}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>IELTS Score Card</b>
                                        {inputFileName.applicant_ielts ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_ielts}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_ielts"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("IELTS Score Card", "applicant_ielts")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_ielts? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_ielts}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>PTE Score Card</b>
                                        {inputFileName.applicant_pte ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.applicant_pte}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="applicant_pte"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("PTE Score Card", "applicant_pte")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.applicant_pte? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.applicant_pte}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                            </> : <></>}


                        </div>
                    </AccordionDetails>
                </Accordion>

                <br />
                <Accordion expanded={expanded === 'panel3'} onChange={panelChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Co-Applicant Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='some-page-wrapper' style={{ width: "100%" }}>

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Co-Applicant Passport Size photo</b>
                                    {inputFileName.co_applicant_passport_photo ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_passport_photo}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="co_applicant_passport_photo"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Co-Applicant Passport Size photo", "co_applicant_passport_photo")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.co_applicant_passport_photo? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_passport_photo}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Co-Applicant PAN Card</b>
                                    {inputFileName.co_applicant_pan ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_pan}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="co_applicant_pan"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Co-Applicant PAN Card", "co_applicant_pan")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.co_applicant_pan? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_pan}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Co-Applicant Aadhar Card</b>
                                    {inputFileName.co_applicant_aadhar_card ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_aadhar_card}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="co_applicant_aadhar_card"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Co-Applicant Aadhar Card", "co_applicant_aadhar_card")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.co_applicant_aadhar_card? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_aadhar_card}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div style={{ marginTop: "20px" }}>
                                <Checkbox
                                    checked={nonselfEmployeecheck}
                                    onChange={handleNonSelfEmployeeTestChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /><Tooltip title="Working for any organization or company or government."><b style={{ textAlign: "center" }}>Is your Co-Applicant a Working Employee? <i class="fa fa-info-circle" aria-hidden="true" /></b></Tooltip>
                            </div>
                            <br/>

                            {nonselfEmployeecheck ? <>
                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>Salaried Bank statement(6 months)</b>
                                        {inputFileName.co_applicant_salaried_bankstatement ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_salaried_bankstatement}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="co_applicant_salaried_bankstatement"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Salaried Bank statement(6 months)", "co_applicant_salaried_bankstatement")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.co_applicant_salaried_bankstatement? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_salaried_bankstatement}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>Latest 3 months Salary Slips</b>
                                        {inputFileName.co_applicant_salary_slips ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_salary_slips}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="co_applicant_salary_slips"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Latest 3 months Salary Slips", "co_applicant_salary_slips")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.co_applicant_salary_slips? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_salary_slips}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>Latest 2 years ITR/Form-16</b>
                                        {inputFileName.co_applicant_salaried_itr ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_salaried_itr}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="co_applicant_salaried_itr"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Latest 2 years ITR/Form-16", "co_applicant_salaried_itr")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.co_applicant_salaried_itr? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_salaried_itr}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                            </> : <></>}

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div style={{ marginTop: "20px" }}>
                                <Checkbox
                                    checked={selfEmployeecheck}
                                    onChange={handleSelfEmployeeTestChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /><Tooltip title="Having his own business or a farmer"><b style={{ textAlign: "center" }}>Is your Co-Applicant Self-Employed? <i class="fa fa-info-circle" aria-hidden="true" /></b></Tooltip>
                            </div>

                            {selfEmployeecheck ? <>
                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>Saving Account Bank statement(6 months)</b>
                                        {inputFileName.co_applicant_savings_bankstatement ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_savings_bankstatement}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="co_applicant_savings_bankstatement"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Saving Account Bank statement(6 months)", "co_applicant_savings_bankstatement")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.co_applicant_savings_bankstatement? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_savings_bankstatement}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>Self-Employed Business Proof</b>
                                        {inputFileName.co_applicant_self_employed_proof ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_self_employed_proof}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="co_applicant_self_employed_proof"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Self-Employed Business Proof", "co_applicant_self_employed_proof")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.co_applicant_self_employed_proof? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_self_employed_proof}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                                <p style={{ textAlign: "center" }}><b>or</b></p>

                                <div className='row'>
                                    <div className='column'>
                                        <b style={{ textAlign: "center" }}>Latest 2 years ITR</b>
                                        {inputFileName.co_applicant_self_employed_itr ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.co_applicant_self_employed_itr}</p></div> : <></>}
                                    </div>
                                    <div className='column'>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                name="co_applicant_self_employed_itr"
                                                onChange={handleChange}
                                            />
                                        </Button>
                                        <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Latest 2 years ITR", "co_applicant_self_employed_itr")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                        {fileNote.co_applicant_self_employed_itr? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.co_applicant_self_employed_itr}</span>
                                        </div> : <></>}
                                    </div>
                                </div>

                            </> : <></>}

                        </div>
                    </AccordionDetails>
                </Accordion>

                <br />
                <Accordion expanded={expanded === 'panel4'} onChange={panelChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Father Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='some-page-wrapper' style={{ width: "100%" }}>

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Father Passport Size Photo</b>
                                    {inputFileName.father_passport_photo ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.father_passport_photo}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="father_passport_photo"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Father Passport Size Photo", "father_passport_photo")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.father_passport_photo? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.father_passport_photo}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Father Pan Card</b>
                                    {inputFileName.father_pan_card ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.father_pan_card}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="father_pan_card"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Father Pan Card", "father_pan_card")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.father_pan_card? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.father_pan_card}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Father Aadhar Card</b>
                                    {inputFileName.father_aadhar_card ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.father_aadhar_card}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="father_aadhar_card"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Father Aadhar Card", "father_aadhar_card")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.father_aadhar_card? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.father_aadhar_card}</span>
                                        </div> : <></>}
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <br />
                <Accordion expanded={expanded === 'panel5'} onChange={panelChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Mother Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='some-page-wrapper' style={{ width: "100%" }}>

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Mother Passport Size Photo</b>
                                    {inputFileName.mother_passport_photo ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.mother_passport_photo}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="mother_passport_photo"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Mother Passport Size Photo", "mother_passport_photo")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.mother_passport_photo? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.mother_passport_photo}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Mother Pan Card</b>
                                    {inputFileName.mother_pan_card ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.mother_pan_card}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="mother_pan_card"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Mother Pan Card", "mother_pan_card")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.mother_pan_card? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.mother_pan_card}</span>
                                        </div> : <></>}
                                </div>
                            </div>

                            <hr style={{ borderTop: "1px dashed" }} />

                            <div className='row'>
                                <div className='column'>
                                    <b style={{ textAlign: "center" }}>Mother Aadhar Card</b>
                                    {inputFileName.mother_aadhar_card ? <div style={{ textAlign: "center" }}><p><i class="fa fa-check-circle" style={{ color: "green" }} aria-hidden="true"></i> {inputFileName.mother_aadhar_card}</p></div> : <></>}
                                </div>
                                <div className='column'>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                            name="mother_aadhar_card"
                                            onChange={handleChange}
                                        />
                                    </Button>
                                    <Tooltip title="Add a note for this file"><Button onClick={() => handleClickOpen("Mother Aadhar Card", "mother_aadhar_card")} style={{ width: "150px", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}><i class="fa fa-sticky-note" aria-hidden="true"></i></Button></Tooltip>
                                    {fileNote.mother_aadhar_card? <div style={{ textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>
                                        Note: <span style={{ maxWidth: "250px", overflow:"auto", textAlign: "center", margin: "auto", display: "block", marginBottom: "20px" }}>{fileNote.mother_aadhar_card}</span>
                                        </div> : <></>}
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <br />
                {/* <Accordion expanded={expanded === 'panel6'} onChange={panelChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Additional Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br /> */}
            </div>

        </div>
    )
}

export default Documents

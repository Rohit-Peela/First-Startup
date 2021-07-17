import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { animateScroll as scroll } from 'react-scroll'

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
        applicant_experience_letter: ''
    });
    const [expanded, setExpanded] = React.useState('panel1');



    function handleChange(event) {
        const name = event.target.name;
        let fileName = event.target.files[0].name;
        setInputFileName(prevState => ({
            ...prevState,
            [name]: fileName
        }))
        console.log(inputFileName);
    }

    const panelChange = (panel) => (event, newExpanded) => {
        scroll.scrollToTop();
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
                                </div>
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
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <br/>
                <Accordion expanded={expanded === 'panel2'} onChange={panelChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Exam Score Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>
                <Accordion expanded={expanded === 'panel3'} onChange={panelChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Co-Applicant Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>
                <Accordion expanded={expanded === 'panel4'} onChange={panelChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Father Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>
                <Accordion expanded={expanded === 'panel5'} onChange={panelChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><h2 style={{ textAlign: "center", padding: "20px" }}>Mother Documents</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>
                <Accordion expanded={expanded === 'panel6'} onChange={panelChange('panel6')}>
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
                <br/>
            </div>

        </div>
    )
}

export default Documents

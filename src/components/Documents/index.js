import React, { useState,useEffect} from 'react'
import { Button } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
const Documents = () => {
    const [inputFileName, setInputFileName] = useState({
        applicant_pan: '',
        applicant_passport_photo: '',
        applicant_aadhar_card:'',
        applicant_passport:'',
        applicant_10th_12th:'',
        applicant_bachelors_certificates:'',
        applicant_admission_letter:'',
        applicant_experience_letter:''
    });


    function handleChange(event) {
        const name = event.target.name;
        let fileName = event.target.files[0].name;
        setInputFileName(prevState => ({
            ...prevState,
            [name] : fileName
        }))
        console.log(inputFileName);
    }

    return (
        <div>
            <div className='some-page-wrapper'>
                <h2 style={{ textAlign: "center", padding: "20px" }}>Applicant Documents</h2>
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
        </div>
    )
}

export default Documents

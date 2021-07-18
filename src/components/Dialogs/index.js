import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dialogPaper: {
       
        height : '250px',
        width:'80%'
    },
}));


const NoteDialog = ({open, handleClose, fileNote, setFileNote, name, id}) => {
    let temp='';
    const classes = useStyles();

    const handleChange = (event) => {
        console.log(event.target.value);
        setFileNote(prevState => ({
            ...prevState,
            [id]: event.target.value
        }));
        console.log(fileNote);
    }
    return (
        <div>
            <Dialog classes={{ paper : classes.dialogPaper}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><h3>Add Note</h3></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>Enter note for {name}</p>
                    </DialogContentText>
                    <TextareaAutosize onChange={handleChange} value={fileNote[id]} style={{width:"100%"}} aria-label="minimum height" rowsMin={3} placeholder="Enter Note..." />
                </DialogContent>
                <DialogActions>
                    <Button  onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default NoteDialog;

import React from 'react';
import './App.css';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '60%',
        maxHeight: '90vh',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflowY: 'scroll',
      },
  }));
  
  function getModalStyle() {
    return {
      top: `${50}%`,
      left: `${50}%`,
      transform: `translate(-${50}%, -${50}%)`,
    };
  }

export default function ParkModal(props) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
      <div>
          <div class="example" onClick={handleOpen}>
                <img src={props.tile.Image} alt={props.tile.Name} />
                <div class="fadedbox">
                        <div class="title text"> {props.tile.Name} </div>
                    </div>
            </div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <img src={props.tile.Image} alt={props.tile.Name} />
                    <h2 id="simple-modal-title">{props.tile.Name}</h2>
                    <div className="gallery-grid">
                    <ul>
                        <li>Established: {props.tile.Established}</li>
                        <li>Location: {props.tile.Location}</li>
                        <li>Area: {props.tile.Area}</li>
                        <li>Yearly Visitors: {props.tile["Recreation visitors"]}</li>
                    </ul>
                    <p>{props.tile.Description}</p>
                    </div>
                </div>
            </Modal>
        </div>
  );
}

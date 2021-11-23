import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import "./AddMovie.css";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


 function AddMovie({ handleMovie }) {
  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.root}>
      <h2 id="simple-modal-title">Add A Movie</h2>
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      <label>image</label>
      <input onChange={(e) => setImage(e.target.value)} />
      <br />
      <label>Date</label>
      <input onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Type</label>
      <input onChange={(e) => setType(e.target.value)} />
      <br />
      <label>Description</label>
      <input onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Rating</label>
      <input type="number" onChange={(e) => setRating(e.target.value)} />
      <br />
      <button
        onClick={() => {
          handleMovie({ name, image, description, image, rating, date });
          handleClose();
        }}
      >
        AddMovie
      </button>
    </div>
  );

  return (
    <div>
      <AddCircleOutlineIcon
        type="button"
        onClick={handleOpen}
        style={{ fontSize: 80, color: "black", position: "fixed" }}
        className="addBtn"
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div>
        {body}
        </div>
      </Modal>
    </div>
  );
}
export default AddMovie;
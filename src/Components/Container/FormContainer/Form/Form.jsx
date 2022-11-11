import React, { useState } from "react";
import "./Form.css";
import TextArea from "./TextArea/TextArea";
import CardButton from "../../CardContainer/Card/CardButton/CardButton";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onAddNoteHandler }) => {
    const [note, setNote] = useState("");

    const onChangeDataHandler = (event) => {
        event.preventDefault();
        setNote(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAddNoteHandler(note);
        setNote("");
        if(note == ""){
            toast.error('No dejes la nota vacia :P', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return <form className="form">
        <TextArea onChange={onChangeDataHandler} note={note} />
        <CardButton text={"Add"} onClick={onSubmitHandler} />
        <ToastContainer />
    </form>;
};

export default Form;
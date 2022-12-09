import React from "react";
import ShowPatient from "./ShowPatient";
import { Link } from "react-router-dom";
import Title from "./Title";

const NewPatient = () => {
    
    return(
        <>  
            <Title />
            <ShowPatient />
            <Link to="/">Back</Link>
        </>
    )
}

export default NewPatient;
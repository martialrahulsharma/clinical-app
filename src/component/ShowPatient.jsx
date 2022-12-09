import React from "react";
import './ShowPatient.css';
import './PatientForm.css'


const ShowPatient = () => {
    return(
        <>    
            <div className="container">
            <div className="row-container">
                <div className="container-flex">
                    <label className="setSize">Patient Name s/o Father Name</label>
                </div>
                <div className="container-flex">
                    <label className="setSize">Age:</label>
                    30Y
                    <label className="setSize"> Complain of: </label>
                    Fever
                </div>
                <div className="container-flex">
                    <label className="setSize">Doctor's Name: </label>
                    S.P. Sharma
                </div>
                <div className="container-flex">
                    <label className="setSize">Blood Pressure: </label>
                    120/80
                    <label className="setSize"> Pulse Rate: </label>
                    75/Minute
                </div>
                <div className="container-flex">
                    <label className="setSize">Rs.: </label>
                    50
                </div>
                <div className="container-flex">
                    <label className="setSize"> Date: </label>
                    09/12/2022
                </div>
                <div className="container-flex" style={{flex:'100%'}}>
                    <label className="setSize">Medicine Name: </label>
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                    medicine-1
                </div>
            </div>
            </div>
            
        </>
    )
}

export default ShowPatient;
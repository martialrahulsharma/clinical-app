import React, { useState } from "react";
import './PatientForm.css';
import {Link} from "react-router-dom";

const PatientForm = () => {
    const [patientName, setPatientName] = useState("");
    const [patientFatherName, setPatientFatherName] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [patientComplain, setPatientComplain] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [patientBloodPressure, setPatientBloodPressure] = useState("");
    const [patientPulseRate, setPatientPulseRate] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [patientMedicineName, setPatientMedicineName] = useState("");

    const clearDataHandler = () => {
        setPatientName("");
        setPatientFatherName("");
        setPatientAge("");
        setPatientComplain("");
        setDoctorName("");
        setPatientBloodPressure("");
        setPatientPulseRate("");
        setPrice("");
        setDate("");
        setPatientMedicineName("");
    }

    const nameChangeHandler = (event) => {
        setPatientName(event.target.value);
    }

    const fatherNameChangeHandler = event => {
        setPatientFatherName(event.target.value);
    }

    const ageChangeHandler = event => {
        setPatientAge(event.target.value);
    }

    const complainChangeHandler = event => {
        setPatientComplain(event.target.value);
    }

    const doctorNameChangeHandler = event => {
        setDoctorName(event.target.value);
    }

    const bloodPressureChangeHandler = event => {
        setPatientBloodPressure(event.target.value);
    }

    const pulseRateChangeHandler = event => {
        setPatientPulseRate(event.target.value);
    }

    const priceChangeHandler = event => {
        setPrice(event.target.value);
    }

    const dateChangeHandler = event => {
        setDate(event.target.value);
    }
    
    const medicineChangeHandler = event => {
        setPatientMedicineName(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const patientData = {
            patientName: patientName,
            patientFatherName: patientFatherName,
            patientAge: patientAge,
            patientComplain: patientComplain,
            patientBloodPressure: patientBloodPressure,
            patientPulseRate: patientPulseRate,
            patientMedicineName: patientMedicineName,
            doctorName: doctorName,
            price: price,
            date: new Date(date)
        };

        props.onSavePatientData(patientData);
    }
    return(
    <>
    <div className="column-container">
        <div className="row-container heading">
            <h2>Asha Poly Clinic</h2>
        </div>
    <form onSubmit={submitHandler}>
        <div className="row-container">
        <input type="text" placeholder="Patient Name" required value={patientName} onChange={nameChangeHandler}/>
        <input type="text" placeholder="Patient Father Name" required value={patientFatherName} onChange={fatherNameChangeHandler}/>
        <input type="number" placeholder="Age" required value={patientAge} onChange={ageChangeHandler}/> 
        <input type="text" placeholder="Complain of" required value={patientComplain} onChange={complainChangeHandler}/>
        <input type="text" placeholder="Doctor's Name" value={doctorName} onChange={doctorNameChangeHandler}/>
        <input type="text" placeholder="Blood Pressure" value={patientBloodPressure} onChange={bloodPressureChangeHandler}/>
        <input type="text" placeholder="Pulse Rate" value={patientPulseRate}onChange={pulseRateChangeHandler}/>
        <input type="number" placeholder="Price" required value={price}onChange={priceChangeHandler}/>
        <input type="date" required value={date} onChange={dateChangeHandler}/>
        <textarea placeholder="Medicine Name" className="area" rows="5" required value={patientMedicineName}onChange={medicineChangeHandler}/>
        <button type="submit">Submit</button>
        <input type="button" onClick={clearDataHandler} value="Clear" />
        <Link to="/showPatients">Show Patients</Link>
        </div>
    </form>
    </div>
    </>
    )
} 

export default PatientForm;
const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");
const patientAuth = require("../middlewares/patientAuth");
const Appointment = require("../models/appointment");
const Prescription = require("../models/prescription");
const Signup=require("../models/signup");
const Doctor = require("../models/doctor");

router.get("/patient/:appointment_Id/prescription", patientAuth, async (req,res) => {
    const patientId = req.patient._id;
    const appointmentId = req.params.appointment_Id
    console.log(appointmentId)
    try{
        if(!appointmentId){
            console.log('no appointment')
        }
        else{
            const pres = await Prescription.find({ appointmentId: appointmentId });
            const appointment = await Appointment.findById(appointmentId);
            const doctor =await Doctor.findById(appointment.doctorId);
            const user = await Signup.find({email: doctor.email})
            if(pres){
                const temp = {
                    "doctor_name":user[0].name,
                    "doctor_email": doctor.email,
                    "specialist":doctor.doctor_speciality,
                    "appointment_date":appointment.date,
                    "appointment_time":appointment.time,
                    ...pres
                }
                console.log(temp)
                res.send(temp)
        }
    }
}
       
    catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports = router;
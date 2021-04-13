const express = require('express')
require('../controllers/db_controller')

const loginRoute=require('./routers/login');
const doc_sign_up_router = require('./routers/doctor_signup.js')
const add_clinic = require('./routers/add-clinic.js')
<<<<<<< HEAD
const logout = require('./routers/logout')
const doctor = require('./routers/doctors')
=======
const doctorLogout=require('./routers/doctor_logout');

>>>>>>> 51c453d045443ef531537267423d8bea73b4bda4

const patientSignUp=require('./routers/patient_signup');
const patientLogout=require('./routers/patient_logout');
// const patientPrescription=require('./routes/patient_prescription');
const patientUpdateProfile=require('./routers/patient_update_profile');
// const patientAppointment=require('./routes/patient_appointments');

const test=require('./routers/test');

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(test);
app.use(doc_sign_up_router);
app.use(add_clinic);
<<<<<<< HEAD
app.use(doctor);
=======
app.use(doctorLogout);
>>>>>>> 51c453d045443ef531537267423d8bea73b4bda4

app.use(loginRoute);
app.use(logout);
app.use(patientSignUp);
// app.use(patientPrescription);
app.use(patientUpdateProfile);
// app.use(patientAppointment);
app.use(patientLogout);

app.listen(port,()=>{
    console.log('server is up at port at '+port);
})

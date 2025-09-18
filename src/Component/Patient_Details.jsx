import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Patient_Details = () => {
  const { id } = useParams(); // get patient id from URL
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => setPatient(json));
  }, [id]);

  if (!patient) return <h2>Loading...</h2>;

  return (
    <div id="patient-details">
      <h2>Patient Details</h2>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.id + 22}</p>
      <p><strong>Email:</strong> {patient.email}</p>
      <p><strong>Phone:</strong> {patient.phone}</p>
      <p><strong>Website:</strong> {patient.website}</p>
    </div>
  );
};

export default Patient_Details;

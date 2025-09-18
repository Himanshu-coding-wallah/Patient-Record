import React, { useState } from 'react'
import usePatient from './usePatient'
import Patient_Details from './Patient_Details'
import {Link} from 'react-router-dom'

const Patient_List = () => {
  const {data, loading, error} = usePatient();
  const [query, setQuery] = useState("");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  const normalized = query.trim().toLowerCase();

  const filtered = data.filter((p) => {
    const name = p.name?.toLowerCase() ?? "";
    return name.includes(normalized);
  });

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name..."
          style={{ padding: "8px", width: "100%", maxWidth: 360 }}
        />
      </div>


      {filtered.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <div id='patient-list'>
          {filtered.map((patient) => (
            <div
              key={patient.id} className="patient-card">
              <p>
                <strong>Name:</strong> {patient.name}
              </p>
              <p>
                <strong>Age:</strong> {patient.id + 22}
              </p>
              <p>
                <strong>Phone:</strong> {patient.phone}
              </p>
              <Link to={`/Patient_Details/${patient.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Patient_List;
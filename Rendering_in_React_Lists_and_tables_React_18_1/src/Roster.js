import React from "react";

function Roster({ detailed, roster }) {
  return (
    <div>
    {roster.map((student) => (
      <div key={student.id}>
        <p>
          Name: {student.firstName} {student.lastName}
          {detailed && (
            <span>
              , ID: {student.id}, Location: {student.location}
            </span>
          )}
        </p>
      </div>
    ))}
  </div>
  );
}

export default Roster;

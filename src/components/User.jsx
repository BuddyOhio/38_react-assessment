import React from "react";

const User = ({ allEmployee }) => {
  return (
    <section>
      <table className="table__container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {allEmployee.map((employee) => {
            const { id, name, lastname, position } = employee;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default User;

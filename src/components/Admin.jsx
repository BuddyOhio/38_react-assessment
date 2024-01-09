import { useEffect, useState } from "react";

const Admin = ({ allEmployee, addNewEmployee, deleteEmployee }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [saveBtn, setSaveBtn] = useState(false);

  const saveDataClick = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100);

    const newUserData = {
      id: id,
      name: name,
      lastname: lastName,
      position: position,
    };
    console.log(newUserData);
    addNewEmployee(newUserData);

    setName("");
    setLastName("");
    setPosition("");
  };

  useEffect(() => {
    name !== "" && lastName !== "" && position !== ""
      ? setSaveBtn(true)
      : setSaveBtn(false);
  }, [name, lastName, position]);

  return (
    <>
      <div className="input__container">
        <h3 className="admin__title">Create User Hear</h3>
        <form className="form__container">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <button
            onClick={saveDataClick}
            className="save__btn"
            disabled={!saveBtn}
          >
            Save
          </button>
        </form>
      </div>

      <table className="table__container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
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
                <td className="delete__col">
                  <button
                    onClick={() => deleteEmployee(id)}
                    className="delete__btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;

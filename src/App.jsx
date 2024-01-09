import { useState, useEffect } from "react";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import User from "./components/User";
import "./App.css";

const mockEmployees = [
  {
    id: 0,
    name: "Joseph",
    lastname: "Cooper",
    position: "Pilot",
  },
  {
    id: 1,
    name: "Murphy",
    lastname: "Cooper",
    position: "scientist",
  },
  {
    id: 2,
    name: "Worrawut",
    lastname: "P.",
    position: "Pilot",
  },
];

const App = () => {
  const [sector, setSector] = useState("");
  const [allEmployee, setAllEmployee] = useState([]);

  useEffect(() => {
    setAllEmployee(mockEmployees);
  }, []);

  const addNewEmployee = (newData) => {
    const newEmployee = [...allEmployee, newData];
    setAllEmployee(newEmployee);
  };

  const deleteEmployee = (id) => {
    const employees = allEmployee.filter((employee) => employee.id !== id);
    console.log(employees);
    setAllEmployee(employees);
  };

  return (
    <main className="main app">
      <Navbar />

      <section className="section home__container" >
        <div className="home__content">
          <h1 className="home__title">
            Generation Thailand <br />
            {sector === "user"
              ? "Home - User Sector"
              : sector === "admin"
              ? "Home - Admin Sector"
              : "React - Assessment"}
          </h1>

          <div className="button__container">
            <button onClick={() => setSector("user")} className="home__btn">
              User Home Sector
            </button>
            <button onClick={() => setSector("admin")} className="home__btn">
              User Admin Sector
            </button>
          </div>

          <div className="content__container">
            {sector === "user" && <User allEmployee={allEmployee} />}
            {sector === "admin" && (
              <Admin
                allEmployee={allEmployee}
                addNewEmployee={addNewEmployee}
                deleteEmployee={deleteEmployee}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

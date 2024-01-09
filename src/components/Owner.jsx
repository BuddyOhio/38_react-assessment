import React from "react";
import Navbar from "./Navbar";

const Owner = () => {
  return (
    <main className="main owner">
      <Navbar />

      <section className="section owner__container">
        <div className="owner__content">
          <h3 className="owner__title">Bas - Group 9 - 38</h3>
          <div className="picture__container">
            <img
              src="https://img.freepik.com/free-vector/cute-astronaut-meditation-yoga-with-moon-earth-planet-cartoon-vector-icon-illustration-science_138676-6872.jpg?w=1060&t=st=1704776771~exp=1704777371~hmac=8a6a65bde7ae3ee23c2303a3305e388304d1beecefd177ef86028f38914912e3"
              alt="user picture"
            />
          </div>
          <p className="bio__title">Short Biography:</p>
          <p className="bio__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Owner;

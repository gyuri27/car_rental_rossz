import { useEffect, useState } from "react";
///import { Link } from "react-router-dom";


function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  const {graphql, buildSchema} = require("graphql");

  const [carType, setCarType] = useState(null); 
  const [pickUp, setpickUp] = useState(null);
  const [dropOff, setdropOff] = useState(null);
  const [pickTime, setpickTime] = useState(null);
  const [dropTime, setdropTime] = useState(null);

  const handleInputChange = (e) => {
    const {id, value} = e.target;

    if(id === "carType") {
      console.log(id);
      setCarType(value);
    }

    if(id === "pickUp") {
      setpickUp(value);
    }

    if(id === "dropOff") {
      setdropOff(value);
    }

    if(id === "pickTime") {
      setpickTime(value);
    }

    if(id === "dropTime") {
      setdropTime(value);
    }
  };

  const Handlelog = () => {

  const bookcar = buildSchema(`
    type Query {
        carType: String!
        pickUp: String!
        dropOff: String!
        pickTime: String!
        dropTime: String!
    }
  `);

  const rootValue = {
    carType: () => {
      return carType
    }
  };

  const source = "{cartype}"

  console.log(bookcar);


    graphql({
      bookcar, 
      source,
      rootValue,
    }).then(response => {console.log(response)});
  }
     

  return (
    <>
    
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select id = "carType" value={carType} onChange={(e)=> handleInputChange(e)}>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select id = "pickUp" value={pickUp} onChange={(e)=> handleInputChange(e)}>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select id = "dropOff" value={dropOff} onChange={(e)=> handleInputChange(e)}>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="pickTime"
                    value={pickTime} 
                    onChange={(e)=> handleInputChange(e)}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="dropTime"
                    value={dropTime} 
                    onChange={(e)=> handleInputChange(e)}
                    type="date"
                  ></input>
                </div>

                <div class = "fppter">
                  <button onClick={()=>Handlelog()} type="submit" class="btn">Book cars</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  );
}

export default BookCar;
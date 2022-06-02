import React, { useState, useContext, useEffect } from "react";
import Btn from "../UI/Btn";
import Title from "../UI/Title";
import { LoginContext } from "../../Contexts/LoginContext";

function LoginSection(props) {
  const { setIsLogin } = useContext(LoginContext);
  const [bookNr, setBookNr] = useState();
  const [wrongPass, setWrongPass] = useState(false);
  const [ guestDb, setGuestDb] = useState([])
  let defaultPassword = "login";

  const FAELLESTIVAL_RESTDB_URL = import.meta.env.VITE_FAEL_SEC_RESTDB_URL;
  const FAELLESTIVAL_RESTDB_KEY = import.meta.env.VITE_FAEL_SEC_RESTDB_KEY;



  useEffect(() => {

    fetch(FAELLESTIVAL_RESTDB_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-apikey":  FAELLESTIVAL_RESTDB_KEY,
      },
    })
    .then((e) => e.json())
    .then((e) => setGuestDb(e));
    }, []);



  function closeLogin() {
    props.setShowLogin(false);
  }
  function openFestApp(e) {
    e.preventDefault();
    if (bookNr == defaultPassword) {
      setIsLogin(true);
      console.log(guestName);
      console.log(bookNr);
    } else {
    guestDb.map((booking) => bookNr == booking.id ?        setIsLogin(true) :   setWrongPass(true))
    }
  }


  return (
    <section className="loginSection">
      <Btn className="closeBtn" content="&#10006;" action={closeLogin} />
      <div className="loginContainer">
        <Title
          content="Log In to Access the Faellestival App"
          className="loginTitle gradientTxt"
        />
        <form action="">
          <label htmlFor="">
            <span className="gradientTxt"> Your Name:</span>
            <input
              id="loginInput"
              type="text"
              name="guestName"
              onChange={(e) => props.setGuestName(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <span className="gradientTxt">Booking Number:</span>
            <input
              id="loginInput"
              type="text"
              name="bookNr"
              onChange={(e) => setBookNr(e.target.value)}
            />
            {wrongPass && (
              <span className="wrongPass">Booking Number Incorrect</span>
            )}
          </label>
          <Btn className="primBtn" action={openFestApp} content="Log In" />
        </form>
      </div>
    </section>
  );
}

export default LoginSection;

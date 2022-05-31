import React, {useState, useContext} from 'react';
import Btn from "../UI/Btn";
import Title from "../UI/Title";
import { LoginContext } from "../../Contexts/LoginContext";


function LoginSection(props) {
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const [bookNr, setBookNr] = useState();
    const [wrongPass, setWrongPass] = useState(false);

    let formAuthNr = "login";

    function closeLogin() {
        props.setShowLogin(false);
    }
    function openFestApp() {
        // setIsLogin(true);
        // console.log(guestName);
        // console.log(bookNr);
        if (bookNr == formAuthNr) {

            setIsLogin(true);
            console.log(guestName);
            console.log(bookNr);
        } else {
            console.log("passwordincorrect");
            setWrongPass(true);
        }
    }
    return (
        <section className="loginSection">
            <Btn className="closeBtn" content="&#10006;" action={closeLogin} />
            <div className="loginContainer">
                <Title content="Log In to Access the Faellestival App" className="loginTitle" />
                 <form action="">
                     <label htmlFor="">
                         Your Name:
                         <input type="text" name="guestName" onChange={(e) => props.setGuestName(e.target.value)}/>
                     </label>
                     <label htmlFor="">
                         Booking Number:
                         <input type="text" name="bookNr" onChange={(e) => setBookNr(e.target.value)}/>
                         {wrongPass && <span className="wrongPass" >Booking Number Incorrect</span>}
                     </label>
                 </form>
                 </div>
            <Btn action={openFestApp} content="Log In" />
        </section>
    )
}

export default LoginSection

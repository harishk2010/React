import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
    const [loginButton,setloginButton]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />

            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <button className="login-btn" onClick={()=>{
                        if(loginButton==="Logout"){
                            setloginButton("Login")
                        }else{
                            setloginButton("Logout")
                        }
                       

                    }}>{loginButton}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;
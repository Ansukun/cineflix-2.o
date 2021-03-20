import{ React, useState,useEffect} from 'react'
import "./LoginScreen.css"
import bg from "../screens/baground.jpg"
import cinelfix from "../cineflix.png"
import SignupScreen from  "../screens/SignupScreen"
import TabComponents from "../TabComponents"
function LoginScreen() {
    const [signIn,setSignIn] =  useState(false);
    return (
        <div className = "loginScreen" >
        <div className = "LoginScreen__background">
                <img  className = "loginScreen__logo"src= {cinelfix} alt = "cineflix" />
                <button  onClick ={() => setSignIn(true)}  className ="loginScreen__button">
                    sign in
                </button>
                <div className = "loginScreen__gradient"/>
            </div>
            <div className = "loginScreen__body">
                {signIn? (
                <SignupScreen/>
                ):
                (
                    <>
                    <h1 className = "title">Unlimited films,Tv programmes and more Hurry up</h1>
                     <h2 className = "title">watch anywhere cancel anytime </h2>
                     <h3 className = "title"> ready to watch enter your email to create or restart your membership</h3>
                     <div className = "loginScreen__input">
                    <form>
                        <input type = "email" placeholder = "email Address" />
                        <button onClick ={() => setSignIn(true)} className = "login__button">
                            Get Started
                        </button>
                    </form>
                     
                     </div>
                     </>
                )}
                <TabComponents/>
            </div>

        </div>
    )
}

export default LoginScreen
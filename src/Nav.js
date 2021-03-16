import {React,useState,useEffect} from 'react'
import "./Nav.css"
import cinelfix from "./cineflix.png"
import {useSelector} from "react-redux"
import { selectUser } from './features/counter/userSlice'
import  {animateScroll as scroll } from "react-scroll";
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core'
function Nav() {

    const [show,handleshow] = useState(false);
    const history = useHistory();
    const user = useSelector(selectUser);

    const toggleHome = () => {
        scroll.scrollToTop();
      };
    
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleshow(true)
        }
        else{
            handleshow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => {
            window.removeEventListener("scroll" ,transitionNavBar)
        }
    }, [])
    return (
    <div className = {`nav  ${show&&'nav__black'}`}>
            <div className = "nav__contents">
            
            <img  className = "nav__logo"   onClick ={() => history.push("/")} src = {cinelfix} alt = "no"/>
            <span   onClick ={() => history.push("/Tvscreen")} className = "tv__shows">Tv shows</span>
             <div className = "nav__avatar">
                 <img className = "nav__avatar" onClick ={() => history.push("/profile")} src = "https://i.pinimg.com/736x/d2/b0/bf/d2b0bf0b5b31b1d36c7edfcaa93ff98c.jpg" />
             
             </div>
            
            </div>

            
            
        </div>
    )
}

export default Nav
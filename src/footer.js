import React from 'react'
import "./footer.css"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
function footer() {
    return (
      <div className = "footer" >
        <div className = "footer-logo">
        <a href="https://www.w3schools.com"><InstagramIcon style ={{ color: "white", marginRight : 10 }}/></a>
        <a href="https://www.facebook.com/"><FacebookIcon style={{ color: "white", marginRight : 10 }}/></a>
        <a href="https://twitter.com/?lang=en"><TwitterIcon  style ={{ color: "white", marginRight : 10 }}/></a>
        <a href="https://www.instagram.com/"><WhatsAppIcon style ={{ color: "white", marginRight : 10 }}/></a>
        <a href="https://mail.google.com"><EmailIcon style ={{ color: "white", marginRight : 10 }}/></a>
        </div>
        

<div className = "copyright">
  @copyright AnsukunGouda
</div>


    </div>
    )
}

export default footer
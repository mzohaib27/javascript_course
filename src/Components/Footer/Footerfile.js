
import React from "react";

import Sample1 from "../Sample1";




const Footer = () => {
  return (
    <div className="footer">
       <div className="logo">FURRION</div>
      <div className="div1">
        <div id="name1"> Support</div>
      <ul>
     <li>Contact Us</li>
     <li>FAQ</li>
     <li>Downloads</li>
     <li>Locate A Dealer</li>
     <li>Product Registration</li>
     <li>Spare Parts</li>

      </ul>
      </div>
      
      <div className="div2">
      <div id="name2"> Furion </div>
      <ul>
     <li>About Furior</li>
     <li>Furior Design</li>
     <li>Career</li>
     <li>News Room</li>
     <li>Furion Access</li>
     <li>Affiliate</li>

      </ul>
      
      </div>

    <div>
      <img src="https://static.vecteezy.com/system/resources/previews/000/547/340/original/envelope-mail-icon-vector-illustration.jpg" height={15} width={18} alt='' />
        &nbsp;
       Stay upto date on the latest from Furrion
       
      
    </div> 
    <Sample1 />
    </div>
  );
};

export default Footer;

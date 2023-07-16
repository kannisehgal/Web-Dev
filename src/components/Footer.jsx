import React from 'react'
import {HashLink} from "react-router-hash-link";
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillPhone
} from "react-icons/ai";

const Footer = () => {
  return ( <footer>
    
    <div>
       <h1>Web Developer</h1> 
       <p>@all right reserved</p>
    </div>

    <div>
      <h5>Follow Us</h5>
      <div>
        {/* <a href="https://web.whatsapp.com/" target={"blank"}>Facebook</a>
        <a href="https://web.whatsapp.com/" target={"blank"}>Instagram</a>
        <a href="https://web.whatsapp.com/" target={"blank"}>Youtube</a>
        <a href="https://wa.me/9999481211" target={"blank"}>WhatsApp</a> */}
        

        {/* <AiOutlineFacebook /> */}
        {/* <HashLink to={"https://m.facebook.com/Herbal-Mandir-Ayurvedic-Store-1968479030065849/"}><p>Facebook</p></HashLink> */}
        {/* <HashLink to={"https://www.facebook.com/"}><p>Facebook</p></HashLink> */}

        {/* <AiFillInstagram /> */}
        {/* <HashLink to={"https://www.facebook.com/"}><p>Instagram</p></HashLink> */}

        {/* <AiFillYoutube /> */}
        {/* <HashLink to={"https://www.facebook.com/"}><p>Youtube</p></HashLink> */}

        <AiOutlineWhatsApp />
        <HashLink to={"https://wa.me/9999481211"}><p>WhatsApp</p></HashLink>

        <AiFillPhone />
        <HashLink to={"tel:+91-999-948-1211"}><p>Call</p></HashLink>

        {/* 
        <a
          href="https://wa.me/9999481211"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>

      {/* 
        <a
        // href="https://m.facebook.com/Herbal-Mandir-Ayurvedic-Store-1968479030065849/"
        class="facebook_float"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-facebook-official fa_custom fa-2x"></i>
      </a>

      <a href="tel:+91-999-948-1211"
        class="phone_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class='fa fa-phone green-color'></i>
      </a> */}
      </div>
    </div>
  </footer>
  )
}

export default Footer
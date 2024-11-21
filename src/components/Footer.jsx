import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    
          <footer>
              
              <div>
                  <h1>memestore</h1>
                  <p>@ all right reserved</p>
              </div>
              <div>
                  <h5>Follow us</h5>
                  <div>
                      <a href=""target={"blank"} ><AiFillFacebook/></a>
                      <a href="https://www.instagram.com/stxxcsxnny/" target={'blank'}>< AiFillInstagram/></a>
                      <a href="https://www.twitter.com/"target={'blank'}>< AiFillTwitterCircle/></a>
                      <a href="https://www.youtube.com/"target={'blank'}><AiFillYoutube/></a>
                  </div>
              </div>
        </footer>
      
  )
}

export default Footer
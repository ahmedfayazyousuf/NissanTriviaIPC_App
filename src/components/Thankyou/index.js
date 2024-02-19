import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../Styles&Assets/style.css';
import tick from '../Styles&Assets/tick2.png';
import frame from '../Styles&Assets/LockupFrame.png';

import Instagram from '../Styles&Assets/Socials/Instagram.png';
import TikTok from '../Styles&Assets/Socials/TikTok.png';
import YouTube from '../Styles&Assets/Socials/YouTube.png';
import Facebook from '../Styles&Assets/Socials/Facebook.png';
import Twitter from '../Styles&Assets/Socials/TwitterX.png';

import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';

const Instructions = () => {
  const location = useLocation();
  const userId = location.state.id;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const Users = firebase.firestore().collection("Users");

    Users.doc(userId).get()
      .then((doc) => {
        if (doc.exists) {
          const user = doc.data();
          setUserData(user);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [userId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "flex-start", alignItems: 'center', background: 'white' }}>

      <div style={{ display: 'flex', flexDirection: 'column', width: '40%', gap: '5px', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px' }}>
          <img style={{ width: '120px' }} src={frame} alt="Nissan Logo" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '20px' }}>
          {userData && <h1 className="header" style={{ color: 'black' }}>Thank You, {userData.Name}!</h1>}
          <h1 className="header" style={{ color: 'black', marginTop: '0px' }}>Keep Defying Ordinary</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px' }}>
          <img style={{ width: '150px' }} src={tick} alt="Tick Logo" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '10px' }}>
            <a href="https://youtube.com/@NissanMiddleEast?si=GOF1xHptihDcuKl6" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src={YouTube} alt='YouTube Logo' style={{width: '40px'}}></img>
            </a>
            <a href="https://www.instagram.com/nissanmiddleeast?igsh=Z3ZxZnV1ZGNzZzdi" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <img src={Instagram} alt='InstagramLogo' style={{width: '40px'}}></img>
            </a>
            <a href="https://www.facebook.com/NissanME?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <img src={Facebook} alt='FacebookLogo' style={{width: '40px'}}></img>
            </a>
            <a href="https://www.tiktok.com/@nissanarabia?_t=8k0X4640tg0&_r=1" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <img src={TikTok} alt='TikTokLogo' style={{width: '40px'}}></img>
            </a>
            <a href="https://x.com/nissanme?s=21&t=gu4UPH8VfsjbPuFVoiwerg" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <img src={Twitter} alt='TwitterLogo' style={{width: '40px'}}></img>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Instructions;

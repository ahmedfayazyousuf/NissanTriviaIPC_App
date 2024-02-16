import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../Styles&Assets/style.css';
import tick from '../Styles&Assets/tick2.png';
import frame from '../Styles&Assets/LockupFrame.png';
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

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '10px' }}>
          <h3 className="header" style={{ color: 'black', fontSize: '20px' }}>Keep Defying Ordinary.</h3>
          {/* <h3 className="header" style={{ color: 'black', fontSize: '20px', marginTop: '-20px' }}>Watch, Participate & Win.</h3> */}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '20px' }}>
          {userData && <h1 className="header" style={{ color: 'black' }}>Thank You, {userData.Name}!</h1>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px' }}>
          <img style={{ width: '200px' }} src={tick} alt="Nissan Logo" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Instructions;

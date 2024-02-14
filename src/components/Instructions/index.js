import React, { useState, useEffect } from 'react';
import '../Styles&Assets/style.css';
import logo2 from '../Styles&Assets/logo2.png';
// import tick from '../Styles&Assets/tick.png';
import frame from '../Styles&Assets/LockupFrame.png';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Instructions = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state.id;
    // eslint-disable-next-line
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from Firebase using userId
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

    function handleSubmit(){
        navigate("/Video1", { state: { id: userId, userData } });
    }



    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"flex-start", alignItems: 'center', background: 'white'}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'flex-start', height: '100vh'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px', marginBottom: '10px'}}>
                    <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
                    <h1 className="header" style={{color: 'black'}} >INSTRUCTIONS</h1>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    {userData && <p style={{color: 'black'}}>Welcome, {userData.Name}!</p>}
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    <p style={{color: 'black', fontStyle:'italic', fontSize: '12px'}}>Blah Blah</p>
                </div>

                {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '130px', marginTop: '30px'}} src={tick} alt="Geely Logo"/>
                </div> */}

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                    <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                </div>

                <button onClick={handleSubmit} style={{width:"220px", marginTop: '40px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} >
                    BEGIN
                </button>

            </div>
        </div>
    )
}

export default Instructions
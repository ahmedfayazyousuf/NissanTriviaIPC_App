import React, { useState, useEffect } from 'react';
import '../Styles&Assets/style.css';
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

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px'}}>
                    <img style={{width: '320px'}} src={frame} alt="Nissan Logo"/>
                </div>
                

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '0px', marginBottom: '10px'}}>
                    {userData && <p style={{color: 'black', fontSize: '20px', fontWeight: '900'}}>Welcome, {userData.Name}!</p>}
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    <p style={{color: 'black'}}>Embark on a trivia adventure! Get ready to answer questions after watching four informative videos.</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    <p style={{color: 'black'}}> Score points for correct answers and aim for the top spot on the leaderboard.</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    <p style={{color: 'black'}}>Challenge your knowledge, beat your own score, and become the ultimate trivia champion! Good luck!</p>
                </div>

                <button onClick={handleSubmit} style={{width:"220px", marginTop: '25px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} >
                    BEGIN
                </button>

            </div>
        </div>
    )
}

export default Instructions
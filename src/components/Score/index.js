import React, { useState, useEffect } from 'react';
import '../Styles&Assets/style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
// import logo2 from '../Styles&Assets/logo2.png';
import frame from '../Styles&Assets/LockupFrame.png';
import tickk from '../Styles&Assets/tick.png'
import cross from '../Styles&Assets/cross.png'
import clock from '../Styles&Assets/clock.png'

const Score = () => {
    
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
        navigate("/ThankYou", { state: { id: userId, userData } });
    }


    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"flex-start", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'flex-start', height: '100vh', backgroundColor: 'white'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px', marginBottom: '10px'}}>
                    <img style={{width: '320px'}} src={frame} alt="Nissan Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-30px'}}>
                    <h1 className="header" style={{color: 'transparent'}}>TRIVIA GAME</h1>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '300px', padding: '10px', paddingBottom: '10px', border: '1px solid white', borderBottom: 'none', backgroundColor: 'black'}}>
                        <div style={{width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img style={{width: '40px'}} src={tickk} alt="Nissan Logo"/>
                        </div>

                        <div style={{width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={{color: 'white', fontWeight: '900'}}>CORRECT</p>
                        </div>

                        <div style={{width: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            {userData && <p style={{color: 'white', fontWeight: '900'}}>{userData.Score}</p>}
                        </div>
                    </div>

                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '300px', padding: '10px', paddingBottom: '10px', border: '1px solid white', borderBottom: 'none', borderTop: 'none', backgroundColor: 'black'}}>
                        <div style={{width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img style={{width: '40px'}} src={cross} alt="Nissan Logo"/>
                        </div>

                        <div style={{width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={{color: 'white', fontWeight: '900'}}>INCORRECT</p>
                        </div>

                        <div style={{width: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            {userData && <p style={{color: 'white', fontWeight: '900'}}>{(4-userData.Score)}</p>}
                        </div>
                    </div>


                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '300px', padding: '10px', paddingBottom: '10px', border: '1px solid white', borderTop: 'none', backgroundColor: 'black'}}>
                        <div style={{width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img style={{width: '40px'}} src={clock} alt="Nissan Logo"/>
                        </div>

                        <div style={{width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={{color: 'white', fontWeight: '900'}}>TIME TAKEN</p>
                        </div>

                        <div style={{width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={{color: 'white', fontWeight: '900'}}>{60-location.state.time}</p>
                        </div>
                    </div>


                    <button className="grab" style={{width:"220px", marginTop: '40px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} onClick={handleSubmit} >SUBMIT</button>
                    

                    {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                        <img style={{width: '200px'}} src={logo2} alt="Nissan Logo"/>
                    </div> */}



                </div>
            </div>
        </div>
    )
}

export default Score
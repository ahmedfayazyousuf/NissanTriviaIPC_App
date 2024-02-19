import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Video1 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, userData } = location.state;
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("userId in Video1:", id); 
        console.log("userData in Video1 useEffect:", userData); 
        const Users = firebase.firestore().collection("Users");

        Users.doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    const fetchedUser = doc.data();
                    setUser(fetchedUser);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id, userData]); 

    function handleSubmit() {
        console.log("userData in Video1 handleSubmit:", userData); 
        navigate("/Question1", { state: { id, userData } });
    }

    console.log("user in Video1:", user); 
    
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

            <div style={{ width: '100vw', height: '10vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{ color: 'black', fontWeight: '900'}}>Customer Safety First!</p>
            </div>

            <div style={{ width: '100vw', height: '60vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ReactPlayer
                    url={`${process.env.PUBLIC_URL}/Videos/Episode1Bilal.mp4`}
                    playing
                    loop
                    controls
                    width="100%"
                    height="100%"
                />
            </div>

            <div style={{ width: '100vw', height: '10vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                <button onClick={handleSubmit} style={{width:"220px", marginTop: '40px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} >
                    Proceed
                </button>
            </div>
            

            
        </div>
    );
};

export default Video1;

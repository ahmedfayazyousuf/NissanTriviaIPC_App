import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Video2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, userData } = location.state;
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("userId in Video2:", id); // Log the userId to check if it's correct
        console.log("userData in Video2 useEffect:", userData); // Log userData to check if it's passed correctly
        // Fetch user data from Firebase using userId
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
        console.log("userData in Video2 handleSubmit:", userData); // Log userData before navigating
        navigate("/Question2", { state: { id, userData } });
    }

    console.log("user in Video2:", user); // Log user to check if it's fetched correctly

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            <div style={{ width: '100vw', height: '10vh', overflow: 'hidden', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {userData && <p style={{ color: 'yellow' }}>Welcome, {userData.Name}!</p>}
            </div>

            <div style={{ width: '100vw', height: '80vh', overflow: 'hidden', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ReactPlayer
                    url={`${process.env.PUBLIC_URL}/Videos/Episode2Youssef.mp4`}
                    playing
                    loop
                    controls
                    width="100%"
                    height="100%"
                />
            </div>

            <div style={{ width: '100vw', height: '10vh', overflow: 'hidden', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={handleSubmit} style={{ backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab',}}>
                    Proceed
                </button>
            </div>
            

            
        </div>
    );
};

export default Video2;

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Video4 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, userData } = location.state;
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("userId in Video4:", id); // Log the userId to check if it's correct
        console.log("userData in Video4 useEffect:", userData); // Log userData to check if it's passed correctly
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
        console.log("userData in Video4 handleSubmit:", userData); // Log userData before navigating
        navigate("/Question4", { state: { id, userData } });
    }

    console.log("user in Video4:", user); // Log user to check if it's fetched correctly

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

            <div style={{ width: '100vw', height: '10vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* {userData && <p style={{ color: 'black', fontWeight: '900'}}>{userData.Name}</p>} */}
                <p style={{ color: 'black', fontWeight: '900'}}>For the Long Run</p>
            </div>

            <div style={{ width: '100vw', height: '60vh', overflow: 'hidden', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ReactPlayer
                    url={`${process.env.PUBLIC_URL}/Videos/Episode4Amna.mp4`}
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

export default Video4;

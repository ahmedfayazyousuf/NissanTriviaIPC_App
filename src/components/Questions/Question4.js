import frame from '../Styles&Assets/LockupFrame.png'
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Question4 = () => {
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
        const Users = firebase.firestore().collection("Users");
        const finishTime = firebase.firestore.Timestamp.now();

        if (document.getElementById('option1').style.backgroundColor === 'transparent' && document.getElementById('option2').style.backgroundColor === 'transparent' && document.getElementById('option3').style.backgroundColor === 'transparent' && document.getElementById('option4').style.backgroundColor === 'transparent') {
            document.getElementById("error").innerHTML = "PLEASE CHOOSE AN OPTION";
            console.log("BOOMER");
            return;
        }

        
        if (document.getElementById('option1').style.backgroundColor === 'black' || document.getElementById('option2').style.backgroundColor === 'black' || document.getElementById('option3').style.backgroundColor === 'black' || document.getElementById('option4').style.backgroundColor === 'black') {
                document.getElementById("SubmitButton").innerHTML  = "Loading...";

                if (document.getElementById('option1').style.backgroundColor === 'black') {
                    Users.doc(id).update({
                        Score: firebase.firestore.FieldValue.increment(1),
                        Question4: 'Correct'
                    })
                    .then(() => {
                        console.log("Score updated successfully!");
                    })
                    .catch((error) => {
                        console.error("Error updating score:", error);
                    });
                }
                Users.doc(id).update({
                    FinishTime: finishTime,
                })
                .then(() => {
                    console.log("FinishTime updated successfully!");
                    Users.doc(id).get()
                        .then((doc) => {
                            if (doc.exists) {
                                const user = doc.data();
                                const startTime = user.StartTime && user.StartTime.toDate();
                                console.log("before time diff");
                                if (startTime) {
                                    const timeDifferenceInSeconds = Math.floor((finishTime.toMillis() - startTime.getTime()) / 1000);
            
                                    console.log(timeDifferenceInSeconds);
                                    console.log("after time diff");
            
                                    Users.doc(id).update({
                                        TimeTaken: timeDifferenceInSeconds,
                                    })
                                    .then(() => {
                                        console.log("TimeTaken updated successfully!");
                                        navigate("/Score", { state: { id, userData } });
                                        navigate(0);
                                    })
                                    .catch((error) => {
                                        console.error("Error updating TimeTaken:", error);
                                    });
                                } else {
                                    console.log("StartTime not available.");
                                }
                            } else {
                                console.log("No such document!");
                            }
                        })
                        .catch((error) => {
                            console.log("Error getting document:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error updating FinishTime:", error);
                });
            // navigate("/Score", { state: { id, userData } });
            // navigate(0);
        }
    }
    
    console.log("user in Video1:", user); 

    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "black";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option3').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
        }

        if(e === 'option3'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
        }

        if(e === 'option4'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "black";
        }
    }
 

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"flex-start", alignItems:"center", backgroundColor: 'white'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'flex-start', height: '100vh'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px'}}>
                <img style={{width: '120px'}} src={frame} alt="Nissan Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-20px'}}>
                {userData && <p style={{ color: 'black' }}>{userData.Name}, please answer the <br></br> following question:</p>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p id='qn' style={{fontSize: '15px', color: 'black'}}>What is the first indicator you notice to differentiate genuine from fake?</p>
            </div>  

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '350px', marginTop: '15px'}}>
                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"160px", margin: '10px', height: '60px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Packaging</button>
                        <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"160px", margin: '10px', height: '60px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Quality</button>
                    </div>

                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"160px", margin: '10px', height: '60px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Part label</button>
                        <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"160px", margin: '10px', height: '60px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>None of the above</button>
                    </div>
            </div>

            <div style={{width: '300px', height: '40px', padding: '0', margin: '0'}}>
                <p id="error" style={{color: 'red', padding: '0', margin: '0', fontSize: '10px'}}></p>
            </div>

            <button className="grab" id='SubmitButton' style={{width:"220px", marginTop: '-15px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} onClick={handleSubmit}>NEXT</button>
            
        </div>
    </div>
)
}

export default Question4
import logo2 from '../Styles&Assets/logo2.png';
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
        console.log("userId in Video1:", id); // Log the userId to check if it's correct
        console.log("userData in Video1 useEffect:", userData); // Log userData to check if it's passed correctly
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
        const Users = firebase.firestore().collection("Users");
        // Assuming the correct answer is option1
        if (document.getElementById('option1').style.backgroundColor === 'white') {
            // Increment the Score field by 1
            Users.doc(id).update({
                Score: firebase.firestore.FieldValue.increment(1),
            })
            .then(() => {
                console.log("Score updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating score:", error);
            });
        }

        // Your existing code for navigation
        navigate("/Score", { state: { id, userData } });
    }

    console.log("user in Video1:", user); // Log user to check if it's fetched correctly

    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "white";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option3').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
        }

        if(e === 'option3'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
        }

        if(e === 'option4'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "white";
        }
    }
 

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px'}}>
                <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-20px'}}>
                <h1 className="header" >TRIVIA GAME</h1>
                {userData && <p style={{ color: 'yellow' }}>Welcome, {userData.Name}!</p>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p id='qn' style={{fontSize: '15px', color: 'white'}} >How are you? Q4</p>
            </div>  

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '350px', marginTop: '15px'}}>
                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>opt1</button>
                        <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>opt2</button>
                    </div>

                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>opt3</button>
                        <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>opt4</button>
                    </div>
            </div>

            <button className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}} onClick={handleSubmit}>NEXT</button>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
            
        </div>
    </div>
)
}

export default Question4
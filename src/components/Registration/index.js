import logo2 from '../Styles&Assets/logo2.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import firebase from '../../firebase';
import '../Styles&Assets/style.css';
import frame from '../Styles&Assets/LockupFrame.png'

const Registration = () =>{

    const history = useNavigate();
    // eslint-disable-next-line
    const [select, setSelect] = useState('')

    function handleSubmit(){

        const Users = firebase.firestore().collection("Users");

        const name = document.getElementById('Name').value
        const email = document.getElementById('email').value
        const number = document.getElementById('no').value
        // eslint-disable-next-line
        const type = "Guest"

        var length = document.getElementById("Name").value.length
        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (document.getElementById("Name").value === "" ||  length < 3)
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID NAME"
            return;
        }

        if (document.getElementById("email").value === "" || document.getElementById("email").value.match(!validRegex))
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID EMAIL"
            return;
        }

        if (document.getElementById("no").value === "" || document.getElementById("no").value.length > 13 || document.getElementById("no").value.length < 9)
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID PHONE NUMBER";
            return;
        }

        else{
            Users.add({
                Name:name,
                Email:email,
                Number:number,
                Score:0,
                Time: firebase.firestore.FieldValue.serverTimestamp()
            }).then(doc =>{
                // history("/question",{state:{id:doc.id}})
                history("/Instructions", {state:{id:doc.id}})
                
            })
            console.log(name,email,number,select)
           ;
        }
    
    }

    return(
        <>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                        <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                        <h1 className="header" style={{color: 'transparent'}}>REGISTRATION</h1>
                    </div>

                    <div className="inputdiv">
                        <input type="text" placeholder='NAME' id="Name" style={{textAlign: 'center', background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
                    </div>
                    
                    <div className="inputdiv">
                        <input type="email" placeholder='EMAIL' id='email' style={{textAlign: 'center',background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                    </div>

                    <div className="inputdiv">
                        <input  type="number" placeholder='971 xx xxx xxxx' id='no' style={{textAlign: 'center', background:"transparent", border:"1px solid black", width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                    </div>

                    <div style={{width: '300px', height: '20px', padding: '0', margin: '0'}}>
                        <p id="error" style={{color: 'red', padding: '0', margin: '0', fontSize: '10px'}}></p>
                    </div>

                    <button onClick={handleSubmit}  style={{width:"200px", height: '35px', marginTop: '20px', margin: '10px', borderRadius: '10px', backgroundColor: 'white'}}  >
                        SUBMIT
                    </button>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                        <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Registration
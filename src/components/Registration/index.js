import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import firebase from '../../firebase';
import '../Styles&Assets/style.css';
import frame from '../Styles&Assets/NissanLogo.png'

const Registration = () =>{
    const history = useNavigate();
    // eslint-disable-next-line
    const [select, setSelect] = useState('')

    function handleSubmit(){
        const dropdownValue = select; // Get the selected value from the dropdown

        const Users = firebase.firestore().collection("Users");

        const name = document.getElementById('Name').value
        const email = document.getElementById('email').value
        const number = document.getElementById('no').value

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

        if (document.getElementById("entity").value === "" || document.getElementById("entity").value.match(!validRegex))
        {
            document.getElementById("error").innerHTML = "PLEASE SELECT AN ENTITY"
            return;
        }

        else{
            document.getElementById("SubmitButton").innerHTML  = "Loading...";
            Users.add({
                Name:name,
                Email:email,
                Number:number,
                Score:0,
                StartTime: firebase.firestore.FieldValue.serverTimestamp(),
                Entity: dropdownValue, // Save the selected dropdown value to Firestore
            }).then(doc =>{
                history("/Instructions", {state:{id:doc.id}})
                
            })
            console.log(name,email,number,select)
           ;
        }
    }

    const handleDropdownChange = (event) => {
        setSelect(event.target.value);
      };

    return(
        <>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'flex-start', height: '100vh'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px'}}>
                        <img style={{width: '120px'}} src={frame} alt="Nissan Logo"/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                        <h3 className="header" style={{color: 'black', fontSize: '20px'}}>IPR Educational Content</h3>
                        <h3 className="header" style={{color: 'black', fontSize: '20px', marginTop: '-20px'}}>Watch, Participate & Win.</h3>
                    </div>

                    <div style={{width: '80vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px'}}>

                        <div className="inputdiv">
                            <input type="text" placeholder='NAME' id="Name" style={{textAlign: 'center', background:"transparent", border:"1px solid black", marginBottom:'15px', width:"80vw", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
                        </div>
                        
                        <div className="inputdiv">
                            <input type="email" placeholder='EMAIL' id='email' style={{textAlign: 'center',background:"transparent", border:"1px solid black", marginBottom:'15px', width:"80vw", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                        </div>

                        <div className="inputdiv">
                            <input  type="number" placeholder='PHONE NUMBER' id='no' style={{textAlign: 'center',background:"transparent", border:"1px solid black", marginBottom:'15px', width:"80vw", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                        </div>

                        <div className="inputdiv"> 
                            <select value={select} onChange={handleDropdownChange} id="entity" style={{ textAlign: 'center', background: 'transparent', border: '1px solid black', marginBottom: '15px', width: '85vw', height: '40px', color: 'black', padding: '10px', paddingRight: '10px', backgroundColor: 'white', }} >
                                <option value="" disabled>SELECT ENTITY</option>
                                <option value="Ministry of Interior">Ministry of Interior</option>  
                                <option value="Ministry of Economy">Ministry of Economy</option>
                                <option value="Dubai Police">Dubai Police</option>
                                <option value="Dubai Customs">Dubai Customs</option>
                                <option value="Interpol">Interpol</option>
                                <option value="Brand Owners' Protection Group">Brand Owners' Protection Group</option>
                                <option value="SAM IP">SAM IP</option>
                                <option value="Al Hamad Group of Companies">Al Hamad Group of Companies</option>
                                <option value="EIPA">EIPA</option>
                                <option value="IP Crime College Investigators">IP Crime College Investigators</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                    </div>

                    

                    <div style={{width: '300px', height: '20px', padding: '0', margin: '0'}}>
                        <p id="error" style={{color: 'red', padding: '0', margin: '0', fontSize: '10px'}}></p>
                    </div>

                    <button onClick={handleSubmit} id='SubmitButton' style={{width:"220px", marginTop: '10px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'black', backgroundColor: 'white', cursor: 'grab'}} >
                        SUBMIT
                    </button>

                </div>

            </div>
        </>
    )
}

export default Registration
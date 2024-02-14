import logo2 from '../Styles&Assets/logo2.png';
import frame from '../Styles&Assets/LockupFrame.png';
import tickk from '../Styles&Assets/tickk.png'
import cross from '../Styles&Assets/cross.png'
import clock from '../Styles&Assets/clock.png'
import { useLocation } from 'react-router-dom';

const Score = () => {
    const location = useLocation();
    
    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px'}}>
                    <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-30px'}}>
                    <h1 className="header" >TRIVIA GAME</h1>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '300px', padding: '10px', paddingBottom: '10px', border: '1px solid white', borderBottom: 'none', backgroundColor: '#002277'}}>
                        
                        <div style={{width: '50px'}}>
                            <img style={{width: '50px'}} src={tickk} alt="Geely Logo"/>
                        </div>

                        <div style={{width: '200px'}}>
                            <p style={{color: '#74B4F3', fontWeight: '900'}}>CORRECT</p>
                        </div>

                        <div style={{width: '50px'}}>
                            <p style={{color: '#74B4F3', fontWeight: '900'}}>{location.state.score}</p>
                        </div>
                    </div>

                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '300px', padding: '10px', paddingBottom: '10px', border: '1px solid white', borderBottom: 'none', borderTop: 'none', backgroundColor: '#002277'}}>
                    
                        <div style={{width: '50px'}}>
                            <img style={{width: '50px'}} src={cross} alt="Geely Logo"/>
                        </div>

                        <div style={{width: '200px'}}>
                            <p style={{color: '#74B4F3', fontWeight: '900'}}>INCORRECT</p>
                        </div>

                        <div style={{width: '50px'}}>
                            <p style={{color: '#74B4F3', fontWeight: '900'}}>{(4-location.state.score)}</p>
                        </div>
                    </div>


                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '300px', padding: '10px', paddingBottom: '10px', border: '1px solid white', borderTop: 'none', backgroundColor: '#002277'}}>
                    
                        <div style={{width: '50px'}}>
                            <img style={{width: '50px'}} src={clock} alt="Geely Logo"/>
                        </div>

                        <div style={{width: '200px'}}>
                            <p style={{color: '#74B4F3', fontWeight: '900'}}>TIME TAKEN</p>
                        </div>

                        <div style={{width: '50px'}}>
                            <p style={{color: '#74B4F3', fontWeight: '900'}}>{60-location.state.time}</p>
                        </div>
                    </div>

                    <button className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>SUBMIT</button>
                    

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                        <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Score
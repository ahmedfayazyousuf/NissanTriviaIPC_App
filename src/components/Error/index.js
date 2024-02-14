import '../Styles&Assets/style.css';

const Error = () =>{

    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h1 style={{color: 'white', fontWeight: '900', fontSize: '150px', margin: '0', padding: '0', marginTop: '-70px', fontFamily: 'gill sans, sans-serif'}}>404</h1>
                    <p style={{color: 'white', fontWeight: '300', fontSize: '14px', marginTop: '-20px'}}>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
                </div>
            </div>
        </div>
    )
}

export default Error
import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import NissanLogo from '../Styles&Assets/NissanLogo.png';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState('All'); // Default value is 'All'

  // Inside the useEffect
useEffect(() => {
  const fetchLeaderboardData = async () => {
    let usersRef = firebase.firestore().collection('Users');

    // Apply filter if an entity is selected
    if (selectedEntity !== 'All') {
      console.log('Applying filter for entity:', selectedEntity);
      usersRef = usersRef.where('Entity', '==', selectedEntity);
    }

    const snapshot = await usersRef.orderBy('Score', 'desc').orderBy('TimeTaken').limit(10).get();

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('Leaderboard data:', data);
    setLeaderboardData(data);
  };

  fetchLeaderboardData();
}, [selectedEntity]); // Re-run useEffect when the selectedEntity changes

  const handleEntityChange = (event) => {
    setSelectedEntity(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", textAlign: 'center', backgroundColor: '#fff', padding: '10px', height: '120vh', paddingBottom: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <img style={{ width: '100px' }} src={NissanLogo} alt="Nissan Logo" />
        </div>

        <div style={{ width: '70%', backgroundColor: '#000', padding: '10px', color: 'white', textAlign: 'center', marginBottom: '10px' }}>
          <h1 style={{ fontSize: '20px', margin: '0' }}>LEADERBOARD</h1>
        </div>

        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <select value={selectedEntity} onChange={handleEntityChange} style={{ marginBottom: '10px' }}>
            <option value="All">All Entities</option>
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

        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ display: 'flex', width: '100%', borderBottom: '1px solid black', padding: '10px' }}>
            <div style={{ flex: '0.5', textAlign: 'center', fontSize: '6px' }}>
              <h1 style={{color: 'transparent'}}>#</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'left', fontSize: '6px' }}>
              <h1>NAME</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'left', fontSize: '6px' }}>
              <h1>ENTITY</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'center', fontSize: '6px' }}>
              <h1>SCORE</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'right', fontSize: '6px' }}>
              <h1>TIME</h1>
            </div>
          </div>

          {leaderboardData.map((user, index) => (
            // Check if the score is 4 or lower
            user.Score <= 4 && (
              <div key={user.id} style={{ display: 'flex', width: '100%', borderBottom: '1px solid black', padding: '3px', alignItems: 'center' }}>
                <div style={{ flex: '0.5', textAlign: 'center', fontSize: '6px' }}>
                  <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ color: 'white', margin: '0' }}>{index + 1}</h1>
                  </div>
                </div>

                <div style={{ flex: '1', textAlign: 'left', fontSize: '6px', justifyContent: 'center', alignItems: 'center'}}>
                  <h1>{user.Name.split(' ')[0]}</h1>
                </div>

                <div style={{ flex: '1', textAlign: 'left', fontSize: '6px', justifyContent: 'center', alignItems: 'center'}}>
                  <h1>{user.Entity}</h1>
                </div>

                <div style={{ flex: '1', textAlign: 'center', fontSize: '6px' }}>
                  <h1>{user.Score}</h1>
                </div>

                <div style={{ flex: '1', textAlign: 'right', fontSize: '6px' }}>
                  <h1>{user.TimeTaken}</h1>
                </div>
              </div>
            )
          ))}

        </div>
      </div>
    </>
  );
};

export default Leaderboard;

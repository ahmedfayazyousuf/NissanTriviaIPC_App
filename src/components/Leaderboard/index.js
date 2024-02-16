import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import NissanLogo from '../Styles&Assets/NissanLogo.png';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      const usersRef = firebase.firestore().collection('Users');
      const snapshot = await usersRef.orderBy('Score', 'desc').orderBy('TimeTaken').limit(10).get();

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLeaderboardData(data);
    };
    fetchLeaderboardData();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", textAlign: 'center', backgroundColor: '#fff', padding: '10px', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <img style={{ width: '100px' }} src={NissanLogo} alt="Nissan Logo" />
        </div>

        <div style={{ width: '70%', backgroundColor: '#000', padding: '10px', color: 'white', textAlign: 'center', marginBottom: '10px' }}>
          <h1 style={{ fontSize: '20px', margin: '0' }}>LEADERBOARD</h1>
        </div>

        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ display: 'flex', width: '100%', borderBottom: '1px solid black', padding: '10px' }}>
            <div style={{ flex: '0.5', textAlign: 'center', fontSize: '8px' }}>
              <h1 style={{color: 'transparent'}}>#</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'left', fontSize: '8px' }}>
              <h1>NAME</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'center', fontSize: '8px' }}>
              <h1>SCORE</h1>
            </div>

            <div style={{ flex: '1', textAlign: 'right', fontSize: '8px' }}>
              <h1>TIME</h1>
            </div>
          </div>

          {leaderboardData.map((user, index) => (
            <div key={user.id} style={{ display: 'flex', width: '100%', borderBottom: '1px solid black', padding: '3px', alignItems: 'center' }}>
              <div style={{ flex: '0.5', textAlign: 'center', fontSize: '8px' }}>
                <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h1 style={{ color: 'white', margin: '0' }}>{index + 1}</h1>
                </div>
              </div>

              <div style={{ flex: '1', textAlign: 'left', fontSize: '8px', justifyContent: 'center', alignItems: 'center'}}>
                <h1>{user.Name.split(' ')[0]}</h1>
              </div>

              <div style={{ flex: '1', textAlign: 'center', fontSize: '8px' }}>
                <h1>{user.Score}</h1>
              </div>

              <div style={{ flex: '1', textAlign: 'right', fontSize: '8px' }}>
                <h1>{user.TimeTaken}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;

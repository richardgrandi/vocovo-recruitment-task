import { useEffect, useState } from 'react';
import ApplianceForm from './components/ApplianceForm/ApplianceForm';
import ApplianceList from './components/ApplianceList/ApplianceList';
import createApplianceRecord from './util/createApplianceRecord';
import { queryApi } from './util/queryApi';
import handleLogin from './util/login';

function App() {

  const [ applianceData, setApplianceData ] = useState({});
  const [ loggedInStatus, setLoggedInStatus ] = useState(false);
  const [ showCreateAppliance, setShowCreateAppliance ] = useState(false)

  useEffect(() => {
    queryApi('/appliances/list', setApplianceData);
  }, []);

  useEffect(() => {
    if (loggedInStatus) {
      try {
        handleLogin();
      } catch (e) {
        setLoggedInStatus(false);
      }
    }
  }, [loggedInStatus])

  return (
    <div className="App">
      <div className="heading">
        <h1>Appliances</h1>

        {!loggedInStatus ?
          <button onClick={() => setLoggedInStatus(true)}>Login</button>
          :
          <button onClick={() => setLoggedInStatus(false)}>Logout</button>
        }

        <p>Appliance Count: {applianceData.length}</p>
        
        {loggedInStatus && (
          <>
            <button onClick={() => setShowCreateAppliance(true)}>Create New Appliance</button>

            {showCreateAppliance && (
              <ApplianceForm setVisibility={setShowCreateAppliance} setComponentState={setApplianceData} utility={createApplianceRecord} data={applianceData} />
            )}
          </>
        )}
      </div>
      
      <ApplianceList
        loggedIn={loggedInStatus} 
        data={applianceData}  
        setApplianceData={setApplianceData}
      />

    </div>
  )
}

export default App

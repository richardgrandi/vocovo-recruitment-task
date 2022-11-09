import ApplianceItem from "../ApplianceItem/ApplianceItem";

const ApplianceList = ({data, setApplianceData, loggedIn}) => {
  const appliances = data.length > 0 && data.map((datum) => 
    <ApplianceItem 
      key={datum.id+datum.name} 
      setComponentState={setApplianceData} 
      data={datum}
      loggedIn={loggedIn}
    />
  )

  return (
    <div className="appliance-list">
      {appliances}
    </div>
  )
}

export default ApplianceList;
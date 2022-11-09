import { useState } from "react";
import updateApplianceRecord from "../../util/updateApplianceRecord";
import deleteApplianceRecord from "../../util/deleteApplianceRecord";
import ApplianceForm from "../ApplianceForm/ApplianceForm";
import { format, parseISO } from 'date-fns';

const ApplianceItem = ({data, setComponentState, loggedIn}) => {
  const [ updateVisible, setUpdateVisible ] = useState(false);
  
  return (
    <div className="appliance-item">
      <h2>{data.name}</h2>
      <p><strong>Product Type:</strong> {data.type}</p>
      <p><strong>Date Created:</strong> {format(parseISO(data.createdAt), 'MMMM do yyyy, H:mma')}</p>

      {loggedIn && (
        <>
          <button onClick={() => setUpdateVisible(true)} value="Update Appliance">Update Appliance</button>
          <button onClick={() => deleteApplianceRecord(data.id, setComponentState)} value="Delete Appliance">Delete Appliance</button>

          {updateVisible && (
            <ApplianceForm setVisibility={setUpdateVisible} appliance={data} utility={updateApplianceRecord} setComponentState={setComponentState} />
          )}
        </>
      )}
    </div>
  )
}

export default ApplianceItem
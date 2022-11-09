import { queryApi } from "./queryApi";

const deleteApplianceRecord = (id, setComponentState) => {
  queryApi(`/appliances/delete/${id}`, setComponentState, {
    method: 'DELETE',
  })
}

export default deleteApplianceRecord;
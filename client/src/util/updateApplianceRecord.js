import { queryApi } from "./queryApi";

const updateApplianceRecord = (item, setComponentState) => {
  queryApi(`/appliances/update/${item.id}`, setComponentState, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(item)
  })
}

export default updateApplianceRecord;
import { queryApi } from "./queryApi";

const createApplianceRecord = (item, setComponentState) => {
  queryApi(`/appliances/create`, setComponentState, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(item)
  })
}

export default createApplianceRecord;
import { useState } from "react";

const ApplianceForm = ({
  appliance = false,
  utility,
  setComponentState,
  data = false,
  setVisibility
}) => {
  const [ submission, setSubmission ] = useState(appliance ? appliance: {});

  const handleSubmit = () => {
    let sub = submission;
    if (!sub.id && data.length > 0) {
      sub = {
        ...sub, 
        id: data.pop().id + 1,
        createdAt: new Date()
      }
      setSubmission(sub)
    }

    setVisibility(false);
    utility(sub, setComponentState);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSubmission({...submission, name: e.target.value})} placeholder="Appliance Name" />
      <input type="text" onChange={(e) => setSubmission({...submission, type: e.target.value})} placeholder="Appliance Type" />
      <button onClick={() => handleSubmit()}>Confirm</button>
    </div>
  )
}

export default ApplianceForm;
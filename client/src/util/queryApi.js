export const queryApi = async (endpoint, setComponentState, body) => {
  const json = await (
    await fetch(`http://localhost:8081${endpoint}`, body)
  ).json();
  
  return setComponentState(json);
}
const handleLogin = async () => {
  const json = await (
    await fetch(`http://localhost:3006/auth/signin`, {
      method: 'POST'
    })
  ).json();

  console.log(json);
}

export default handleLogin;
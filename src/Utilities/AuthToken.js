const sendPayLoad = async (currentUser) => {
  try {
    console.log(currentUser);
    const response = await fetch(`http://localhost:15000/jwt`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });

    const data = await response.json();

    console.log(data);

    const token = data.token;

    console.log(token);

    localStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
};

export default sendPayLoad;

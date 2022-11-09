const sendPayLoad = async (currentUser) => {
  try {
    console.log(currentUser);
    const response = await fetch(`https://photo-fix-server.vercel.app/jwt`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });

    const data = await response.json();

    const token = data.token;

    localStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
};

export default sendPayLoad;

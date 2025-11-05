const getSpaceX = async () => {
  const apiUrl = "https://api.spacexdata.com/v3/missions";
  const response = await fetch(apiUrl);

  const container = document.getElementById("mission");
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    data.forEach((mission, index) => {
      console.log("inside");
      console.log(mission);
      console.log(Object.entries(mission));
      const div = document.createElement("div");
      div.classList.add("mission");
      div.innerHTML = `<h2>mission ${index + 1}:</h2>`;
      Object.entries(mission).forEach(([key, val]) => {
        console.log("inside foreach");
        console.log("key: " + key + " val: " + val);
        div.innerHTML += `<h3>${key}:</h3>
        <p>${val}</p>`;
      });
      container.appendChild(div);
    });
  } else {
    console.log("Error");
  }
};
